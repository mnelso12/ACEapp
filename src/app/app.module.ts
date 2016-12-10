import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Spirituality } from '../pages/spirituality/spirituality';
import { Teaching } from '../pages/teaching/teaching';
import { Community } from '../pages/community/community';
import { Apply } from '../pages/apply/apply';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Spirituality,
    Teaching,
    Community,
    Apply
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Spirituality,
	Teaching,
	Community,
	Apply
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
