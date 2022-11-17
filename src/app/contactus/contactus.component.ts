import { Component, OnInit } from '@angular/core';
import { faChartPie, faChartBar, faChartLine, faMapMarkedAlt, faEnvelopeOpen, faPhoneAlt, faMobileAlt, faIcons } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  faChartPie = faChartPie
  faChartBar = faChartBar
  faChartLine = faChartLine
  faMapMarkedAlt = faMapMarkedAlt
  faEnvelopeOpen = faEnvelopeOpen
  faPhoneAlt = faPhoneAlt
  faMobileAlt = faMobileAlt
  faIcons = faIcons
  constructor() { }

  ngOnInit(): void {
  }
 title= "Contact Us"
}
