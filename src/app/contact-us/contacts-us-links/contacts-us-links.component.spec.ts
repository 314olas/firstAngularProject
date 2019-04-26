import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsUsLinksComponent } from './contacts-us-links.component';

describe('ContactsUsLinksComponent', () => {
  let component: ContactsUsLinksComponent;
  let fixture: ComponentFixture<ContactsUsLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsUsLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsUsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
