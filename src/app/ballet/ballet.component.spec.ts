import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalletComponent } from './ballet.component';

describe('BalletComponent', () => {
  let component: BalletComponent;
  let fixture: ComponentFixture<BalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
