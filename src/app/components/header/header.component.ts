import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  constructor() { }
  showFiller = false;
  scrWidth:any;



  ngOnInit(): void {
    this.getScreen()
  }
  getScreen(){
    this.scrWidth = window.innerWidth;
    setInterval(this.getScreen,  1000);

  }


  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


}
