import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YellowComponent } from './yellow.component';

@NgModule({
  imports: [CommonModule],
  declarations: [YellowComponent],
  exports: [YellowComponent],
})
export class YellowComponentModule {}
