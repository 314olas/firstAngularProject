import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsUsMainContentComponent } from './contacts-us-main-content.component';

describe('ContactsUsMainContentComponent', () => {
  let component: ContactsUsMainContentComponent;
  let fixture: ComponentFixture<ContactsUsMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsUsMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsUsMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
