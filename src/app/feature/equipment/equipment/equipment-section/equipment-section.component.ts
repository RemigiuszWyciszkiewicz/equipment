import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { Item, ItemType } from '../data/item';
import { HeaderTemplateDirective } from './header-template.directive';

@Component({
  selector: 'app-equipment-section',
  templateUrl: './equipment-section.component.html',
  styleUrls: ['./equipment-section.component.scss'],
})
export class EquipmentSectionComponent {
  get missingCellsArray(): Array<number> {
    return new Array(4 - (this.items.length % 4));
  }

  @ContentChild(HeaderTemplateDirective, { read: TemplateRef }) headerTemplate: TemplateRef<any>;
  @Output() onItemSelection = new EventEmitter();
  @Input() items: Item[];
  @Input() supportedItemType: ItemType;

  selectedItem: Item;

  itemSelection(item: Item): void {
    this.selectedItem = item;
    this.onItemSelection.emit(item);
  }
}
