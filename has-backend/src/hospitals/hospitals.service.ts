import { Injectable, HttpService } from '@nestjs/common';
import { Hospitals } from './hospitals';
import { ConfigService } from '../config/config.service';

@Injectable()
export class HospitalsService {

  constructor(private readonly http: HttpService, private config: ConfigService) {
  }

  public async getHospitals(): Promise<Hospitals[]> {
    const urlHospitals = this.config.get('HOSPITALS_URL');

    const headersRequest = {
      'Content-Type': 'application/json'
    };

    const response = await this.http.get(`${urlHospitals}/hospitals`, { headers: headersRequest }).toPromise();
    const hospitals: Hospitals[] = response.data._embedded.hospitals.map(hospital => ({
      id: hospital.id,
      name: hospital.name
    }));

    return hospitals;
  }
}
