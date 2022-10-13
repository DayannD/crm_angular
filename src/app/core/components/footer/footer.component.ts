import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version!: number;
  constructor(private coreService: CoreService) {
    this.coreService.getVersion().subscribe((data) => this.version = data);
  }

  ngOnInit(): void {

  }

}
