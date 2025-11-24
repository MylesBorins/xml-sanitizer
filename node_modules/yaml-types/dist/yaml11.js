"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = exports.set = exports.pairs = exports.omap = exports.binary = void 0;
const yaml_1 = require("yaml");
const tags = new yaml_1.Schema({ resolveKnownTags: true }).knownTags;
exports.binary = tags["tag:yaml.org,2002:binary"], exports.omap = tags["tag:yaml.org,2002:omap"], exports.pairs = tags["tag:yaml.org,2002:pairs"], exports.set = tags["tag:yaml.org,2002:set"];
exports.timestamp = {
    ...tags['tag:yaml.org,2002:timestamp'],
    default: false
};
//# sourceMappingURL=yaml11.js.map