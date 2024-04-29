import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMutationComponent } from './update-mutation.component';

describe('UpdateMutationComponent', () => {
  let component: UpdateMutationComponent;
  let fixture: ComponentFixture<UpdateMutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
