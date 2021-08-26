import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletenotesComponent } from './deletenotes.component';

describe('DeletenotesComponent', () => {
  let component: DeletenotesComponent;
  let fixture: ComponentFixture<DeletenotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletenotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
