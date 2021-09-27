import { Component, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit {


  users:any

  name="rajkumar"

  constructor( private userservice:UsersService) {
    this.userservice.getAllusers().subscribe((Users)=>(this.
      users = Users));
  }

  ngOnInit(): void {
  }

}
