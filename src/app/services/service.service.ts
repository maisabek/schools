import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(`assets/progs.json`)
   }
  items=[]
  addItems(item:string){
  this.items.push(item)
  }
  itemContainer=[]
  pushItem(item:Item){
  this.itemContainer.push(item)
  }
  titles=[]
  pushTitle(title:string){
    this.titles.push(title)
  }
  descriptions=[]
  pushDescription(desc:string){
    this.descriptions.push(desc)
  }
  subjects=[]
  pushSubject(subject:object){
   this.subjects.push(subject)
  }
}
