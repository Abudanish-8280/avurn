import { Component, OnInit } from '@angular/core';

import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-smoicons',
  templateUrl: './smoicons.component.html',
  styleUrls: ['./smoicons.component.css']
})
export class SmoiconsComponent implements OnInit {

  faFacebook = faFacebook
  faTwitter = faTwitter
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  
  constructor() { }

  ngOnInit(): void {
  }

}
