import { Component, OnInit } from '@angular/core';
import { RouterModel } from "../../constants/route.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public ROUTES = {...RouterModel.ROUTES};
  constructor() { }

  ngOnInit(): void {
  }

}
