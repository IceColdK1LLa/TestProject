import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGaleryComponent } from './art-galery.component';

describe('ArtGaleryComponent', () => {
  let component: ArtGaleryComponent;
  let fixture: ComponentFixture<ArtGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
