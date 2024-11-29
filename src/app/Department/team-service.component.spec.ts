import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamServiceComponent } from './team-service.component';

describe('TeamServiceComponent', () => {
  let component: TeamServiceComponent;
  let fixture: ComponentFixture<TeamServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
