import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TodolistTodoModule } from './todo/todo.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TodolistTodoModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodolistEntityModule {}
