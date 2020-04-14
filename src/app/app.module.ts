import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
//import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component'

@NgModule({
  
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ CardComponent ],
  entryComponents : [ CardComponent ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]
})
export class AppModule { 
  
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
   const el = createCustomElement(CardComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('my-card', el);
  }
}
    

  
  