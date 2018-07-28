import { Component } from '@angular/core';
import {MyDataService} from "./my-data.service"
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // herbs = [];
  // herbs: string;
arr = [];
  // private _url= 'assets/herbs.json';
  // private _url2= 'assets/students.json';

  title = 'app';


  constructor(private newService : MyDataService,private http:Http){}
  // data: string;

  ngOnInit() {

    this.newService.getHerbs()
    .subscribe(resHerbsData => this.arr = resHerbsData);
    console.log( this.newService.getHerbs());



    // console.log(this.newService.fetchData());

    console.log(this.newService.sucess());
  }

  
  // fetchData(){
  //   return this.http.get(this._url2).map(
  //     (response) => response.json()
  //   ).subscribe(
  //     // data => this.herbs = data
  //      (data) => console.log(data)
  //   )

  // }
  

     

}
