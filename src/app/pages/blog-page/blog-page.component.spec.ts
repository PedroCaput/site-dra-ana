import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPage } from './blog-page.component';

describe('BlogPage', () => {
  let component: BlogPage;
  let fixture: ComponentFixture<BlogPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogPage]
    });
    fixture = TestBed.createComponent(BlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
