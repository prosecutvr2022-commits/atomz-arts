import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';

export const AudioChimeToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  const playChimeNote = (freq: number, gainVal: number = 0.05, duration: number = 2.5) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Sa (C# / D) harmonic scale
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // ignore
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      // Play initial meditative Sa-Pa-Sa chime chord
      playChimeNote(138.59, 0.04, 3.5); // C#3 (Sa)
      playChimeNote(207.65, 0.03, 3.5); // G#3 (Pa)
      playChimeNote(277.18, 0.03, 3.5); // C#4 (Tara Sa)
      playChimeNote(554.37, 0.015, 1.5); // Ghungroo chime

      // Soft tanpura rhythm pulse every 3.2 seconds
      const notes = [138.59, 207.65, 277.18, 207.65];
      let step = 0;
      intervalRef.current = window.setInterval(() => {
        const freq = notes[step % notes.length];
        playChimeNote(freq, 0.025, 3.0);
        if (step % 2 === 0) {
          playChimeNote(554.37, 0.01, 1.0); // subtle ankle bell touch
        }
        step++;
      }, 1600);
    }
  };

  return (
    <button
      onClick={toggleSound}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
        isPlaying
          ? 'bg-[#851424] text-amber-200 border-[#D4AF37] shadow-md animate-pulse'
          : 'bg-white/10 text-slate-300 border-white/20 hover:bg-white/20 hover:text-white'
      }`}
      title={isPlaying ? 'Mute Classical Ambient Isai' : 'Play Classical Ambient Tanpura Isai'}
      aria-label="Toggle classical ambient audio"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden sm:inline font-playfair italic">Tanpura Isai On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 opacity-70" />
          <span className="hidden sm:inline font-playfair italic">Ambient Isai</span>
        </>
      )}
    </button>
  );
};
