import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  IMemberCards,
  IResponceDTO,
} from "../shared/interfacies/responce-data.interface";
import { MainService } from "../shared/services/main.service";

@Component({
  selector: "ot-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  public data$: BehaviorSubject<IResponceDTO[]> = new BehaviorSubject<
    IResponceDTO[]
  >([]);
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService
      .getData()
      .subscribe((data: IResponceDTO[]) => this.data$.next(data));
  }

  public objectToArr(obj: Object): Array<IMemberCards> {
    return Object.values(obj);
  }
}
