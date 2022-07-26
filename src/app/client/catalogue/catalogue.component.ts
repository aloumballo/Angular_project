import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/service/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
  
export class CatalogueComponent implements OnInit {
  
  constructor(private catalogueService :CatalogueService) { }

  ngOnInit(): void {
    this.catalogueService.getCatalogue().subscribe((alou)=>console.log(alou))
  }

}
