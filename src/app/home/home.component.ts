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


  foods:any=[];
  constructor(private FD:FoodService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{

      if(params['searchItem']){
      this.FD.getAll().then((res:any)=>{

                this.foods=res
                this.foods.filter((food:any)=>
                  food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
                )

        })
        
        
      }else if (params['tag']) {
        // this.foods=this.FD.getAllFoodByTag(params['tag'])
      } else {
         this.FD.getAll().then((result:any)=>{
          this.foods=result
        })
      }
     
    })

      // this.FD.getAll().then((res:any)=>{

      //   this.foods=res;
      // })
    console.log("this foods=>", this.foods)
  }

}
