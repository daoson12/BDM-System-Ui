import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaignerComponent } from './add-campaigner.component';

describe('AddCampaignerComponent', () => {
  let component: AddCampaignerComponent;
  let fixture: ComponentFixture<AddCampaignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampaignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampaignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
