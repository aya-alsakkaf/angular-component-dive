import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
//Use implments to avoid typos when dealing with lifecycle methods since the errors won't render or throw an error
export class ServerStatusComponent implements OnInit,
  OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  private interval?: ReturnType<typeof setInterval>;
  private destoryRef = inject(DestroyRef)
  //Best practice to keep the constructor lean, and use it only for initalization
  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random();
  //     if (rnd < 0.5) {
  //       this.currentStatus = 'online';
  //     } else if (rnd < 0.9) {
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';

  //     }
  //   }, 5000);
  // }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';

      }
    }, 5000);

    this.destoryRef.onDestroy(() => {
      clearInterval(interval)
    })
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval) //to avoid memoery leaks
  }


  /**************************/
  //alternative to ngOnDestory, more modern which might not work in older versions

  // ngOnInit() {
  //   const interval = setInterval(() => {
  //     const rnd = Math.random();
  //     if (rnd < 0.5) {
  //       this.currentStatus = 'online';
  //     } else if (rnd < 0.9) {
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';

  //     }
  //   }, 5000);

  //   this.destoryRef.onDestroy(() => {
  //     clearInterval(interval)
  //   })
  // }

}
