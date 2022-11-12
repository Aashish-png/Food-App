import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getAllFoodByTag(tag:string):Food[]{
  return tag=="All"?this.getAll():this.getAll().filter(food=>food.tags?.includes(tag))
}

  getAll():Food[]{
 return[ 
   {
    id:1,
    price:10,
    name:"pizza",
    favorite:false,
    stars:4.5,
    tags:["fastFodd","Lunch"],
    imgaeUrl:'/assets/food-1.jpg',
    origins:["italy","Rome"],
    cookTime:"30-40 min"
  },
  {
    id:2,
    price:10,
    name:"pizza",
    favorite:false,
    stars:4.5,
    tags:["fastFodd","brakfast"],
    imgaeUrl:'/assets/food-2.jpg',
    origins:["italy","indonesia"],
    cookTime:"30-40 min"
  },
  {
    id:3,
    price:10,
    name:"burger",
    favorite:false,
    stars:4.5,
    tags:["fastFodd","dinner"],
    imgaeUrl:'/assets/food-3.jpg',
    origins:["italy","sweden"],
    cookTime:"30-40 min"
  },
  {
    id:3,
    price:10,
    name:"burger",
    favorite:false,
    stars:4.5,
    tags:["fastFodd","dinner"],
    imgaeUrl:'/assets/food-4.jpg',
    origins:["india ","Rome"],
    cookTime:"30-40 min"
  },
  {
    id:4,
    price:10,
    name:"fires",
    favorite:false,
    stars:4.5,
    tags:["fastFodd","breakfast"],
    imgaeUrl:'/assets/food-5.jpg',
    origins:["italy","Rome"],
    cookTime:"30-40 min"
  },
  {
    id:5,
    price:10,
    name:"bread",
    favorite:false,
    stars:4.5,
    tags:["fastFodd","Lunch"],
    imgaeUrl:'/assets/food-6.jpg',
    origins:["italy","Rome"],
    cookTime:"30-40 min"
  },
  {
    id:6,
    price:10,
    name:"sandwich",
    favorite:false,
    stars:4.5,
    tags:["fastFodd","Lunch"],
    imgaeUrl:'/assets/food-7.jpg',
    origins:["italy","Rome"],
    cookTime:"30-40 min"
  },
  {
    id:7,
    price:10,
    name:"pizza",
    favorite:false,
    stars:4.5,
    tags:["fastFodd","Lunch"],
    imgaeUrl:'/assets/food-8.jpg',
    origins:["italy","Rome"],
    cookTime:"30-40 min"
  }
]
  }

}
