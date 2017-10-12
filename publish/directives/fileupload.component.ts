import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xm-file-upload',
  template: `
    <div>
      <img [src]="image" style="max-height:300px; max-width:200px" *ngIf="image"><br>
      <button mat-raised-button color="{{color}}" type="button" (click)="file.click()">{{buttonText}}</button>
      <input type='file' (change)="fileChange($event)" name="{{name}}" style="display:none" #file>
    </div>
  `,
  styles: [`
    div{
      margin-bottom:20px;
    }
  `]
})
export class FileUploadComponent{

  @Input() color = 'primary';
  @Input() image;
  @Input() name = 'file';
  @Input() buttonText = 'choose file';
  @Output() getFile = new EventEmitter();
  @Output() getBase64 = new EventEmitter();

  fileChange(event){
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        const myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
          this.image = myReader.result;
          this.getBase64.emit(this.image);
          this.getFile.emit(this.image);
        }
        myReader.readAsDataURL(file);
    }
  }
}
