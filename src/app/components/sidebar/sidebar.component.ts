import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTESADMIN: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/invidual-data', title: 'HR data',  icon:'files_single-copy-04', class: '' },
  { path: '/employee-assets', title: 'Employee assets',  icon:'text_align-center', class: '' },
  { path: '/time-tracking', title: 'Time tracking',  icon:'gestures_tap-01', class: '' },
  { path: '/skills', title: 'Invidual data',  icon:'business_badge', class: '' },
  { path: '/training-catalog', title: 'My training',  icon:'education_agenda-bookmark', class: '' },
  { path: '/open-positions', title: 'My recruitement',  icon:'business_briefcase-24', class: '' },
  { path: '/request-list', title: 'List of requets',  icon:'design_bullet-list-67', class: '' },
  { path: '/planning', title: 'Planning',  icon:'ui-1_calendar-60', class: '' },
  { path: '/employee-list', title: 'List user',  icon:'users_single-02', class: '' },
  { path: '/list-contract', title: 'List contract',  icon:'files_paper', class: '' }, 

];
export const ROUTESUSER: RouteInfo[] = [
{ path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/invidual-data', title: 'HR data',  icon:'files_single-copy-04', class: '' },
  { path: '/employee-assets', title: 'Employee assets',  icon:'text_align-center', class: '' },
  { path: '/time-tracking', title: 'Time tracking',  icon:'gestures_tap-01', class: '' },
  { path: '/skills', title: 'Invidual data',  icon:'business_badge', class: '' },
  { path: '/training-catalog', title: 'My training',  icon:'education_agenda-bookmark', class: '' },
  { path: '/open-positions', title: 'My recruitement',  icon:'business_briefcase-24', class: '' },
  { path: '/my-contract', title: 'My contract',  icon:'files_paper', class: '' }, 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {

    if(localStorage.getItem('role')==="admin"){
      this.menuItems = ROUTESADMIN.filter(menuItem => menuItem);
    }else{
      this.menuItems = ROUTESUSER.filter(menuItem => menuItem);
    }
    
    
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
