import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports: [
    A11yModule,
    MatCardModule
  ]
})
export class MaterialModule {}

