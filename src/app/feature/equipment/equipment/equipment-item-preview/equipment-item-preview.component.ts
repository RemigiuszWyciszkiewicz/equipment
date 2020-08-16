import { Component, OnInit, Input } from '@angular/core';
import { ItemType, Item } from '../data/item';

@Component({
  selector: 'app-equipment-item-preview',
  templateUrl: './equipment-item-preview.component.html',
  styleUrls: ['./equipment-item-preview.component.scss'],
})
export class EquipmentItemPreviewComponent implements OnInit {
  temType = ItemType;
  @Input() item: Item;

  constructor() {}

  ngOnInit(): void {}

  i;
}
