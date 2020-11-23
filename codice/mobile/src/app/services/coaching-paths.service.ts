import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoachingPathsService {
  constructor() {}

  getCoachingPaths() {
    return [
      {
        id: '1',
        status: 'done'
      },
      {
        id: '2',
        status: 'idle'
      },
      {
        id: '3',
        status: 'idle'
      }
    ];
  }
}
