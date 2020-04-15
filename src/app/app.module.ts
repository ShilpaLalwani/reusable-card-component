import { NgModule ,Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';

import { MaterialModule } from './material-module';
import { CardComponent } from './card/card.component'

@NgModule({
  
  imports:      [ BrowserModule, MaterialModule, FontAwesomeModule ],
  declarations: [ CardComponent ],
  entryComponents : [ CardComponent ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]
})
export class AppModule { 
  
  constructor(private injector: Injector, private library: FaIconLibrary) {
    library.addIcons(faHeart, faShareSquare);
  }
  ngDoBootstrap() {
   const el = createCustomElement(CardComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('custom-card', el);
  }
}
    

  
  