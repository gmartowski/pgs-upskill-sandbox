import * as rxjs from 'rxjs';
import { filter, fromEvent, Observable, of } from "rxjs";
import { map } from 'rxjs/operators';

function print(value) {
  const container = document.querySelector('div#data');
  container.append(value);
}

///
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(3);
  subscriber.next(2);
  subscriber.next(4);
  subscriber.next(5);
});

observable.subscribe((value) => print(value))
///


const obs = of([1, 2, 3, 4, 5, 6, 7, 8]);
const obs1 = fromEvent(document, 'click');
obs1.pipe(filter(value => value.clientX > 1)).subscribe(value => console.log(value));


