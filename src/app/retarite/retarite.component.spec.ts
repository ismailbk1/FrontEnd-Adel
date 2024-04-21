import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetariteComponent } from './retarite.component';

describe('RetariteComponent', () => {
  let component: RetariteComponent;
  let fixture: ComponentFixture<RetariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetariteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
