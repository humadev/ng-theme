import { slideToUp, slideToDown, slideToLeft } from 'app/lib/animations/router.animation';
import { Component, OnInit, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { MdDialog, MdPaginator, MdSort } from '@angular/material';
import { ModalComponent } from './../modal/modal.component';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Rx';
import { DataService } from './../data.service';
import { TableAdapter } from 'app/lib/class/table-adapter';
import { LayoutService } from 'app/lib/services/layout.service';

@Component({
  selector: 'hd-dashboard-example',
  templateUrl: './dashboard.component.html',
  animations: [slideToUp()]
})
export class DashboardComponent implements OnInit {


      // speed dial
      private _fixed: boolean = false;
      open: boolean = false;
      spin: boolean = true;
      direction: string = 'down';
      animationMode: string = 'scale';

      get fixed() { return this._fixed; }
      set fixed(fixed: boolean) {
          this._fixed = fixed;
          if (this._fixed) {
              this.open = true;
          }
      }

      _click(event: any) {
          console.log(event);
      }

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
