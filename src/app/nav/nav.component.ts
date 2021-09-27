import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  func(){
    this.userservice.logout();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) 
    {
      return 'by pressing ESC';
    } 
    else if (reason === ModalDismissReasons.BACKDROP_CLICK) 
    {
      return 'by clicking on a backdrop';
    }
     else 
    {
      return  `with: ${reason}`;
    }
  }
  
  admin:boolean=false;
  token:any;
  closeResult:any;
  notsignin:boolean=true;
  user:boolean=false;
  constructor(public userservice:UsersService ,private modalService:NgbModal) { 
  }
  ngOnInit(): void {
    const token = localStorage.getItem('user')
    if(token){
    this.notsignin=false
    const token1=JSON.parse(token)
    if(token1.name){
      console.log("user login...")
      this.user=true
    }
    else{
      console.log("Admin login....")
      this.admin=true
    }
    }
  }

}
