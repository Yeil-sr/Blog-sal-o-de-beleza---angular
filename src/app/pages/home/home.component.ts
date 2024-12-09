import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { TitleSectionComponent } from "../../components/title-section/title-section.component";
import { PopularPostComponent } from "../popular-post/popular-post.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";


@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent, TitleSectionComponent, PopularPostComponent, FooterComponent, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
