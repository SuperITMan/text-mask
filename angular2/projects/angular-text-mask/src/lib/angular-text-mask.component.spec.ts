import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTextMaskComponent } from './angular-text-mask.component';

describe('AngularTextMaskComponent', () => {
  let component: AngularTextMaskComponent;
  let fixture: ComponentFixture<AngularTextMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTextMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTextMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
