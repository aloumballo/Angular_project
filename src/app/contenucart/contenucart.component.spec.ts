import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenucartComponent } from './contenucart.component';

describe('ContenucartComponent', () => {
  let component: ContenucartComponent;
  let fixture: ComponentFixture<ContenucartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenucartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenucartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
