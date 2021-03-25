import { Component, OnInit } from '@angular/core';
import { ClientModel } from "src/app/models/client.model";
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clientItems: ClientModel[]=[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void{
    this.getClients();
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

}
