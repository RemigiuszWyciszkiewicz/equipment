import { Component, OnInit } from '@angular/core';
import * as data from './data/items-mock.json';
import { Item, ItemType } from './data/item';
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
