import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2LayoutComponent } from './n2-layout.component';

describe('N2LayoutComponent', () => {
  let component: N2LayoutComponent;
  let fixture: ComponentFixture<N2LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N2LayoutComponent]
    });
    fixture = TestBed.createComponent(N2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
