import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentSectionComponent } from './equipment/equipment-section/equipment-section.component';
import { EquipmentItemPreviewComponent } from './equipment/equipment-item-preview/equipment-item-preview.component';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentComponent } from './equipment/equipment.component';

@NgModule({
  declarations: [EquipmentSectionComponent, EquipmentItemPreviewComponent, EquipmentComponent],
  imports: [CommonModule, EquipmentRoutingModule],
})
export class EquipmentModule {}