import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsPostsComponent } from './contact-us-posts.component';

describe('ContactUsPostsComponent', () => {
  let component: ContactUsPostsComponent;
  let fixture: ComponentFixture<ContactUsPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
