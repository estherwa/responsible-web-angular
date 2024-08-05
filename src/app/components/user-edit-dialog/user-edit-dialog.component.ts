// src/app/components/user-edit-dialog/user-edit-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: [data.name, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      phone: [data.phone, [Validators.required, Validators.pattern('^\\+972\\d{8,9}$')]],
      website: [data.website, Validators.pattern('^https?:\\/\\/.+')]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.userForm.valid) {
      this.dialogRef.close({ ...this.data, ...this.userForm.value });
    }
  }
}
