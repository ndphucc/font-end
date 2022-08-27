import {Component, OnInit} from '@angular/core';
import {BenhAn} from '../model/benh-an';
import {BenhAnService} from '../service/benh-an.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-danh-sach-benh-an',
  templateUrl: './danh-sach-benh-an.component.html',
  styleUrls: ['./danh-sach-benh-an.component.css']
})
export class DanhSachBenhAnComponent implements OnInit {
  dachSachBenhAn: BenhAn[];
  benhAnBiXoa: BenhAn;
  page = 0;
  next = false;
  previous = false;

  constructor(private benhAnService: BenhAnService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  nextPage() {
    this.page = this.page + 1;
    this.findAll();
  }

  previousPage() {
    this.page = this.page - 1;
    this.findAll();
  }

  findAll() {
    this.benhAnService.findAll(this.page).subscribe(next => {
      this.dachSachBenhAn = next.content;
      this.next = !next.last;
      this.previous = !next.first;
    });
  }

  showModal(item: BenhAn) {
    this.benhAnBiXoa = item;
  }

  xoaBenhAn() {
    this.benhAnService.delete(this.benhAnBiXoa.id).subscribe(item => {
      this.benhAnService.findAll(this.page).subscribe(next => {
        this.dachSachBenhAn = next;
        this.toastr.success('Xóa thành công');
      });
    });
  }
}
