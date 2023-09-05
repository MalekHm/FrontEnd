import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTESADMIN: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/invidual-data', title: 'Invidual data',  icon:'education_atom', class: '' },
    { path: '/employee-assets', title: 'Employee assets',  icon:'education_atom', class: '' },
    { path: '/time-tracking', title: 'Time tracking',  icon:'education_atom', class: '' },
    { path: '/skills', title: 'My skills',  icon:'education_atom', class: '' },
    { path: '/training-catalog', title: 'My training',  icon:'education_atom', class: '' },
    { path: '/open-positions', title: 'My recruitement',  icon:'location_map-big', class: '' },
    { path: '/request-list', title: 'List of requets',  icon:'ui-1_bell-53', class: '' },
    { path: '/planning', title: 'Planning',  icon:'users_single-02', class: '' },
    { path: '/employee-list', title: 'List user',  icon:'users_single-02', class: '' },
     
];
export const ROUTESUSER: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/invidual-data', title: 'Invidual data',  icon:'education_atom', class: '' },
  { path: '/employee-assets', title: 'Employee assets',  icon:'education_atom', class: '' },
  { path: '/time-tracking', title: 'Time tracking',  icon:'education_atom', class: '' },
  { path: '/skills', title: 'My skills',  icon:'education_atom', class: '' },
  { path: '/training-catalog', title: 'My training',  icon:'education_atom', class: '' },
  { path: '/open-positions', title: 'My recruitement',  icon:'location_map-big', class: '' },
  { path: '/mobility', title: 'Mobility',  icon:'ui-1_bell-53', class: '' },
  { path: '/user-profile', title: 'Digital signuature',  icon:'users_single-02', class: '' },
   
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
