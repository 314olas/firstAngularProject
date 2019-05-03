import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSuccessMessageComponent } from './send-success-message.component';

describe('SendSuccessMessageComponent', () => {
  let component: SendSuccessMessageComponent;
  let fixture: ComponentFixture<SendSuccessMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSuccessMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
