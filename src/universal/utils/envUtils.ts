export const DEV_ENV = process.env.NODE_ENV === 'development';

export const PROD_ENV = process.env.NODE_ENV === 'production';

export let canUseDOM = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);
