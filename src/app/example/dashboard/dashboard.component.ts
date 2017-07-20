import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatatableComponent } from "app/lib/data-table";
import { MdDialog, MdPaginator, MdSort } from "@angular/material";
import { ModalComponent } from "./../modal/modal.component";
import { DataSource } from "@angular/cdk";
import { Observable } from "rxjs/Rx";
import { DataService } from "./../data.service";

@Component({
  selector: 'hd-dashboard-example',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

      menuklikkanan = [
            {icon: 'edit', title: 'Edit', method: this.edit, groupPermission: [0]},
            {icon: 'delete', title: 'Delete', method: this.delete, groupPermission: [0]}
      ];
      temp = [];
      rows: any | null;
      displayedColumns = ['name', 'phone', 'address'];
      @ViewChild('search') search:ElementRef;

      constructor(
            public dialog: MdDialog,
            private dataSource: DataService
      ) {}

      ngOnInit() {
            this.rows = this.dataSource;
            Observable.fromEvent(this.search.nativeElement, 'keyup')
                  .debounceTime(150)
                  .distinctUntilChanged()
                  .subscribe(() => {
                        if (!this.dataSource) { return; }
                        this.dataSource.search.next(this.search.nativeElement.value);
                  });
      }

      test(event) {
            event.method();
      }

      edit() {

      }

      delete() {
            alert('delete');
      }

      openDialog() {
            const config = {
                  disableClose: true
            };
      this.dialog.open(ModalComponent, config);
      }

      pagination(e) {
            this.dataSource.pagination.next(e);
      }

      sorting(e){
            this.dataSource.sort.next(e);
      }

}