import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '@workshop-nx/core/entities';
import { UserService } from '@workshop-nx/static/shared/customer/data-access';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'booking-feature-shell',
  templateUrl: './feature-shell.component.html',
  styleUrls: ['./feature-shell.component.scss'],
})
export class FeatureShellComponent implements OnInit {
  constructor(private dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {}

  add() {
    this.open();
  }

  onSelected({ data, action }) {
    switch (action) {
      case 'update': return this.open(data);
      case 'delete': return this.delete(data);
    }
  }

  delete({ _id }: Pick<User, '_id'>) {
    this.userService.delete(_id);
  }

  open(data?: User) {
    const dialog$ = this.dialog.open(UserDialogComponent, { data });
    dialog$.afterClosed().subscribe((response) => {
      console.log(response);
    });
  }
}
