import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientModel } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  public client: ClientModel={
    id: 0,
    firstName:"",
    lastName:"",
    email:"",
    phone:0
  };

  private clientId: number=0;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = Number(params.clientId);
    });

    this.getClient();
  }

  public saveClient(form: NgForm):void {
    const newClient:ClientModel={
      id: form.controls.id.value,
      firstName: form.controls.firstName.value,
      lastName: form.controls.lastName.value,
      email: form.controls.email.value,
      phone: form.controls.phone.value
    };
    if (this.clientId===0) {
      this.createClient(newClient);
    }else{
      this.updateClient(newClient);
    }
  }

  private getClient():void {
    if (this.clientId !== 0) {
      this.clientService.getClientById(this.clientId)
      .subscribe(result=>{
        this.client = result;
        console.log(result);
      });    
    }
  }

  private createClient(client: ClientModel):void {
    this.clientService.saveClient(client)
    .subscribe(result=>{
      console.log(result);
    });
  }

  private updateClient(client: ClientModel):void {
    this.clientService.updateClient(client)
    .subscribe(result=>{
      console.log(result);
    });
  }

}
