import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WindowComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [BrowserModule, PortalModule],
  providers: [AdService, WindowComponent],
  declarations: [AppComponent, AdBannerComponent, WindowComponent, AdDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
