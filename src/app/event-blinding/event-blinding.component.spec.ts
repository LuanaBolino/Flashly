import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBlindingComponent } from './event-blinding.component';

describe('EventBlindingComponent', () => {
  let component: EventBlindingComponent;
  let fixture: ComponentFixture<EventBlindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBlindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBlindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
