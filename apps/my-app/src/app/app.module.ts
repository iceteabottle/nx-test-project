import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WhateverComponentModule } from '@nx-test-project/my-lib/lib/whatever/whatever.module';
import { FooComponentModule } from '@nx-test-project/my-lib/lib/foo/foo.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    WhateverComponentModule,
    FooComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
