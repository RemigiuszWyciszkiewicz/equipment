import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, ItemType } from '../data/item';

@Component({
  selector: 'app-equipment-item-preview',
  templateUrl: './equipment-item-preview.component.html',
  styleUrls: ['./equipment-item-preview.component.scss'],
})
export class EquipmentItemPreviewComponent {
  itemType = ItemType;

  @Output() onClosePreview = new EventEmitter();
  @Output() onChestOpen = new EventEmitter();

  @Input() item: Item;

  closePreview(): void {
    this.onClosePreview.emit();
  }

  openChest(item: Item): void {
    this.onChestOpen.emit(item);
  }
}
