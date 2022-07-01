import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoudnComponent } from './not-foudn.component';

describe('NotFoudnComponent', () => {
  let component: NotFoudnComponent;
  let fixture: ComponentFixture<NotFoudnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoudnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoudnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
