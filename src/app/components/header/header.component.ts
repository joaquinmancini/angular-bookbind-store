import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo = 'favicon.ico';
  title = 'Faunus Bookbind';
  constructor() { }

  ngOnInit(): void {
  }

}
