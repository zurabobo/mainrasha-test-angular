import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitAgencyComponent } from './exit-agency.component';

describe('ExitAgencyComponent', () => {
  let component: ExitAgencyComponent;
  let fixture: ComponentFixture<ExitAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
