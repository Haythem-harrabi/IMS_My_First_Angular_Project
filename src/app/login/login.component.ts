import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // declaration d'attribut (string,number,any,object,...)
  componentName:string='Login'
  // ? means the variable may not be initialized
  name?:string
  name1: string| null = null
// declaring an array of strings 
  countries:Array<string>=['Tunisia','Algeria']
  countries1:string[]=['tunisia','algeria']
  // objet student ayant un attribut fname 
  student={fname:'hd'}
  student1:{firstname:string,lastname?:string,age?:number}={firstname:'Haythem', age:21}
  isNotValid=true;



  

  constructor() { }

  ngOnInit(): void {
  }
 
 
  login(){
    alert('logged in successfully')
  }
  // in angular on is replaced with putting the keyword between () example: onclick->(click)

  sortir(){
    console.log('sortir')
  }
  }

