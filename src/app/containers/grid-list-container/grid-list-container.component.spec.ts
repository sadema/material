import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListContainerComponent } from './grid-list-container.component';

describe('GridListContainerComponent', () => {
  let component: GridListContainerComponent;
  let fixture: ComponentFixture<GridListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
