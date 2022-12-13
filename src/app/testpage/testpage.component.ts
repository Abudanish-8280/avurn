import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  constructor() { }
@Input () Numdata = 0;
  ngOnInit(): void {
  }
  title = "Test Page";

  // Get Data Code

  data:any = [];
  getData(dataBox:any){
    console.log(dataBox);
    this.data = dataBox
  }

  // Counter Code

  count = 0;
  counter(value:string){
    value === 'add' ? this.count++: this.count--;
  }

  // Property Binding

  name= 'Value';
  disable = false;

  // If Else Conditions in Angular

  conditions = '';
  ifBlock(val:any){
    this.conditions = val;
  }

  // Else If conditions in Angular

  color = "green";

  // Switch Case In Angular

  colorText = "purple";

  // For Loop In Angular

  students = [
    {
      name: "Student1", email: "students1@gmail.com", phone: 1234568790
    },
    {
      name: "Student2", email: "students2@gmail.com", phone: 1234568790
    },
    {
      name: "Student3", email: "students3@gmail.com", phone: 1234568790
    },
    {
      name: "Student4", email: "students4@gmail.com", phone: 1234568790
    },
    {
      name: "Student5", email: "students5@gmail.com", phone: 1234568790
    }
  ]

  // Nested Loop in Angular

  studentsdtls = [
    {
      name: "Student1", email: "students1@gmail.com", phone: 1234568790, socialaccount: ["facebook", "instagram", "linkedin"]
    },
    {
      name: "Student2", email: "students2@gmail.com", phone: 1234568790, socialaccount: ["twitter", "yahoo", "pinterest"]
    }
  ]

  // Style Binding In Angular

  textColor = "red";
  bgColor = "";

  redColor(){
    this.textColor = "blue"
    this.bgColor = "red"
  }
  greenColor(){
    this.textColor = "green"
    this.bgColor = "blue"
  }
  yellowColor(){
    this.textColor = "yellow"
    this.bgColor = "black"
  }
  darkColor(){
    this.textColor = "black"
    this.bgColor = "yellow"
  }

  // Toggle Event in Angular

  display = true
  toggleBtn(){
    this.display=!this.display;
  }

  // TudoList In Angular

  tudoList:any[]=[];
  addTask(item:string){
    this.tudoList.push({id:this.tudoList.length,name:item});
  }
  removeTask(id:number){
    this.tudoList=this.tudoList.filter(item=>item.id!==id)
  }


}
