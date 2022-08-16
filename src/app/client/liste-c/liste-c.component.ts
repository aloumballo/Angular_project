import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/service/commande.service';

@Component({
  selector: 'app-liste-c',
  templateUrl: './liste-c.component.html',
  styleUrls: ['./liste-c.component.scss']
})
export class ListeCComponent implements OnInit {
  liste:any[]| undefined=[]

  constructor(private servive:CommandeService) { }

  ngOnInit(): void {
    this.servive.allCommandes().subscribe(
      data => {
        this.liste = data
        console.log(this.liste)
      }
    )
  }


}
