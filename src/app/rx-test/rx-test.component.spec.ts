import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxTestComponent } from './rx-test.component';

describe('RxTestComponent', () => {
  let component: RxTestComponent;
  let fixture: ComponentFixture<RxTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
