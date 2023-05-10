import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTecComponent } from './dashboard-tec.component';

describe('DashboardTecComponent', () => {
  let component: DashboardTecComponent;
  let fixture: ComponentFixture<DashboardTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
