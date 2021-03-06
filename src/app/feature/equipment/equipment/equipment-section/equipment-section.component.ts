import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef, AfterViewInit, Inject } from '@angular/core';
import { Item, ItemType } from '../data/item';
import { HeaderTemplateDirective } from './header-template.directive';
import { SECTION_ACTIVATED_TYPE_PROVIDER, SECTION_ACTIVATED_TYPE } from './section-type-activation-provider';
@Component({
  selector: 'app-equipment-section',
  templateUrl: './equipment-section.component.html',
  styleUrls: ['./equipment-section.component.scss'],
  providers: [SECTION_ACTIVATED_TYPE_PROVIDER],
})
export class EquipmentSectionComponent {
  constructor(@Inject(SECTION_ACTIVATED_TYPE) public sectionType: { sectionType: ItemType }) {}

  get missingCellsArray(): Array<number> {
    return new Array(4 - (this.items.length % 4));
  }

  @ContentChild(HeaderTemplateDirective, { read: TemplateRef }) headerTemplate: TemplateRef<any>;
  @Output() onItemSelection = new EventEmitter();
  @Input() items: Item[];
  @Input() supportedItemType: ItemType;

  selectedItem: Item;

  itemSelection(item: Item): void {
    this.sectionType.sectionType = this.supportedItemType;
    this.selectedItem = item;
    this.onItemSelection.emit(item);
  }
}
