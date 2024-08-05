// src/app/components/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'phone', 'website'];
  sortedColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  sortData(column: string) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }
    this.users.sort((a, b) => {
      if (a[column] < b[column]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (a[column] > b[column]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  openEditDialog(user: any): void {
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '250px',
      data: { ...user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.users.findIndex(u => u.id === result.id);
        if (index !== -1) {
          this.users[index] = result;
        }
      }
    });
  }
}
