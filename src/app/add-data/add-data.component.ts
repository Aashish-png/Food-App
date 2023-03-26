import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { CrudService } from '../services/food/crud.service';
import { HotToastService } from '@ngneat/hot-toast';

  

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
addData: any ={}
preview:any={
  imgaeUrl:'/assets/preview.jpg',
}
  file: any;
  f: undefined;
  msg: any;
Uploaded:boolean=false;
  constructor(private crud:CrudService,
    private toastService: HotToastService) { }

  ngOnInit(): void {

    if(this.addData.url==undefined || this.addData.url==null){
      this.addData.url=this.preview.imgaeUrl;
    }
  }
//==================for adding the Food data into the database =========================
  AddData(){
  let record:any={};
// console.log("this add data =>",this.addData)
  record['name']=this.addData.name;
  record['origin']=this.addData.origin;
  record['imgeURL']=this.addData.url;
  record['desc']=this.addData.desc

  let check1=document.getElementById('check1')as HTMLInputElement
  let check2=document.getElementById('check2')as HTMLInputElement
  let check3=document.getElementById('check3')as HTMLInputElement
let category:any={}
  if(check1.checked == true){
    category['breakFast']="Break-Fast";
  }
  if(check2.checked == true){
    category['Lunch']="Lunch";
  }
  if(check3.checked == true){
    category['Dinner']="Dinner";
  }
  
  record['category']=category;
  console.log("record=>",record);

  
  this.toastService.loading("Your Food Data is being Uploaded");
  this.crud.addObject(record).then((res:any)=>{

    if(res) {this.toastService.close()
       this.toastService.success('Your Food Data is Successfully Added');
       this.addData={}
       this.addData.url=this.preview.imgaeUrl;
        
        }
        
   })


  }

  // ==============for uploading image ===============

  chooseFile(event:any){
    this.file= event.target.files[0]
    console.log("this file=>",this.file)
    this.f=undefined
    // this.upload();
  }

  upload(){
    debugger
    const storage = getStorage();
    const storageRef = ref(storage,  `Food/${this.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot:any) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.msg=progress+'% done'
        console.log('Upload is ' + progress + '% done');
        
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error:any) => {
        console.log(error)
        this.msg=error
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);

           this.addData.url=downloadURL;
          this.Uploaded=true;

        });
      }
    );
  }
}
