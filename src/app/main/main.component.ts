import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userService:UsersService) { }

  image:string="src/assets/images/hero-img.png"
  ngOnInit(): void {
  }

}
