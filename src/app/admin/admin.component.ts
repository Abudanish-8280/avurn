import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../service/features.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  
  title = "Admin";
  featurespostData:any = [];
  constructor(private featurepostdata:FeaturesService) { 
    
	}

  adduser(item:any){
    this.featurepostdata.postfeaturesData(item).subscribe((result:any)=>{
      console.log(result);
  }); 
  }
  ngOnInit(): void {
      
  }

}
