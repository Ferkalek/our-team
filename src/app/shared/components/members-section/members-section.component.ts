import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { IMemberCards } from "../../interfacies/responce-data.interface";

@Component({
  selector: "ot-members-section",
  templateUrl: "./members-section.component.html",
  styleUrls: ["./members-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersSectionComponent implements OnInit {
  @Input() members: IMemberCards[] = [];
  constructor() {}

  ngOnInit(): void {}
}
