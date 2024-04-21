import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebesoinComponent } from './listebesoin.component';

describe('ListebesoinComponent', () => {
  let component: ListebesoinComponent;
  let fixture: ComponentFixture<ListebesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListebesoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListebesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
