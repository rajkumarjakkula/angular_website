import { Injectable } from '@angular/core';
import {USERS} from './mock-users';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Users} from './Users'
import { Observable } from 'rxjs';
import {catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apisign="http://localhost:5500"
  private apiallusers='http://localhost:5500/allusers'
  private apidelete='http://localhost:5500/deleteuser'
  private apiupdate='http://localhost:5500/updateuser'
  JwtAuthToken: any;
  user1: any;
  constructor(private http:HttpClient,private router:Router) { }
  name="service"
  user:any;


  getAllusers():Observable<any>{
    this.loadToken()
    console.log(this.loadToken())
    const header=new HttpHeaders()
    .set('Content-Type','application/json')
    .set("Authorization","Bearer "+this.JwtAuthToken)
    console.log("get all users...")
    return this.http.get<any>(this.apiallusers,{headers:header});
}


  profile():Observable<any>{
    this.loadToken()
    console.log(this.loadToken())
    const header=new HttpHeaders()
    .set('Content-Type','application/json')
    .set("Authorization","Bearer "+this.JwtAuthToken)
    if(this.JwtAuthToken==="")
    {
        this.router.navigate(['/signin'])
    }
    console.log("get all users...")
    return this.http.get<any>(this.apisign+"/profile",{headers:header})
  }
    signUp(user:any):Observable<any>{
      console.log("siging up Observable...")
      return this.http.post<any>(this.apisign+"/signup",user,httpOptions).pipe(catchError(this.handleError));
    }

    signIn(user:any):Observable<any>{
      return this.http.post<any>(this.apisign+"/signin",user,httpOptions);
    }
    adminSignin(user:any):Observable<any>{
      return this.http.post<any>(this.apisign+"/adminsignin",user,httpOptions);
    }

private handleError(errorResonse:HttpErrorResponse){
  const error=errorResonse.error;
  return error;
}

updateUser(user:any,id:any):Observable<any>{
  console.log("updating user...")
  this.loadToken()
    console.log(this.loadToken())
    const header=new HttpHeaders()
    .set('Content-Type','application/json')
    .set("Authorization","Bearer "+this.JwtAuthToken)
  const url=`${this.apiupdate}/${id}`;
  return this.http.put<any>(url,user,{headers:header});

}

deleteUser(user:any):Observable<any>{
  this.loadToken()
  console.log("deleting user Observable...")
  const header=new HttpHeaders()
  .set('Content-Type','application/json')
  .set("Authorization","Bearer "+this.JwtAuthToken)
  console.log(header)
  const url=`${this.apidelete}/${user._id}`;
  return this.http.delete<any>(url,{headers:header});
}
  
storeToken(Token: any,user: any):any{
  localStorage.setItem('token',Token)
  localStorage.setItem('user',JSON.stringify(user))
  this.JwtAuthToken = Token;
  this.user = user;
}

// isloggedIn(){
//   const user1=localStorage.getItem('user')
//   if(user1)
//   {
//     return "user"
//   }
//   return 'not user'
// }

logout(){
  localStorage.clear();
}

loadToken(){
  const token = localStorage.getItem('token')
  const user1=localStorage.getItem('user')
  this.user1=user1
  this.JwtAuthToken = token
}
}

