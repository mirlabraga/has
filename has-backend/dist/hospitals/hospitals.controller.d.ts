import { HttpService } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { Request } from 'express';
export declare class HospitalsController {
    private readonly http;
    private hospitalsService;
    constructor(http: HttpService, hospitalsService: HospitalsService);
    getUsersConfluence(request: Request): Promise<import("./hospitals").Hospitals[]>;
}
