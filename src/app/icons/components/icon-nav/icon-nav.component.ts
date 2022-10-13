import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClose, faNavicon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss']
})
export class IconNavComponent implements OnInit {

  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faNavicon;
   }

  ngOnInit(): void {
  }

}
