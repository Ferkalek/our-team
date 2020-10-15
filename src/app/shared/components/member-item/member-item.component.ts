import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { IMemberItem } from "../../interfacies/responce-data.interface";

@Component({
  selector: "ot-member-item",
  templateUrl: "./member-item.component.html",
  styleUrls: ["./member-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberItemComponent implements OnInit {
  @Input() member: IMemberItem;

  constructor() {}

  ngOnInit(): void {}
}
