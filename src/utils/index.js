export const isMobile = window.navigator.userAgent.toLowerCase().includes('mobile');

export const isNonemptyObject = data => typeof data === 'object' && !Array.isArray(data) && data !== null;
