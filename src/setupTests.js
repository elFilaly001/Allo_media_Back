import '@testing-library/jest-dom';

globalThis.importMetaEnv = {
  VITE_API_URL: 'http://localhost:3000/api',
};

// Mock import.meta.env
Object.defineProperty(globalThis, 'import', {
  value: {
    meta: {
      env: globalThis.importMetaEnv,
    },
  },
});