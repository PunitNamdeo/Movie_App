import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { FeaturedComponent } from './featured/featured.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReadMoreComponent } from './read-more/read-more.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'feature', component: FeaturedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    SearchComponent,
    FeaturedComponent,
    ReadMoreComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true } ),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
