import { Injectable } from "@angular/core";
import { MainRequestService } from "./main-request.service";

@Injectable({
  providedIn: "root",
})
export class MainService {
  constructor(private mainRequestService: MainRequestService) {}
}
