import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MdDialog, MdPaginator, MdSort } from '@angular/material';
import { ModalComponent } from './../modal/modal.component';
import { TableAdapter } from "app/lib/class/table-adapter";
import { DataService } from "app/example/data.service";
import { LayoutService } from "app/lib/services/layout.service";

@Component({
  selector: 'hd-dashboard-example',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

      menuklikkanan = [
            {icon: 'edit', title: 'Edit', method: this.edit, groupPermission: [0]},
            {icon: 'delete', title: 'Delete', method: this.delete, groupPermission: [0]}
      ];
      rows: any | null;
      displayedColumns = ['name', 'phone', 'address'];
      @ViewChild('search') search: ElementRef;
      @ViewChild('MdSort') sort: MdSort;
      @ViewChild('MdPaginator') paginator: MdPaginator;

      constructor(
            public dialog: MdDialog,
            private ds: DataService,
            private _ls: LayoutService
      ) {
            _ls.pageProgressBar = true;
      }

      ngOnInit() {
            let data = new TableAdapter(
                  this.ds.setData()
            );
            data.sourceData.subscribe(res => this._ls.pageProgressBar = false);
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

}