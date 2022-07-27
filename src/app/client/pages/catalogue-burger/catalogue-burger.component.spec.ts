import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueBurgerComponent } from './catalogue-burger.component';

describe('CatalogueBurgerComponent', () => {
  let component: CatalogueBurgerComponent;
  let fixture: ComponentFixture<CatalogueBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
