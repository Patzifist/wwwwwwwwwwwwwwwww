import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { WwwwwwwwwwwwwwSharedLibsModule, WwwwwwwwwwwwwwSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [WwwwwwwwwwwwwwSharedLibsModule, WwwwwwwwwwwwwwSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [WwwwwwwwwwwwwwSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WwwwwwwwwwwwwwSharedModule {
    static forRoot() {
        return {
            ngModule: WwwwwwwwwwwwwwSharedModule
        };
    }
}
