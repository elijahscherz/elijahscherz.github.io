import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BoardgamesToolsComponent } from "./boardgames-tools.component";

describe("BoardgamesToolsComponent", () => {
  let component: BoardgamesToolsComponent;
  let fixture: ComponentFixture<BoardgamesToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardgamesToolsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgamesToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
