import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  errorMessage="";
  name="";
  password="";
  email="";
  closeResult:any;
  list1:Array<any>=[]
  ngOnInit(): void {
    }
    

  constructor( private userservice:UsersService,private modalService: NgbModal) {
    this.userservice.getAllusers().subscribe((Users)=>(this.
      list1= Users));
}
 
// deleteRow(id:any){
//   for(let i = 0; i < this.list1.length; ++i){

//     console.log(this.list1[i].email)
//       if (this.list1[i].email === id) {
//         this.list1.splice(i,1);
//       }
//     }
//   }
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

deleteTask(user:any){
  console.log(user._id)
  //this.deleteRow(user._id);
  this.userservice.deleteUser(user).subscribe();
}

ngOnChanges(changes: SimpleChanges) {
  // changes.prop contains the old and the new value...

}
}
