import { NgModule } from '@angular/core';

import { WwwwwwwwwwwwwwSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WwwwwwwwwwwwwwSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WwwwwwwwwwwwwwSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WwwwwwwwwwwwwwSharedCommonModule {}
