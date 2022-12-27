import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1NavbarComponent } from './admin1-navbar.component';

describe('Admin1NavbarComponent', () => {
  let component: Admin1NavbarComponent;
  let fixture: ComponentFixture<Admin1NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin1NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin1NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
