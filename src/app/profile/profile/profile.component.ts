import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authservice:UsersService) { }

  name:string="loading..";
  email:string="loading...";
  data:any;


  ngOnInit(): void {
    this.authservice.profile().subscribe(data=>{
      this.data=data
      this.email=this.data.email
      this.name=this.data.name
    })
    
  }

}
