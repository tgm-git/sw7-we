import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewerCompComponent } from './newer-comp.component';

describe('NewerCompComponent', () => {
  let component: NewerCompComponent;
  let fixture: ComponentFixture<NewerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
