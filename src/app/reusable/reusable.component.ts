import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {

  constructor() { }
  @Input() reusable:{name:string, email:string } = {name:'', email: ''}

  ngOnInit(): void {
  }

}
