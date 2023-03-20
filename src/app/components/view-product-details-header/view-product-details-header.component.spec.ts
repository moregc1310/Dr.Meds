import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDetailsHeaderComponent } from './view-product-details-header.component';

describe('ViewProductDetailsHeaderComponent', () => {
  let component: ViewProductDetailsHeaderComponent;
  let fixture: ComponentFixture<ViewProductDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductDetailsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
