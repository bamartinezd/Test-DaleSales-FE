import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { RouterModel } from 'src/app/constants/route.model';
import { ClientModel } from "src/app/models/client.model";
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clientItems: ClientModel[]=[];
  public ROUTES = RouterModel.ROUTES;

  constructor(private clientService: ClientService, private route: Router) { }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void{
    this.getClients();
  }

  public goToClientView(clientId: number):void {
    this.route.navigate(['client',clientId]);
  }

  private getClients(): void {
    this.clientService.getClients()
    .subscribe((result) => {
      this.clientItems = result;
      console.log(result);
    }, error => {
      console.error(error);
    });
  }

  public removeClient(id: number):void {
    this.clientService.deleteClient(id)
    .pipe(finalize(()=>{
      this.getClients();
    }))
    .subscribe(result => {
      console.log(result);
      
    });
  }

}
