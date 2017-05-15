import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { TodoComponent } from './todo.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoPopupComponent } from './todo-dialog.component';
import { TodoDeletePopupComponent } from './todo-delete-dialog.component';

import { Principal } from '../../shared';

export const todoRoute: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Todos'
    },
    canActivate: [UserRouteAccessService]
  }, {
    path: 'todo/:id',
    component: TodoDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Todos'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const todoPopupRoute: Routes = [
  {
    path: 'todo-new',
    component: TodoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Todos'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  },
  {
    path: 'todo/:id/edit',
    component: TodoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Todos'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  },
  {
    path: 'todo/:id/delete',
    component: TodoDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Todos'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
