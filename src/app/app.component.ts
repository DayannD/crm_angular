import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'crm';
  public obs$: Observable<any>;
  public sub$: Subject<any>;
  public behav$: BehaviorSubject<any>;

  constructor() {
    this.title = 'crm';
    this.obs$ = new Observable<any>((listX) => {
      listX.next(Math.random)
    });

    this.sub$ = new Subject();
    this.behav$ = new BehaviorSubject('toto');

    this.behav$.subscribe((data) => console.log(data));

    // this.sub$.subscribe((data) => console.log(data));
    // this.sub$.next('toto');
    // this.obs$.subscribe((data) => console.log(data));
    // this.obs$.subscribe((data) => console.log(data));
    // this.obs$.subscribe((data) => console.log(data));
  }
}
