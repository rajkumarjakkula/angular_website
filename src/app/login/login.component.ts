import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status=false
  email=""
  password="" 
  name=""
  data:any;

  constructor(private userserice:UsersService,private toastr:ToastrService,private router:Router) { }

  func(){
    this.router.navigate(['/signin'])
  }
  subt()
  {
    if(!this.email || !this.password){
      this.toastr.success("please Enter all the fields");
      return;
    }
    if(!/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(this.email)){
      this.toastr.error("Enter Valid Email");
      return;
    }
    const newTask={
      name:this.name,
      email:this.email,
      password:this.password
    }
    this.userserice.signUp(newTask).subscribe(data=>{
      this.data=data
      if(data){
        console.log(data)
      this.toastr.success(data.message)
      this.func();
      return
      }
    },err=>{
      this.toastr.error(err.error)
    });
    this.name=''
    this.password=''
    this.email=''
  }
  
  ngOnInit(): void {
    
  }

}
