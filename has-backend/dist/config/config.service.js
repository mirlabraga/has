"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
class ConfigService {
    constructor() {
        const result = dotenv.config();
        if (result.error) {
            console.error(result.error);
        }
        this.envConfig = result.parsed || process.env;
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map