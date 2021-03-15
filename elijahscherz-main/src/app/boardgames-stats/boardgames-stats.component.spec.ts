import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamesStatsComponent } from './boardgames-stats.component';

describe('BoardgamesStatsComponent', () => {
  let component: BoardgamesStatsComponent;
  let fixture: ComponentFixture<BoardgamesStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardgamesStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgamesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
