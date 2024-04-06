import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InorderedWordsGameComponent } from './inordered-words-game.component';

describe('InorderedWordsGameComponent', () => {
  let component: InorderedWordsGameComponent;
  let fixture: ComponentFixture<InorderedWordsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InorderedWordsGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InorderedWordsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
