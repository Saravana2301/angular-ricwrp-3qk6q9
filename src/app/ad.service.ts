import { Injectable } from '@angular/core';

import { WindowComponent } from './hero-job-ad.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [new AdItem(WindowComponent)];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
