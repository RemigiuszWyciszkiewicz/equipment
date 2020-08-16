import { Component, OnInit } from '@angular/core';
import * as data from './data/items-mock.json';
import { Item, ItemType } from './data/item';
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  get chests(): Item[] {
    return this.items.filter((value) => value.type === ItemType.CHEST);
  }

  get rewards(): Item[] {
    return this.items.filter((value) => value.type === ItemType.REWARD);
  }
  constructor() {}

  items: Item[];

  ngOnInit(): void {
    this.loadMock();
  }

  private loadMock(): void {
    this.items = data['default'];
  }
}
