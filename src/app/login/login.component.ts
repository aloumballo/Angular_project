import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../shared/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any= {
  username: null,
    password: null,
  token:null
  
  }

  constructor(private http:HttpClient,private tokenServiceService:TokenServiceService ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  
    console.log(this.form)
    this.http.post("http://localhost:8000/api/login_check", this.form).subscribe(
      (data: any) => {
        
        localStorage.setItem('tokens', data.token);
        this.tokenServiceService.saveToken(data.token)
        
      } ,
      err=>console.log(err)
    )
   
    
  }

}
