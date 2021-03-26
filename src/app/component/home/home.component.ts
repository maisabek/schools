import { Component, OnInit,TemplateRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FormBuilder, FormGroup,FormArray} from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import {ServiceService} from '../../services/service.service'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addItemForm:FormGroup
  constructor(private fb:FormBuilder,private dialog:MatDialog,
    public ServiceService:ServiceService,private SnackBar:MatSnackBar) {
    this.addItemForm=this.initFormControl('init')
    // this.ServiceService.pushItem(this.ServiceService.items[0])
    //  console.log("itemContainer",this.itemContainer)
    console.log("images []",this.initFormControl('imgs').controls.value)

  }
  ngOnInit() {
    // this.ServiceService.pushItem(this.ServiceService.items[0])
    // console.log("itemContainer",this.itemContainer)
        console.log("images",this.images)
        console.log("images []",this.initFormControl('imgs').controls.value)
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    nav:true,
    navText: [`<div class="slider-arrow right">
    <div class="arrow next">
      <img src="assets/images/icons/next-arrow.svg" alt="next">
    </div>
  </div>`, `<div class="slider-arrow left">

  <div class="arrow prev">
    <img src="assets/images/icons/prev-arrow.svg" alt="prev">
  </div>
</div>`],
    responsive: {
      0: {
        items: 1
      }
    },
  }
  initFormControl(itemType){
  let buildForm=this.fb.group({})
  switch (itemType){
   case 'init':
   buildForm=this.fb.group({
    title:'',
    description:'',
    image:'',
    images:this.fb.array([])
   })
   break;
   case 'imgs':
    buildForm=this.fb.group({
       subjectCount:'',
       subjectName:''
     })
     break
     
  }
  return buildForm
}
getImages(){
return this.addItemForm.get('images') as FormArray
}
addImages(){
  this.getImages().push(this.initFormControl('imgs'))
}
deleteImage(index){
this.getImages().removeAt(index)
}
sendData(){
  console.log("addItemForm :",this.addItemForm.value)
}
openDialog(templateRef:TemplateRef<any>){
  this.dialog.open(templateRef)
}
closeDialog(){
  this.dialog.closeAll()
}
images:any[]
loading = false;
multiImg=[[]]

addItems(){
  this.ServiceService.addItems(this.addItemForm.value)
  this.images=this.addItemForm.get('images').value
  this.multiImg.push(this.images)
  console.log("images",this.multiImg)
  this.loading=true
}
openSnackBar(message:string,action:string){
  this.SnackBar.open(message,action,{duration:3000})
}
url=[];
  onselectFile(e){
    if(e.target.files){
      var reader=new FileReader();
      for(let i=0;i<=this.pages.length;i++){
        reader.readAsDataURL(e.target.files[i]);
      reader.onload=(event:any)=>{
        this.url.push(event.target.result)        
      }
    }
    console.log("url",this.url)
  
  }
  }

urls=[]
multiImages(e){
if(e.target.files){
  var reader=new FileReader();
  // for(let j=0;j<this.pages.length;j++){
  for(let i=0;i<100;i++){
  reader.readAsDataURL(e.target.files[i]);
  reader.onload=(event:any)=>{
    this.urls.push(event.target.result)
  }
  // console.log("urls",this.urls[j][i])
}
}}
// }

currentPage = 0;
pages: Array<number> =[]
total=0

changePage(num:number){
  this.currentPage = num;
  // this.ServiceService.pushItem(this.ServiceService.items[this.currentPage])
  // console.log("itemContainer",this.ServiceService.itemContainer)
}
pushTitle(){
this.ServiceService.pushTitle(this.addItemForm.get('title').value)
}
pushDescription(){
  this.ServiceService.pushDescription(this.addItemForm.get('description').value)
}
pushPage(){
  this.pages.push(this.total)
}
pushSubject(){
this.ServiceService.pushSubject(this.getImages().controls.values)
}
}
