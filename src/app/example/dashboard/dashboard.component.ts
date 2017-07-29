import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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


      //speed dial
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
