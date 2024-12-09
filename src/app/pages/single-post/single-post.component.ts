import { Component } from '@angular/core';
import { MainCardComponent } from "../../components/main-card/main-card.component";
import { TitleSectionComponent } from "../../components/title-section/title-section.component";

@Component({
  selector: 'app-single-post',
  imports: [MainCardComponent, TitleSectionComponent],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {

}
