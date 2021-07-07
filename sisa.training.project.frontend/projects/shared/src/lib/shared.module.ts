import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent],
  imports: [HttpClientModule],
  exports: [SharedComponent],
})
export class SharedModule {
  
}
