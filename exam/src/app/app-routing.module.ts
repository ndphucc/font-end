import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DanhSachBenhAnComponent} from './danh-sach-benh-an/danh-sach-benh-an.component';
import {SuaBenhAnComponent} from './sua-benh-an/sua-benh-an.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: DanhSachBenhAnComponent
  },
  {
    path: 'edit/:id',
    component: SuaBenhAnComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
