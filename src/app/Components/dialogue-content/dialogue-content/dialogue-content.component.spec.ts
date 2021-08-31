import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueContentComponent } from './dialogue-content.component';

describe('DialogueContentComponent', () => {
  let component: DialogueContentComponent;
  let fixture: ComponentFixture<DialogueContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
