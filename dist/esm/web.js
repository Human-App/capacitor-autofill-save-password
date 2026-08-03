import { WebPlugin } from '@capacitor/core';
export class SavePasswordWeb extends WebPlugin {
    readPassword() {
        throw new Error('Method not implemented.');
    }
    async promptDialog(options) {
        throw new Error('Not implemented on web' + JSON.stringify(options));
    }
    async getPluginVersion() {
        return { version: 'web' };
    }
}
//# sourceMappingURL=web.js.map