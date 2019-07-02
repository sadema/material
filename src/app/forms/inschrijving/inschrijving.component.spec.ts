import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InschrijvingComponent} from './inschrijving.component';

describe('InschrijvingComponent', () => {
  let component: InschrijvingComponent;
  let fixture: ComponentFixture<InschrijvingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InschrijvingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InschrijvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
