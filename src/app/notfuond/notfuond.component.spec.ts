import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutfuondComponent } from './notfuond.component';

describe('NutfuondComponent', () => {
  let component: NutfuondComponent;
  let fixture: ComponentFixture<NutfuondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutfuondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutfuondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
