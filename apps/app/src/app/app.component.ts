import { Component } from '@angular/core';
import { OneService } from './one.service';

@Component({
  selector: 'angular-test-issue-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  testGetter() {
    return this.oneService.myGetter;
  }

  constructor(private oneService: OneService) {}
}
