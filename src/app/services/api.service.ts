import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  async get(path, params = {}) {
    return await firstValueFrom(this.http.get(this.apiUrl(path), this.getOptions(params)))
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  async post(path, params = {}) {
    return await firstValueFrom(this.http.post(this.apiUrl(path), params, this.getOptions()))
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  async patch(path, params = {}) {
    return await firstValueFrom(this.http.patch(this.apiUrl(path), params, this.getOptions()))
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  async delete(path, params = {}) {
    return await firstValueFrom(this.http.delete(this.apiUrl(path), this.getOptions({}, params)))
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  apiUrl(path) {
    const url = [environment.apiUrl];
    return [...url, path].join('/');
  }

  private getOptions(params = {}, body = {}) {
    let headers: any = {'Content-Type': 'application/json'};

    return {
      headers: new HttpHeaders(headers),
      params,
      body,
    };
  }

  private successResponse(response) {
    return response;
  }

  private errorResponse(response) {

    switch (response.status) {
      case 401: {
        localStorage.clear();
        this.router.navigate(['/login']);
        break;
      }
      case 403: {
        this.router.navigate(['/403']);
        break;
      }
      case 404: {
        this.router.navigate(['/404']);
        break;
      }
      case 412: {
        this.router.navigate(['/412']);
        break;
      }
      case 422: {
        throw response.error;
      }
      case 428: {
        this.router.navigate(['/428']);
        break;
      }
      default: {
        this.router.navigate(['/500']);
        break;
      }
    }
  }
}
