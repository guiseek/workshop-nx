import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  StaticSharedCustomerFeatureManageModule,
  staticSharedCustomerFeatureManageRoutes,
} from '@workshop-nx/static/shared/customer/feature-manage';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FeatureShellComponent } from './feature-shell.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureShellComponent,
      },
    ]),
    StaticSharedCustomerFeatureManageModule,
  ],
  declarations: [FeatureShellComponent, UserDialogComponent],
})
export class StaticBookingFeatureShellModule {}
