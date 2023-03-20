import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDetailsComponentComponent } from './view-product-details-component.component';

describe('ViewProductDetailsComponentComponent', () => {
  let component: ViewProductDetailsComponentComponent;
  let fixture: ComponentFixture<ViewProductDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
