import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { CatalogueService } from 'src/app/shared/service/catalogue.service';

@Component({
  selector: 'app-catalogue-menu',
  templateUrl: './catalogue-menu.component.html',
  styleUrls: ['./catalogue-menu.component.scss']
})
export class CatalogueMenuComponent implements OnInit {

  catalogue$: Observable<Catalogue> | null = null

  constructor(private catalogueService :CatalogueService) { }

  ngOnInit(): void {
    this.catalogue$= this.catalogueService.getCatalogue()
  }

}
