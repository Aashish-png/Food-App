import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
addData: any =[];
  constructor() { }

  ngOnInit(): void {
  }

  AddData(){
  let record:any={};

  record['name']=this.addData.name;
  record['origin']=this.addData.origin;
  record['imgeURL']=this.addData.url;
  let check1=document.getElementById('check1')as HTMLInputElement
  let check2=document.getElementById('check2')as HTMLInputElement
  let check3=document.getElementById('check3')as HTMLInputElement

  if(check1.checked == true){
    record['breakFast']="Break-Fast";
  }
  if(check2.checked == true){
    record['Lunch']="Lunch";
  }
  if(check3.checked == true){
    record['Dinner']="Dinner";
  }
  
  
    


  }


}
