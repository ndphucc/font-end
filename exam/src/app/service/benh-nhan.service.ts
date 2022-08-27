import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhNhan} from '../model/benh-nhan';

const API_URL = 'http://localhost:8080/api/benhnhan';

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<BenhNhan[]> {
    return this.http.get<BenhNhan[]>(API_URL + '/list');
  }

  findById(id: number): Observable<BenhNhan> {
    return this.http.get<BenhNhan>(API_URL + '/' + id);
  }
}
