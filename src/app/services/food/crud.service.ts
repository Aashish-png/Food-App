import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from "firebase/firestore"; 

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public firestore:Firestore) { }

// Add a new document with a generated id.


  async addObject (object:any){
    try {
      return await new Promise(async (resolve, reject) => {
        const docRef = await addDoc(collection(this.firestore, "FoodDetails"), object);
        console.log("Document written with ID: ", docRef.id);
        resolve(docRef);

      });
    } catch (err) {
      console.log("err=>", err);
    }
  
}
}