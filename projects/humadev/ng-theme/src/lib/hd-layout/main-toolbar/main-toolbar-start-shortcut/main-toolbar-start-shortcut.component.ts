import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StartPageDialogComponent } from '../../start-page-dialog/start-page-dialog.component';

@Component({
  selector: '[hd-main-toolbar-start-shortcut]',
  template: `
        <a class="right-menu-item-link">
            <span class="right-menu-link-icon">
                <i class="flaticon-grid-menu"></i>
            </span>
        </a>
  `,
  styles: [`
        :host{
            padding: 0 12px;
            height: 100%;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            font-size: 14px;
            font-weight: 300;
            font-family: "Poppins";
            -webkit-font-smoothing: antialiased;
            line-height: 1.5;
            color: #212529;
            background-color: #fff;
        }

        .right-menu-item-link{
            position: relative;
            margin: 0 auto;
            width: auto;
            padding: 9px 0;
            display: table;
            table-layout: fixed;
            height: 100%;
            text-decoration: none;
            outline: none !important;
            vertical-align: middle;
            touch-action: manipulation;
            color: #5867dd;
            background-color: transparent;
            cursor: auto;
            padding: 0;
            margin: 0;
            list-style: none;
            height: 100%;
            margin: 0px;
            padding: 0px;
            font-size: 14px;
            font-weight: 300;
            font-family: "Poppins";
            cursor: pointer;
        }

        .right-menu-link-icon{
            text-align: center;
            line-height: 0;
            vertical-align: middle;
            padding: 0;
            color: #ad5beb;
            display: table-cell;
            height: 100%;
            width: 35px;
            font-size: 1.4rem;
            animation-fill-mode: initial;
            text-decoration: none;
            background-color: transparent;
            height: 100%;
            margin: 0px;
            padding: 0px;
            font-weight: 300;
            font-family: "Poppins";
            -ms-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            i{
                font-size: 1.5rem;
            }
            i:before {
                font-weight: bold;
                padding: 1px;
                background: -webkit-linear-gradient(180deg, #ad5beb 25%, #c678db 50%, #da6ea9 75%, #e76e92 100%);
                background: linear-gradient(180deg, #ad5beb 25%, #c678db 50%, #da6ea9 75%, #e76e92 100%);
                background-clip: text;
                text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        [class^="flaticon-"]:before, [class*=" flaticon-"]:before {
            font-family: Flaticon;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            line-height: 1;
            text-decoration: inherit;
            text-rendering: optimizeLegibility;
            text-transform: none;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
        }

  `]
})
export class MainToolbarStartShortcutComponent {

    constructor(private dialog: MatDialog) { }

    @HostListener('click')
    clickMenu() {
        this.dialog.open(StartPageDialogComponent, {
            width: '90vw',
            height: '90vh'
        });
    }

}
