import { Hospital } from "./Hospital";

export class HospitalService {

  public async getHospitals(): Promise<Hospital[]> {
    const response = await fetch(`/api/v1/hospitals/waitingtimes`);

    if (response.status != 200) {
      throw { status: response.status };
    }
    return await response.json() as Hospital[];
  }

  public async getHospitalsByPain(pain: number): Promise<Hospital[]> {
    const response = await fetch(`/api/v1/hospitals/waitingtimes/pain=${pain}`);

    if (response.status != 200) {
      throw { status: response.status };
    }
    return await response.json() as Hospital[];
  }
}
