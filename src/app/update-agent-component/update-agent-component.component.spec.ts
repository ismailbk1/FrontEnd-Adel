import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgentComponentComponent } from './update-agent-component.component';

describe('UpdateAgentComponentComponent', () => {
  let component: UpdateAgentComponentComponent;
  let fixture: ComponentFixture<UpdateAgentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAgentComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAgentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
