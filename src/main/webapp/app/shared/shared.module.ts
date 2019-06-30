import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { KonegatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [KonegatewaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [KonegatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KonegatewaySharedModule {
  static forRoot() {
    return {
      ngModule: KonegatewaySharedModule
    };
  }
}
