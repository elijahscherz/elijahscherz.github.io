import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInterestsComponent } from './home-interests.component';

describe('HomeInterestsComponent', () => {
  let component: HomeInterestsComponent;
  let fixture: ComponentFixture<HomeInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
