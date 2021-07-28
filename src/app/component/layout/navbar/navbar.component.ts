import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll',[])
  onWindowScroll(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      document.getElementById('navbar').classList.add('navbar-scroll')

    }else{
      document.getElementById('navbar').classList.remove('navbar-scroll')

    }
  }
  
 

}
