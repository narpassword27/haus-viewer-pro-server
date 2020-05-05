import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  Devices: Device[] = [
    {name: 'Main Computer', address: '1.2.3.4'},
    {name: 'Side Computer', address: '5.6.7.8'}
  ];
}


interface Device {
  name: string,
  address: string,
}
