import {Document} from 'mongoose';

export interface Patient extends Document {
  name: string;
  levelOfPain: number;
}

export interface CreatePatientDto {
  name: string;
  levelOfPain: number;
}
