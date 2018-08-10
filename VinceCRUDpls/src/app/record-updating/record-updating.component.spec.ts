import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordUpdatingComponent } from './record-updating.component';

describe('RecordUpdatingComponent', () => {
  let component: RecordUpdatingComponent;
  let fixture: ComponentFixture<RecordUpdatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordUpdatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordUpdatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
