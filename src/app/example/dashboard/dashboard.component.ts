import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { slideToUp, slideToDown, slideToLeft } from './../../lib/animations/router.animation';
import { Component, OnInit, ViewChild, ElementRef, HostBinding, AfterViewInit } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { ModalComponent } from './../modal/modal.component';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { DataService } from './../data.service';
import { TableAdapter } from './../../lib/class/table-adapter';
import { LayoutService } from './../../lib/services/layout.service';

@Component({
  selector: 'hd-dashboard-example',
  templateUrl: './dashboard.component.html',
  animations: [slideToUp()]
})
export class DashboardComponent implements OnInit {

    cmItem = [
          {icon: 'list', title: 'List Mata Kuliah', method: 'listMataKuliah', groupPermission: [0]},
          {icon: 'edit', title: 'Edit', method: 'onEdit', groupPermission: [0]},
          {icon: 'delete', title: 'Delete', method: 'onDelete', groupPermission: [0]},
    ];
    rows: TableAdapter | null;
    @ViewChild('search') search: ElementRef;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

      // speed dial
      private _fixed = false;
      open = false;
      spin = true;
      direction = 'down';
      animationMode = 'scale';

      get fixed() { return this._fixed; }
      set fixed(fixed: boolean) {
          this._fixed = fixed;
          if (this._fixed) {
              this.open = true;
          }
      }

    menuklikkanan = [
        {icon: 'edit', title: 'Edit', method: this.edit, groupPermission: [0]},
        {icon: 'delete', title: 'Delete', method: this.delete, groupPermission: [0]}
    ];
    displayedColumns = ['first_name', 'mobile_phone', 'home_address'];

    testForm = this.fb.group({
        nama: ['', Validators.required]
    });

    orang = [
        {id: 1, nama: 'satu'},
        {id: 2, nama: 'dua'},
        {id: 3, nama: 'tiga'},
        {id: 4, nama: 'empat'},
        {id: 5, nama: 'limat'}
    ];

      _click(event: any) {
          console.log(event);
      }

      constructor(
            public dialog: MatDialog,
            private ds: DataService,
            private _ls: LayoutService,
            private fb: FormBuilder,
            public _dialog: MatDialog
      ) {}

      ngOnInit() {
            this.rows = new TableAdapter(
                    this.ds.setData()
                    .map(data => {
                        this._ls.topProgressBar.next(false);
                        return data;
                    }),
                    this.displayedColumns,
                    this.paginator,
                    this.sort,
                    this.displayedColumns,
                    this.search
            );
      }

      onContextMenu(event) {
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

      displayFn(e) {
          console.log(e);
        return e;
      }

}
