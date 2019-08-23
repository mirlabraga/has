import * as dotenv from 'dotenv';

export class ConfigService {

  private readonly envConfig: { [key: string]: string };

  constructor() {
    const result = dotenv.config();
    if (result.error) {
        console.error(result.error);
    }
    this.envConfig = result.parsed || process.env;
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
