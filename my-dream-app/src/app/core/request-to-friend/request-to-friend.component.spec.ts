import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToFriendComponent } from './request-to-friend.component';

describe('RequestToFriendComponent', () => {
  let component: RequestToFriendComponent;
  let fixture: ComponentFixture<RequestToFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestToFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestToFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
