import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Tracking Money App';
  subTitle: string = "Target";
  targets: Array<String> = ["in", "out", "saved"];

}
