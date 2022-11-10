import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggersCardComponent } from './bloggers-card.component';

describe('BloggersCardComponent', () => {
  let component: BloggersCardComponent;
  let fixture: ComponentFixture<BloggersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggersCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
