/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMBOLD_FORM_ID?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
