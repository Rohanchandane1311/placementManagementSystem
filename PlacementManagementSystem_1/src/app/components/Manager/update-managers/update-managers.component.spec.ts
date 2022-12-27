import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManagersComponent } from './update-managers.component';

describe('UpdateManagersComponent', () => {
  let component: UpdateManagersComponent;
  let fixture: ComponentFixture<UpdateManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateManagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
