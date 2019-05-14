import {Component, Input, OnInit} from '@angular/core';
import {HomepagetestService} from "../homepagetest.service";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {

  static ref = "Defaultpage";

  @Input()
  public containers;

  constructor(private pageService: HomepagetestService) { }

  ngOnInit() {
    this.pageService.getPage().subscribe(page => {
      console.log(page['containers']);
      this.containers = page['containers'];
    });
  }

}
