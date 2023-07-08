import { Component, Inject, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-module',
  templateUrl: './edit-item-module.component.html',
  styleUrls: ['./edit-item-module.component.scss']
})
export class EditItemModuleComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<EditItemModuleComponent>,
    @Inject(MAT_DIALOG_DATA) public item:BudgetItem) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem){
    this.dialog.close(updatedItem);
  }
}
