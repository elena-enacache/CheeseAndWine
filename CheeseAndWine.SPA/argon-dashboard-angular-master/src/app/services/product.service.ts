import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = `/api/Products/`;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getProducts() {
    return this.http.get(this.baseUrl);
  }

}
