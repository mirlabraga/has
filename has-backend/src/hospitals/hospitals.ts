export interface Hospital {
  id: number;
  name: string;
  waitingList: WaitingList[]
}

export interface WaitingList {
  patientCount: number;
  levelOfPain: number;
  averageProcessTime: number;
  waitingTime: number;
}
