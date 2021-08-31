import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetarchiveComponent } from './getarchive.component';

describe('GetarchiveComponent', () => {
  let component: GetarchiveComponent;
  let fixture: ComponentFixture<GetarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
