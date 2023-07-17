import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorItemComponent } from './color-item.component';

describe('ColorItemComponent', () => {
  let component: ColorItemComponent;
  let fixture: ComponentFixture<ColorItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorItemComponent]
    });
    fixture = TestBed.createComponent(ColorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
