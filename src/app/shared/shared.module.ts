import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';

// we need to add CapitalizePipe to exports so SharedModule
// is not the only module to have access to it
// other modules can now Import the custom pipe
@NgModule({
    declarations: [ CapitalizePipe ],
    exports: [ CapitalizePipe ]
})
export class SharedModule { }