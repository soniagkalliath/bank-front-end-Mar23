import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToasterService } from '../services/toaster.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard  {
  constructor(private auth:AuthService,private toaster:ToasterService,private authRouter:Router){

  }
  canActivate:CanActivateFn=()=> {

    if(this.auth.isLoggined()){
      return true;
    }
    else{
      this.toaster.showWarning("Operation denied!! Please Login!!","Warning")
      this.authRouter.navigateByUrl("")
      return false
    }
    
  }
  
}
