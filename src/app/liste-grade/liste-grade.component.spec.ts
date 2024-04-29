import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGradeComponent } from './liste-grade.component';

describe('ListeGradeComponent', () => {
  let component: ListeGradeComponent;
  let fixture: ComponentFixture<ListeGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
