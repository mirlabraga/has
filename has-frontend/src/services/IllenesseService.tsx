import { Hospital } from "./Hospital";

export class IllenesseService {

  public async getIllenesses(): Promise<Hospital[]> {
    const response = await fetch(`/api/v1/illnesses`);

    if (response.status != 200) {
      throw { status: response.status };
    }
    return await response.json() as Hospital[];
  }
}
