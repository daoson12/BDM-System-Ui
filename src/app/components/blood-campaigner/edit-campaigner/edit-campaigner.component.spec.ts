import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCampaignerComponent } from './edit-campaigner.component';

describe('EditCampaignerComponent', () => {
  let component: EditCampaignerComponent;
  let fixture: ComponentFixture<EditCampaignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCampaignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCampaignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
