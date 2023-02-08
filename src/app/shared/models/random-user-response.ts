import { RandomUser } from './random-user'

export interface RandomUserResponse {
  results: RandomUser[],
  info?: {
    seed?: string;
    results?: number;
    page?: number;
    version?: string;
  }
}
