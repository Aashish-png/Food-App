import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../serveices/food/food.service';
import { Food } from '../shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  foods:Food[]=[];
  constructor(private FD:FoodService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{

      if(params['searchItem']){
        this.foods=this.FD.getAll().filter(food=>
          food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
        )
      }else{
        this.foods= this.FD.getAll();
      }
    })



  }

}
