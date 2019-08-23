"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const hospitals_controller_1 = require("./hospitals/hospitals.controller");
const illnesses_controller_1 = require("./illnesses/illnesses.controller");
const config_module_1 = require("./config/config.module");
const hospitals_service_1 = require("./hospitals/hospitals.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule, config_module_1.ConfigModule],
        controllers: [app_controller_1.AppController, hospitals_controller_1.HospitalsController, illnesses_controller_1.IllnessesController],
        providers: [app_service_1.AppService, hospitals_service_1.HospitalsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map