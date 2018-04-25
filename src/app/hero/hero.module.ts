import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [CommonModule],
  exports: [HeroComponent],
  declarations: [HeroComponent],
  providers: [HeroService]
})
export class HeroModule {}
