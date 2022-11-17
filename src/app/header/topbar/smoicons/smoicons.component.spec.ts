import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoiconsComponent } from './smoicons.component';

describe('SmoiconsComponent', () => {
  let component: SmoiconsComponent;
  let fixture: ComponentFixture<SmoiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmoiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmoiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
