import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaBenhAnComponent } from './sua-benh-an.component';

describe('SuaBenhAnComponent', () => {
  let component: SuaBenhAnComponent;
  let fixture: ComponentFixture<SuaBenhAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaBenhAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaBenhAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
