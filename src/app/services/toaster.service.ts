import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) {}

  showSuccess(msg:any,title:any) {
    this.toastr.success(msg,title)
  }
  showError(msg:any,title:any) {
    this.toastr.error(msg,title)
  }
  showWarning(msg:any,title:any) {
    this.toastr.warning(msg,title)
  }

}
