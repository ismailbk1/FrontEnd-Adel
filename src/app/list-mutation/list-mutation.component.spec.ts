import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMutationComponent } from './list-mutation.component';

describe('ListMutationComponent', () => {
  let component: ListMutationComponent;
  let fixture: ComponentFixture<ListMutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
