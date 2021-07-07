import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class RestService {
  constructor(
    private httpClient: HttpClient,
    private endpoint: string,
    private url: string
  ) {}

  protected get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(this.endpoint + this.url + path);
  }

  protected post<T>(path: string, entity: any): Observable<T> {
    return this.httpClient.post<T>(this.endpoint + this.url + path, entity);
  }

  protected put<T>(path: string, entity: any): Observable<T> {
    return this.httpClient.put<T>(this.endpoint + this.url + path, entity);
  }

  protected delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(this.endpoint + this.url + path);
  }
}
