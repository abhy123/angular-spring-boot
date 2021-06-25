import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProvider2Component } from './search-provider2.component';

describe('SearchProvider2Component', () => {
  let component: SearchProvider2Component;
  let fixture: ComponentFixture<SearchProvider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProvider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProvider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
