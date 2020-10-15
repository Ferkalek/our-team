import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { IImageUrl } from "../../interfacies/responce-data.interface";

@Component({
  selector: "ot-image-viewer",
  templateUrl: "./image-viewer.component.html",
  styleUrls: ["./image-viewer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageViewerComponent implements OnInit {
  @Input() imgData: IImageUrl;

  constructor() {}

  ngOnInit(): void {}
}
