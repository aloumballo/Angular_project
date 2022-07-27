import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { CatalogueService } from 'src/app/shared/service/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
  
export class CatalogueComponent implements OnInit {
  catalogue$: Observable<Catalogue> | null = null
    catalogue:Catalogue|null=null
  constructor(private catalogueService :CatalogueService) { }

  ngOnInit(): void {

    this.catalogueService.getCatalogue().subscribe((data) => this.catalogue = data)
    this.catalogue$= this.catalogueService.getCatalogue()
  }

}
