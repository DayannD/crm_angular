import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  incr: number = 100000;
  public version$: BehaviorSubject<number>;

  constructor() {
    this.version$ = new BehaviorSubject(this.incr);
  }

  public oneMore(){
    this.version$.next(this.incr++);
  }
  public getVersion(): BehaviorSubject<number>{
    return this.version$;
  }
}
