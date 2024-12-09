import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  imports: [],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.css'
})
export class TitleSectionComponent implements OnInit {

  @Input()
  titleSection:string=""

  constructor(){}

  ngOnInit(){}

}
