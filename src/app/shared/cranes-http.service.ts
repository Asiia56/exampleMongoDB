

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Crane, compareCranes } from "../../../interfaces/cranes";
import { CraneHook } from "../../../interfaces/crane-hook";

@Injectable()
export class CranesHttpService {

  constructor(private http: HttpClient) {}

  findAllCranes(): Observable<Crane[]> {
    return this.http.get<Crane[]>('/api/cranes')
      .pipe(
        map(cranes => cranes.sort(compareCranes))
      );
  }

  findCraneByUrl(craneUrl: string): Observable<Crane> {
    return this.http.get<Crane>(`/api/cranes/${craneUrl}`);
  }

  findHooks(
    craneId: string,
    pageNumber = 0, pageSize = 3): Observable<CraneHook[]> {

    return this.http.get<CraneHook[]>('/api/crane-hooks', {
      params: new HttpParams()
        .set('craneId', craneId)
        .set('sortOrder', 'asc')
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    });
  }


  updateCrane(craneId: string, changes: Partial<Crane>) {
    return this.http.put('/api/cranes/' + craneId, changes);
  }


  deleteCrane(craneId: string) {
    return this.http.delete('/api/cranes/' + craneId);
  }

  createCrane(changes: Partial<Crane>) {
    return this.http.post('/api/cranes', changes);
  }
}
