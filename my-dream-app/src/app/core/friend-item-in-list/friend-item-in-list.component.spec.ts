import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendItemInListComponent } from './friend-item-in-list.component';

describe('FriendItemInListComponent', () => {
  let component: FriendItemInListComponent;
  let fixture: ComponentFixture<FriendItemInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendItemInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendItemInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
