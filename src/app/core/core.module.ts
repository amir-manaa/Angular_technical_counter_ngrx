import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from '../shared/ui/header/header.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects'; 

import { counterReducer, metaReducers, ROOT_FEATURE_KEY } from './../state/counter-reducer';
import { CounterEffects } from './../state/counter-effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HeaderComponent,
    HttpClientModule,
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: counterReducer
    }, {
      metaReducers,
      runtimeChecks: {
        strictActionTypeUniqueness: true,   // Uniqueaction name
        strictActionImmutability: true,     // Props immutable
        strictStateImmutability: true       // State immutable
      }
    }),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: !isDevMode() 
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
