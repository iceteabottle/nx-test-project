import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueComponent } from './blue.component';
import { YellowComponentModule } from '../yellow/yellow.module';

@NgModule({
  imports: [CommonModule, YellowComponentModule],
  declarations: [BlueComponent],
  exports: [BlueComponent],
})
export class BlueComponentModule {}
