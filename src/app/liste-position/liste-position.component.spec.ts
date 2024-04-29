import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePositionComponent } from './liste-position.component';

describe('ListePositionComponent', () => {
  let component: ListePositionComponent;
  let fixture: ComponentFixture<ListePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListePositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
