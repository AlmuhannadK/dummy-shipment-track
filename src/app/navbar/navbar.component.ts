import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // for the [ngClass]! put css classes here to call them in template
  test1 = "navbar-nav";

  imageLink= "https://dga.gov.sa/sites/default/files/2022-12/وشج-1_2.jpg"

  
}
