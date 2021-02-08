import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequesterComponent } from './edit-requester.component';

describe('EditRequesterComponent', () => {
  let component: EditRequesterComponent;
  let fixture: ComponentFixture<EditRequesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRequesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRequesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
