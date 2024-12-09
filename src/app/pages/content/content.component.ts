import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { TitleSectionComponent } from "../../components/title-section/title-section.component";
import { SinglePostComponent } from "../single-post/single-post.component";

@Component({
  selector: 'app-content',
  imports: [RouterModule, FooterComponent, TitleSectionComponent, SinglePostComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent  implements OnInit{
  photoCover:string = "";
  contentTitle:string="";
  contentDescription:string="";
  private id:any = "0"

  constructor( private route: ActivatedRoute){

  }

  ngOnInit(): void {

  }

  
   
}
