'use strict';

var core = require('@capacitor/core');

const SavePassword = core.registerPlugin('SavePassword', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.SavePasswordWeb()),
});

class SavePasswordWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SavePasswordWeb: SavePasswordWeb
});

exports.SavePassword = SavePassword;
//# sourceMappingURL=plugin.cjs.js.map
