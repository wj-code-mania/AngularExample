import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of, range, timeout, timer } from 'rxjs';
import { debounce, debounceTime, delay, scan, switchMap, take, takeLast, takeUntil, takeWhile, map, mergeMap, mergeAll, distinctUntilChanged } from 'rxjs/operators';
import { RandomUsersService } from '../shared/services/random-users.service'
import { RandomUser } from '../shared/models/random-user';

@Component({
  selector: 'app-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.scss']
})
export class RxTestComponent implements OnInit {

  currentRandomUser: RandomUser = {}
  constructor (private randomUserService: RandomUsersService) {

  }

  ngOnInit() {
    interval(2000).pipe(
      take(1),
      map(index => this.randomUserService.getRandomUser()),
      mergeAll()
    ).subscribe(
      randomUsers => {
        this.currentRandomUser = randomUsers ? randomUsers[0] : {};

        console.log(randomUsers);
      }
    )
    

    // const array = [1, 2, true, 'simple'];
    // of(...array).subscribe({
    //   next: value => console.log(value),
    //   error: undefined,
    //   complete: () => console.log('completed')
    // });
    
    
    // interval(1000).pipe(
    //   take(5)
    // ).subscribe(
    //   x => console.log(`result: ${x}`)
    // )

    // subscribe until an event occurs.
    //   interval(1000).pipe(
    //     takeUntil(fromEvent(document, 'click'))
    //   ).subscribe(x => console.log(x))

    // interval(1000).pipe(
    //   takeWhile((value, index) => index < 5)
    // ).subscribe(x => console.log(x))

    // range(1, 5).pipe(
    //   takeLast(1)
    // ).subscribe(x => console.log(x));

    // interval(1000).pipe(
    //   take(5),
    //   takeLast(2)
    // ).subscribe(x => console.log(x));

    // fromEvent(document, 'click')
    // .pipe(
    //   scan(i => ++i, 0),
    //   map((number) => interval(1000).pipe(map(a => number), take(10)))
    // )
    // .pipe(mergeAll(2))
    // .subscribe(x => console.log(x));

    fromEvent<KeyboardEvent>(document, 'keydown')
    .pipe(
      map(event => event.key),
      debounceTime(1000),
      // distinctUntilChanged(),
      // switchMap(arr => of(`Search result for keyword: ${arr.key}`).pipe(delay(1000))),
      // mergeAll()
      // scan(i => ++i, 1),
      // take(4),
      // debounceTime(200)
    )
    .subscribe(x => console.log(x));
  }
}
