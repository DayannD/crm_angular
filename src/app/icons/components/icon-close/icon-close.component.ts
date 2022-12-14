import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent implements OnInit {
  public myIcon: IconDefinition;
  constructor() {
    this.myIcon = faClose;
   }

  ngOnInit(): void {
  }

}
