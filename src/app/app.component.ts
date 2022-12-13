import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular14-firstpoject';
  
   // Child to parent component data transfer in angular

   Num = 10;
   UpdateData(){
    this.Num = Math.floor(Math.random()*10);
   }

  //  Reusable component in angular

   userdata = [
    {name: "Danish", email: "danish@gmail.com"},
    {name: "Zishan", email: "zishan@gmail.com"},
    {name: "Wahid", email: "wahid@gmail.com"},
  ]
  

  
}
