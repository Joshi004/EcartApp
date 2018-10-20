import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchxComponent } from './searchx.component';

describe('SearchxComponent', () => {
  let component: SearchxComponent;
  let fixture: ComponentFixture<SearchxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
