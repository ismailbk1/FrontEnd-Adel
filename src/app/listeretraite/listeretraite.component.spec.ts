import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeretraiteComponent } from './listeretraite.component';

describe('ListeretraiteComponent', () => {
  let component: ListeretraiteComponent;
  let fixture: ComponentFixture<ListeretraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeretraiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeretraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
