import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { StaticSharedCustomerDataAccessModule } from '@workshop-nx/static/shared/customer/data-access';

import { UserTableComponent } from './user-table/user-table.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

export * from './user-table/user-table.component';
export * from './user-form/user-form.component';

export const staticSharedCustomerFeatureManageRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    StaticSharedCustomerDataAccessModule,
  ],
  declarations: [UserTableComponent, UserFormComponent],
  exports: [UserTableComponent, UserFormComponent],
})
export class StaticSharedCustomerFeatureManageModule {}
