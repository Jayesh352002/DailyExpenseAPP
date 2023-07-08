import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import {MatDialog} from "@angular/material/dialog";
import { EditItemModuleComponent } from '../edit-item-module/edit-item-module.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItem[];
  @Output() onDelete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  delete(item: BudgetItem)
  {
    this.onDelete.emit(item);
  }

  onCardClicked(item:BudgetItem){
    const dialog = this.dialog.open(EditItemModuleComponent,{
      width:'580px',
      data:item
    });

    dialog.afterClosed().subscribe(result=>{
      if(result){
        //this.budgetItems[this.budgetItems.indexOf(item)]=result;
        this.update.emit(
          {
            old:item,
            new:result
          }
        );
      }
    })
  }
}

export interface UpdateEvent{
  old:BudgetItem;
  new:BudgetItem;
}
