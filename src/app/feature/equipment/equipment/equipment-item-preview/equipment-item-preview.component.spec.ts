import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentItemPreviewComponent } from './equipment-item-preview.component';

describe('EquipmentItemPreviewComponent', () => {
  let component: EquipmentItemPreviewComponent;
  let fixture: ComponentFixture<EquipmentItemPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentItemPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
