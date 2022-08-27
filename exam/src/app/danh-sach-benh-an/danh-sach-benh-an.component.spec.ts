import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachBenhAnComponent } from './danh-sach-benh-an.component';

describe('DanhSachBenhAnComponent', () => {
  let component: DanhSachBenhAnComponent;
  let fixture: ComponentFixture<DanhSachBenhAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachBenhAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachBenhAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
