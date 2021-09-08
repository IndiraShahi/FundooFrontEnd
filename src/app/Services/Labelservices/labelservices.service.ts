import { Injectable } from '@angular/core';
import { HttpservicesService } from '../Httpservices/httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class LabelservicesService {

  constructor(private http: HttpservicesService) { }
  GetAllLabel(url: any) {
    return this.http.GetAllLabel(url);
  }
  CreateLabel(data: any) {
    return this.http.CreateLabel("Notes/CreateLabel", data);
  }

  DeleteLabel(data:any){
    return this.http.DeleteLabel("Notes/RemoveLable?LabelId=" + data);
  }
}
