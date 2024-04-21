import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemutationComponent } from './listemutation.component';

describe('ListemutationComponent', () => {
  let component: ListemutationComponent;
  let fixture: ComponentFixture<ListemutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListemutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListemutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
