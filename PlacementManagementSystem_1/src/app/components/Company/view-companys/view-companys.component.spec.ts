import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanysComponent } from './view-companys.component';

describe('ViewCompanysComponent', () => {
  let component: ViewCompanysComponent;
  let fixture: ComponentFixture<ViewCompanysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompanysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCompanysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
