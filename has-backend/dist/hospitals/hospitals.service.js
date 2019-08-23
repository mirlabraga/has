"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_service_1 = require("../config/config.service");
let HospitalsService = class HospitalsService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    async getHospitals() {
        const urlHospitals = this.config.get('HOSPITALS_URL');
        const headersRequest = {
            'Content-Type': 'application/json'
        };
        const response = await this.http.get(`${urlHospitals}/hospitals`, { headers: headersRequest }).toPromise();
        const hospitals = response.data._embedded.hospitals.map(hospital => ({
            id: hospital.id,
            name: hospital.name
        }));
        return hospitals;
    }
};
HospitalsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService, config_service_1.ConfigService])
], HospitalsService);
exports.HospitalsService = HospitalsService;
//# sourceMappingURL=hospitals.service.js.map