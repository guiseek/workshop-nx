import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '@workshop-nx/core/entities';
import { UserService } from '@workshop-nx/static/shared/customer/data-access';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'booking-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  error$ = this.userService.error$.pipe(
    tap((error) => {
      this.snackBar.open(error.message);
    })
  );

  constructor(
    private dialog: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {

  }

  async onSubmit(user: User) {
    if (user._id) {
      this.userService.update(user);
    } else {
      this.userService.create(user);
    }

    this.userService.users$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.dialog.close());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
