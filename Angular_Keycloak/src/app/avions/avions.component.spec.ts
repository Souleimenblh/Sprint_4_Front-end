import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionsComponent } from './avions.component';

describe('AvionsComponent', () => {
  let component: AvionsComponent;
  let fixture: ComponentFixture<AvionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvionsComponent]
    });
    fixture = TestBed.createComponent(AvionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
