import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThreadsModule} from "@core/services/threads/threads.module";

const PROVIDERS = [
  ThreadsModule.forRoot().providers
];

@NgModule({
  imports: [ CommonModule ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [ PROVIDERS ]
    }
  }
}
