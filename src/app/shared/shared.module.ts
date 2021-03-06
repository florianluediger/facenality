import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { WebcamComponent } from './webcam/webcam.component';
import { TranslateModule } from '@ngstack/translate';
import { FooterComponent } from './footer/footer.component';

import { ScrollToTopDirective } from './scroll-to-top.directive';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ImageComponent, WebcamComponent, ScrollToTopDirective],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModule, TranslateModule.forChild(),
    AngularFontAwesomeModule
  ],
  exports: [
    HeaderComponent, FooterComponent, ImageComponent, WebcamComponent, ScrollToTopDirective,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
    NgbModule, TranslateModule, AngularFontAwesomeModule,
  ]
})
export class SharedModule { }
