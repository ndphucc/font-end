import {Component, OnInit} from '@angular/core';
import {BenhAn} from '../model/benh-an';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhNhan} from '../model/benh-nhan';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {BenhAnService} from '../service/benh-an.service';
import {BenhNhanService} from '../service/benh-nhan.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  benhAn: BenhAn;
  benhAnForm: FormGroup;
  submit = false;
  benhNhans: BenhNhan[];

  constructor(private toastr: ToastrService, private router: Router, private activatedRoute: ActivatedRoute,
              private fb: FormBuilder, private benhAnService: BenhAnService, private benhNhanService: BenhNhanService) {
  }

  ngOnInit(): void {
    this.benhNhanService.findAll().subscribe(next => {
      this.benhNhans = next;
    });
    this.benhAnForm = this.fb.group({
      ngay: new FormGroup({
        ngayNhapVien: new FormControl('', Validators.required),
        ngayRaVien: new FormControl('', Validators.required)
      }, this.ngayValidator),
      lyDoNhapVien: ['', Validators.required],
      phuongPhapDieuTri: ['', Validators.required],
      bacSiDieuTri: ['', Validators.required],
      tenBenhNhan: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submit = true;
    if (this.benhAnForm.valid) {
      this.benhAn.lyDo = this.benhAnForm.value.lyDoNhapVien;
      this.benhAn.phuongPhapDieuTri = this.benhAnForm.value.phuongPhapDieuTri;
      this.benhAn.bacSiDieuTri = this.benhAnForm.value.bacSiDieuTri;
      this.benhAn.ngayNhapVien = this.benhAnForm.get('ngay').value.ngayNhapVien;
      this.benhAn.ngayRaVien = this.benhAnForm.get('ngay').value.ngayRaVien;
      this.benhNhanService.findById(this.benhAnForm.value.tenBenhNhan).subscribe(value => {
        this.benhAn.benhNhan = value;
        this.benhAnService.update(this.benhAn).subscribe(next => {
          this.router.navigateByUrl('');
        });
      });
    }
  }

  ngayValidator(formControl: AbstractControl) {
    const startDate = new Date(formControl.value.ngayNhapVien);
    const endDate = new Date(formControl.value.ngayRaVien);
    if (endDate.getTime() < startDate.getTime()) {
      return {dateValidator: true};
    }
  }

}
