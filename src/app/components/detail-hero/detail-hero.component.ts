import { Component, OnInit } from '@angular/core';
import { DtoResponseHero } from 'src/app/shared/interfaces/marvel-dto';
import { Thumbnail } from 'src/app/shared/interfaces/heroes-marvel-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.scss'],
})
export class DetailHeroComponent implements OnInit {

  heroDetail: DtoResponseHero | undefined;
  url:string | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Init detail component');
    this.heroDetail = this.router.getCurrentNavigation()?.extras.state as DtoResponseHero;   
    this.url =this.resolveImage(this.heroDetail?.thumbnail)
  }

  resolveImage(thumbnail: Thumbnail) {
    return `${thumbnail?.path}.${thumbnail?.extension}`;
  }
}
