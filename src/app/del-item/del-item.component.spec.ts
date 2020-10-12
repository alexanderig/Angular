import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelItemComponent } from './del-item.component';

describe('DelItemComponent', () => {
  let component: DelItemComponent;
  let fixture: ComponentFixture<DelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
