import { registerPlugin } from '@capacitor/core';
const SavePassword = registerPlugin('SavePassword', {
    web: () => import('./web').then((m) => new m.SavePasswordWeb()),
});
export * from './definitions';
export { SavePassword };
//# sourceMappingURL=index.js.map