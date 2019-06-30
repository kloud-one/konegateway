import { NgModule } from '@angular/core';

import { KonegatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [KonegatewaySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [KonegatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class KonegatewaySharedCommonModule {}
