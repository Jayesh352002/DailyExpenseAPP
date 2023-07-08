import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModuleComponent } from './edit-item-module.component';

describe('EditItemModuleComponent', () => {
  let component: EditItemModuleComponent;
  let fixture: ComponentFixture<EditItemModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
