import { Injectable } from '@nestjs/common';

export enum Pains {
  NO_PAIN = 0,
  MILD_PAIN = 1,
  MODERATE_PAIN = 2,
  SEVERE_PAIN = 3,
  WORST_PAIN = 4
}

@Injectable()
export class PainService {

  public async getPains(): Promise<Pains[]> {
    return [Pains.NO_PAIN, Pains.MILD_PAIN, Pains.MODERATE_PAIN, Pains.SEVERE_PAIN, Pains.WORST_PAIN];
  }
}
