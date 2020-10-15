import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IResponceDTO } from "../interfacies/responce-data.interface";
import { MainRequestService } from "./main-request.service";

@Injectable({
  providedIn: "root",
})
export class MainService {
  constructor(private mainRequestService: MainRequestService) {}

  getData(): Observable<IResponceDTO[]> {
    return this.mainRequestService.getDataRequest();
  }
}
