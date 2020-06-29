import { Component, OnInit } from '@angular/core';
import {InfoPageService} from "../../services/info-page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public infoPageService: InfoPageService) { }

  ngOnInit(): void {
  }

}
