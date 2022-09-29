import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AylinWoodsComponent } from './aylin-woods.component';

describe('AylinWoodsComponent', () => {
  let component: AylinWoodsComponent;
  let fixture: ComponentFixture<AylinWoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AylinWoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AylinWoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
