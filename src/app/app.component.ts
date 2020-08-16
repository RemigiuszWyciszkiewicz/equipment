import { Component, OnInit } from '@angular/core';
import * as data from './items-mock.json';
import { Item } from './feature/equipment/equipment/data/item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Item[] = data['default'];
}
