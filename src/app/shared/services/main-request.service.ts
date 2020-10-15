import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { API_URLS } from "../constants/api.constants";
import { IResponceDTO } from "../interfacies/responce-data.interface";

@Injectable({
  providedIn: "root",
})
export class MainRequestService {
  constructor(private http: HttpClient) {}

  getDataRequest(): Observable<IResponceDTO[]> {
    return this.http
      .get<{ data: IResponceDTO[] }>(
        `${environment.baseUrl}${environment.apiPrefex}${API_URLS.task}`
      )
      .pipe(map((res) => res.data));
  }
}
