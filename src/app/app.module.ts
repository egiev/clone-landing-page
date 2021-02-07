import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BurgerMenuDirective } from './shared/directives/burger-menu.directive';
import { TagsDirective } from './shared/directives/tags.directive';
import { StoryComponent } from './shared/components/story/story.component';
import { ListingComponent } from './shared/components/listing/listing.component';
import { NewsComponent } from './shared/components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    StoryComponent,
    TagsDirective,
    BurgerMenuDirective,
    ListingComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
