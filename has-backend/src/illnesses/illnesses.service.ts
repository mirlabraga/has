import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Illnesses } from './illnesses';

@Injectable()
export class IllnessesService {
  constructor(private readonly http: HttpService, private config: ConfigService) {
  }

  public async getIllnesses(): Promise<Illnesses[]> {
    const urlIllnesses = this.config.get('ILLNESSES_URL');

    const headersRequest = {
      'Content-Type': 'application/json'
    };

    const response = await this.http.get(`${urlIllnesses}/illnesses`, { headers: headersRequest }).toPromise();
    const Illnesses: Illnesses[] = response.data._embedded.illnesses.map(info => ({
      id: info.illness.id,
      name: info.illness.name
    }));

    return Illnesses;
  }
}
