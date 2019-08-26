import { Injectable, HttpService } from '@nestjs/common';
import { Hospital } from './hospitals';
import { ConfigService } from '../config/config.service';

@Injectable()
export class HospitalsService {

  constructor(private readonly http: HttpService, private config: ConfigService) {
  }

  public async getHospitals(): Promise<Hospital[]> {
    const urlHospitals = this.config.get('HOSPITALS_URL');
    const headersRequest = {
      'Content-Type': 'application/json'
    };

    const response = await this.http.get(`${urlHospitals}/hospitals`, { headers: headersRequest }).toPromise();
    const hospitals: Hospital[] = response.data._embedded.hospitals.map(hospital => ({
      id: hospital.id,
      name: hospital.name,
      waitingList: hospital.waitingList
    }));

    return hospitals;
  }

  public async calculateWaitingTimes(): Promise<Hospital[]> {
    let hospitals: Hospital[] = await this.getHospitals();
    hospitals.forEach(hospital => {
      hospital.waitingList.map(waitingList => {
        waitingList.waitingTime = waitingList.patientCount * waitingList.averageProcessTime;
      })
    })
    return hospitals;
  }

  public async calculateWaitingTimesByPain(pain: number): Promise<Hospital[]> {
    let hospitals: Hospital[] = await this.getHospitals();
    let newHospitals: Hospital[] = []
    hospitals.forEach(hospital => {
      hospital.waitingList.forEach( waitingListCurrent => {
        if (waitingListCurrent.levelOfPain == pain) {
          newHospitals.push({...hospital, waitingList: [
            {
              patientCount: waitingListCurrent.patientCount,
              levelOfPain: waitingListCurrent.levelOfPain,
              averageProcessTime: waitingListCurrent.averageProcessTime,
              waitingTime: waitingListCurrent.patientCount * waitingListCurrent.averageProcessTime,
            }
          ]});
        }
      })
    })
    return newHospitals;
  }
}
