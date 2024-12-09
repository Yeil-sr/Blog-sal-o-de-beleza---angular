import { Component } from '@angular/core';
import { MainCardComponent } from "../../components/main-card/main-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";

@Component({
  selector: 'app-popular-post',
  imports: [MainCardComponent, SmallCardComponent],
  templateUrl: './popular-post.component.html',
  styleUrl: './popular-post.component.css'
})
export class PopularPostComponent {

}
