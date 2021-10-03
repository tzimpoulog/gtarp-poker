import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCardsComponent } from './your-cards.component';

describe('YourCardsComponent', () => {
  let component: YourCardsComponent;
  let fixture: ComponentFixture<YourCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
