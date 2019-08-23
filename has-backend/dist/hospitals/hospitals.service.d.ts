import { HttpService } from '@nestjs/common';
import { Hospitals } from './hospitals';
import { ConfigService } from '../config/config.service';
export declare class HospitalsService {
    private readonly http;
    private config;
    constructor(http: HttpService, config: ConfigService);
    getHospitals(): Promise<Hospitals[]>;
}
