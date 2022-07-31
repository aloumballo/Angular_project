import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() prodClick: EventEmitter<string> = new EventEmitter;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLoadView() {
    //this.router.navigateByUrl("/?type=menu")
  }

  produitClick(x: string) {
    // alert(x)
    this.prodClick.emit(x)
    // console.log( this.prodClick.emit(x))
  }

}
