import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  status=false
  email=""
  password="" 
  data:any;
  constructor(private userserice:UsersService,private toastr: ToastrService,private router:Router) { }
  subt()
  {
    if(!this.email || !this.password){
      this.toastr.error("please Enter all the fields");
      return;
    }
    if(!/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(this.email)){
      this.toastr.error("Enter Valid Email");
      return;
    }
    const newTask={
      email:this.email,
      password:this.password
    }
    this.userserice.signIn(newTask).subscribe(data=>{
      this.data=data;
      console.log(data)

      if(data.token){
      this.userserice.storeToken(data.token,data.user);
      this.toastr.success("Successfully SignIn");
      this.router.navigate([''])
      
      }
    },err=>{
      console.log(err.error)
      this.toastr.error(err.error.error);
      return
    });

    this.password=''
    this.email=''
  }
  ngOnInit(): void {
    
  }

}
