import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private http:HttpClient) {}

    findLessons(
        courseId:number,
        filter = '',
        sortOrder = 'asc',
        pageNumber = 0,
        pageSize = 3):  Observable<Lesson[]> {

      const params = new HttpParams()
          .set('courseId', courseId.toString())
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString());

        return this.http.get('/api/lessons', {
            params: params
        }).pipe(
            map(res =>  res["payload"])
        );
    }
}
