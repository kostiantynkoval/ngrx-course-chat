import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadsService } from './threads.service';

const SERVICES = [
  ThreadsService
];

@NgModule({
  imports: [ CommonModule ],
  providers: [ ...SERVICES ]
})
export class ThreadsModule {
  static forRoot() {
    return <ModuleWithProviders>{
      ngModule: ThreadsModule,
      providers: [ ...SERVICES ]
    }
  }
}
