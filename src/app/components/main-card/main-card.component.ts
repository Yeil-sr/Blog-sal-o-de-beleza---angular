import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main-card',
  imports: [RouterModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent implements OnInit {
  @Input()
  photoCover:string ="";
  @Input()
  Id: null|string ="0";
  @Input()
  cardDescription:string="" ;

  conscructor(){}

  ngOnInit(): void {
  }
}
