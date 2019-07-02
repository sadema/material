import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AgendaContainerComponent} from './agenda-container.component';

describe('AgendaContainerComponent', () => {
  let component: AgendaContainerComponent;
  let fixture: ComponentFixture<AgendaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
