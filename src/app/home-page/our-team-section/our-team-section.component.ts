import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "ot-our-team-section",
  templateUrl: "./our-team-section.component.html",
  styleUrls: ["./our-team-section.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
