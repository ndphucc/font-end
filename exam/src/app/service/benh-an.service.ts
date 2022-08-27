import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhAn} from '../model/benh-an';

const API_URL = 'http://localhost:8080/api/benhan';

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private http: HttpClient) {
  }

  findAll(page: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/benhan/list?page=' + page);
  }

  findById(id: string): Observable<BenhAn> {
    return this.http.get<BenhAn>(API_URL + '/' + id);
  }

  update(benhAn: BenhAn): Observable<BenhAn> {
    return this.http.put<BenhAn>(API_URL + '/edit', benhAn);
  }

  delete(id: number): Observable<BenhAn> {
    return this.http.delete<BenhAn>(API_URL + '/' + id);
  }
}
