import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  faPhoneAlt = faPhoneAlt
  faEnvelope = faEnvelope
  constructor() { }

  ngOnInit(): void {
  }

}
