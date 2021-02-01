import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }
 getCatalogo(){
this.http.get('http://localhost:5000/catalogo')
 }
}
