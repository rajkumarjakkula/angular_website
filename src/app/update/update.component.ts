import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  name=""
  email=""
  closeResult:any;
  list1:Array<any>=[]
  constructor( private userservice:UsersService,private modalService: NgbModal) {
   }

  ngOnInit(): void {
    this.userservice.getAllusers().subscribe((Users)=>(this.
      list1= Users)); 
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  
subt(user:any){
  const newTask={
    name:this.name,
    email:this.email,
  }
  console.log(newTask);
  this.userservice.updateUser(newTask,user._id).subscribe();

}
}
