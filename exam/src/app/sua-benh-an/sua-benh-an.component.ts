import {Component, OnInit} from '@angular/core';
import {BenhAn} from '../model/benh-an';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BenhAnService} from '../service/benh-an.service';
import {BenhNhan} from '../model/benh-nhan';
import {BenhNhanService} from '../service/benh-nhan.service';

@Component({
  selector: 'app-sua-benh-an',
  templateUrl: './sua-benh-an.component.html',
  styleUrls: ['./sua-benh-an.component.css']
})
export class SuaBenhAnComponent implements OnInit {

  maBenhAn: number;
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
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.benhAnService.findById(paraMap.get('id')).subscribe(benhAn => {
        this.benhAn = benhAn;
        console.log(this.benhAn);
        this.maBenhAn = benhAn.id;
        this.benhAnForm = this.fb.group({
          ngay: new FormGroup({
            ngayNhapVien: new FormControl(this.benhAn.ngayNhapVien, Validators.required),
            ngayRaVien: new FormControl(this.benhAn.ngayRaVien, Validators.required)
          }, this.ngayValidator),
          lyDoNhapVien: [this.benhAn.lyDo, Validators.required],
          phuongPhapDieuTri: [this.benhAn.phuongPhapDieuTri, Validators.required],
          bacSiDieuTri: [this.benhAn.bacSiDieuTri, Validators.required],
          tenBenhNhan: [this.benhAn.benhNhan.id, [Validators.required]],
        });
        console.log(this.benhAnForm);
      });
    });
  }

  onSubmit() {
    this.submit = true;
    if (this.benhAnForm.valid) {
      this.benhAn.id = this.maBenhAn;
      this.benhAn.benhNhan.name = this.benhAnForm.value.tenBenhNhan;
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
