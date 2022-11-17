import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faChartPie, faChartBar, faChartLine, faMapMarkedAlt, faEnvelopeOpen, faPhoneAlt, faMobileAlt, faIcons } from '@fortawesome/free-solid-svg-icons';

declare function called():any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faChartPie = faChartPie
  faChartBar = faChartBar
  faChartLine = faChartLine
  faMapMarkedAlt = faMapMarkedAlt
  faEnvelopeOpen = faEnvelopeOpen
  faPhoneAlt = faPhoneAlt
  faMobileAlt = faMobileAlt
  faIcons = faIcons

  ngOnInit(): void {
  }

	constructor(config: NgbCarouselConfig) {
		config.interval = 10000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
  
}
