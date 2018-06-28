import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  slideToUp,
  slideToDown,
  slideToLeft,
  TableAdapter,
  LayoutService
} from '@humadev/ng-theme';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostBinding,
  AfterViewInit
} from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { ModalComponent } from './../modal/modal.component';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hd-dashboard-example',
  templateUrl: './dashboard.component.html',
  animations: [slideToUp()]
})
export class DashboardComponent implements OnInit {
  cmItem = [
    {
      icon: 'list',
      title: 'List Mata Kuliah',
      callback: i => this.openDialog(),
      display: true
    },
    {
      icon: 'edit',
      title: 'Edit',
      callback: i => this.edit(i),
      groupPermission: {
        permissions: [0],
        groups: [2]
      },
      children: [
        {
          icon: 'list',
          title: 'List Mata Kuliah',
          callback: i => this.openDialog(),
          display: true
        },
        {
          icon: 'edit',
          title: 'Edit',
          callback: i => this.edit(i),
          groupPermission: {
            permissions: [0],
            groups: [0]
          }
        },
        {
          icon: 'delete',
          title: 'Delete',
          callback: i => this.delete(i),
          groupPermission: {
            permissions: [0],
            groups: [0]
          }
        }
      ]
    },
    {
      icon: 'delete',
      title: 'Delete',
      callback: i => this.delete(i),
      groupPermission: {
        permissions: [0],
        groups: [4]
      }
    }
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

  get fixed() {
    return this._fixed;
  }
  set fixed(fixed: boolean) {
    this._fixed = fixed;
    if (this._fixed) {
      this.open = true;
    }
  }

  displayedColumns = ['first_name', 'mobile_phone', 'home_address'];

  testForm = this.fb.group({
    nama: ['', Validators.required]
  });

  orang = [
    { id: 1, nama: 'satu' },
    { id: 2, nama: 'dua' },
    { id: 3, nama: 'tiga' },
    { id: 4, nama: 'empat' },
    { id: 5, nama: 'limat' }
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
      this.ds.setData().pipe(
        map(data => {
          this._ls.topProgressBar.next(false);
          return data;
        })
      ),
      this.displayedColumns,
      this.paginator,
      this.sort,
      this.displayedColumns,
      this.search
    );
  }

  edit(i) {
    this.test('test');
    console.log(i);
  }

  test(i) {
    alert('test');
  }

  delete(i) {
    alert('del');
  }

  openDialog() {
    const config = {
      disableClose: true,
      height: '100vh'
    };
    this.dialog.open(ModalComponent, config);
  }

  displayFn(e) {
    return e;
  }
}
