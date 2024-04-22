import { NgModule } from "@angular/core";
import { DetailHeroComponent } from "./detail-hero.component";
import { DetailPageRoutingModule } from "./detail-routing.module";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      DetailPageRoutingModule
    ],
    declarations: [DetailHeroComponent]
  })
  export class DetailHeroModule {}
  