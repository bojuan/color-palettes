"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_server_1 = require("json-server");
var fs_1 = require("fs");
var server = (0, json_server_1.create)();
var routerJsonServer = (0, json_server_1.router)('server/db.json');
var middlewares = (0, json_server_1.defaults)();
server.use(json_server_1.bodyParser);
server.use(middlewares);
server.get('/color-palettes', function (_, res) {
    var _a, _b;
    var data = (0, fs_1.readFileSync)('server/db.json', 'utf-8');
    var colorPalettes = (_b = (_a = JSON.parse(data)) === null || _a === void 0 ? void 0 : _a.palettes) !== null && _b !== void 0 ? _b : [];
    res.json(colorPalettes);
});
server.use(routerJsonServer);
server.listen(3100, function () {
    console.log('JSON Server is running');
});
