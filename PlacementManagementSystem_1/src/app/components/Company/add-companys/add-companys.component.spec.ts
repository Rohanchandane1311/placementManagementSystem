import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanysComponent } from './add-companys.component';

describe('AddCompanysComponent', () => {
  let component: AddCompanysComponent;
  let fixture: ComponentFixture<AddCompanysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompanysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompanysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
