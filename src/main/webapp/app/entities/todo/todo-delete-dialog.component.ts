import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from 'ng-jhipster';

import { Todo } from './todo.model';
import { TodoPopupService } from './todo-popup.service';
import { TodoService } from './todo.service';

@Component({
    selector: 'jhi-todo-delete-dialog',
    templateUrl: './todo-delete-dialog.component.html'
})
export class TodoDeleteDialogComponent {

    todo: Todo;

    constructor(
        private todoService: TodoService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.todoService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'todoListModification',
                content: 'Deleted an todo'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-todo-delete-popup',
    template: ''
})
export class TodoDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private todoPopupService: TodoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.modalRef = this.todoPopupService
                .open(TodoDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
