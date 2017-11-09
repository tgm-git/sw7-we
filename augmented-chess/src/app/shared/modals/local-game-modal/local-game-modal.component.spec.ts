import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalGameModalComponent } from './local-game-modal.component';

describe('LocalGameModalComponent', () => {
  let component: LocalGameModalComponent;
  let fixture: ComponentFixture<LocalGameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalGameModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalGameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
