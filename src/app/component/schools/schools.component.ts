import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import {ServiceService} from '../../services/service.service'
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  cities=["Paris","Brest","Nantes","Toulouse","Barcelona",
   "Marseille","Bordeaux","Toulon","Montpellier","Cergy",
   "Clermont-Ferrand","Belo Horizonte (Brazil)","Raleigh (USA)",
   "Sophia-Antipolis (France)","Lille","Sophia-Antipolis",
   "Belo Horizonte","Suzhou","Brazil","Angers","Singapore",
   "Nancy","Nuremberg","Nice","Rennes",
   "Reims","Rouen","Lyon","Le Havre","Caen","Oxford","Strasbourg",
   "La Rochelle","Tours","Niort","Rochefort","Angoulême","Cognac",
   "Budapest","Shanghai","Lisbon","Bad Honnef","Berlin","Hamburg",
   "Iserlohn","Angers"];
   language=["all","English","French"]
   sort=["price :low to high","price :high to low"]
   programs: string[] = ['Bachelor', 'Master', 'MBA', 'M.A. Eng.','Msc'];
   allSchools=["EPITA","IMT Atlantique","TOULOUSE BUSINESS SCHOOL","KEDGE BS",
              "PARIS SCHOOL OF BUSINESS","AUDENCIA","Montpellier BS","EISTI",
              "ESC CLERMONT","SKEMA","ESAIP","ESSEC","ICN","IESEG","IPAG",
               "RENNES BUSINESS SCHOOL","NEOMA","ECAM Lyon","ISEP","EM NORMANDIE",
               "EXCELIA","ESSCA","Nova SBE","IUBH","SRH : Germany","UE Germany" 
            ]
  constructor(private ServiceService:ServiceService) { }
  ngOnInit() {this.getAllData()}
  container:any
  filterData:any
  getAllData(){
    this.ServiceService.getData().subscribe((res)=>{
      this.container=res[2].data
      console.log("container",this.container)
    })
  }
  favoriteSeason:string='';
  allFields=["hh","kk","ll","oo"]
  fields: string[]=[]
  fieldCtrl = new FormControl();
  searchTerm:string=''
  visible = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.fields.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.fieldCtrl.setValue(null);
  }
  remove(fruit: string): void {
    const index = this.fields.indexOf(fruit);
    if (index >= 0) {
      this.fields.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.fields.push(event.option.viewValue);
    this.fieldCtrl.setValue(null);
  }

  Schools:string[]=[] 
  schoolCtrl = new FormControl();       
  addSchool(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.Schools.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.schoolCtrl.setValue(null);
  }

  removeSchool(school: string): void {
    const index = this.Schools.indexOf(school);
    if (index >= 0) {
      this.Schools.splice(index, 1);
    }
  }
  selectedSchool(event: MatAutocompleteSelectedEvent): void {
    this.Schools.push(event.option.viewValue);
    this.schoolCtrl.setValue(null);
  }
  filterSchools:any[]=[]
  city:any
  type:any
  updateSchoolsBycity(){
    if(this.city){
    this.filterSchools = this.container.filter((item:any) =>
      item.city + '' == this.city + ''
      
    );
    }
}
updateSchoolByType(){
  if(this.type){
this.filterSchools = this.container.filter((item:any) =>
item.type.toLowerCase().includes(this.type.toLowerCase()) || item.Name.toLowerCase().includes(this.type.toLowerCase())

);
console.log("item.type.toLowerCase()",this.type.toLowerCase())
}
}
f:boolean=true
updateFilter() {
this.filterSchools = this.container.filter((item:any) =>
(item.type.toLowerCase().includes(this.type.toLowerCase()) 
|| item.Name.toLowerCase().includes(this.type.toLowerCase())) &&  item.city + '' == this.city + ''
);
if(this.filterSchools.length == 0){
this.f=false
}
console.log("this.filterSchools : ",this.filterSchools.length)

}
Program:any
language2:any
sort2:any
city2:any
price:any=[]
filter2(){
  let i=0
  this.filterSchools = this.container.filter((item:any) =>
  (item.level.toLowerCase().includes(this.Program.toLowerCase()))
  && (item.type + '' == this.fields[0] + '')
  && (item.city + '' == this.city2 + '')
  && (item.Language.toLowerCase().includes(this.language2.toLowerCase()))
  
  )
  if(this.sort2 == "price :low to high"){
  this.filterSchools.sort(function (a, b) {
    var x1=parseInt(a.fee)
    var x2=parseInt(b.fee)
    return x1- x2
      })
    }else if(this.sort2 == "price :high to low"){
      this.filterSchools.sort(function (a, b) {
        var x1=parseInt(a.fee)
        var x2=parseInt(b.fee)
        return x2- x1
          })
    }
  
  if(this.filterSchools.length == 0){
    this.f=false
    }
}

}
