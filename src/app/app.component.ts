import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
      menu:Array<any> = [
            {icon:'dashboard', path:'dashboard', name:'Dashboard', groupAccess:'0', children:[
                  {path:'dashboard1',name:'Dashboard 1', groupAccess:'0'},
                  {path:'#',name:'Dashboard 2', groupAccess:'0'},
                  {path:'#',name:'Dashboard 3', groupAccess:'0'}
            ]
      },
            {icon:'laptop', path:'#',name:'Layouts', groupAccess:'0'},
            {icon:'assignment', path:'#',name:'Forms', groupAccess:'0'},
            {icon:'extension', path:'#',name:'Components', groupAccess:'0'},
            {icon:'build', path:'#',name:'Tools', groupAccess:'0'},
      ];

      startMenus = [
            {title: "Kalender Akademik", icons:'https://sia.undiknas.ac.id/assets/icons/kalender.png', path:"kalender-akademik"},
            {title: "Penerimaan mahasiswa baru", icons:'https://sia.undiknas.ac.id/assets/icons/add_mhs.png', path:"mahasiswa-baru"},
            {title: "Mahasiswa", icons:'https://sia.undiknas.ac.id/assets/icons/mahasiswa.png', path:"mahasiswa"},
            {title: "Marketing", icons:'https://sia.undiknas.ac.id/assets/icons/marketing.png', path:"marketing"},
            {title: "Akademik", icons:'https://sia.undiknas.ac.id/assets/icons/akademik.png', path:"akademik"},
            {title: "Kemahasiswaan", icons:'https://sia.undiknas.ac.id/assets/icons/kemhs.png', path:"kemahasiswaan"},
            {title: "Keuangan", icons:'https://sia.undiknas.ac.id/assets/icons/keuangan.png', path:"keuangan"},
            {title: "Personalia", icons:'https://sia.undiknas.ac.id/assets/icons/personalia.png', path:"personalia"},
            {title: "Perpustakaan", icons:'https://sia.undiknas.ac.id/assets/icons/perpus.png', path:"perpustakaan"},
            {title: "Inventori", icons:'https://sia.undiknas.ac.id/assets/icons/inventori.png', path:"inventori"},
            {title: "IT Supports", icons:'https://sia.undiknas.ac.id/assets/icons/it_support.png', path:"it-supports"},
            {title: "DOIT", icons:'https://sia.undiknas.ac.id/assets/icons/doit.png', path:"doit"},
            {title: "PEMA", icons:'https://sia.undiknas.ac.id/assets/icons/pema.png', path:"pema"},
            {title: "LPPM", icons:'https://sia.undiknas.ac.id/assets/icons/dosen.png', path:"lppm"},
            {title: "Admission", icons:'https://sia.undiknas.ac.id/assets/icons/admission.png', path:"admission"},
            {title: "Dosen", icons:'https://sia.undiknas.ac.id/assets/icons/dosen.png', path:"dosen"},
            {title: "Prodi", icons:'https://sia.undiknas.ac.id/assets/icons/akademik.png', path:"prodi"},
            {title: "POP", icons:'https://sia.undiknas.ac.id/assets/icons/akademik.png', path:"pop"},
            {title: "Wisuda", icons:'https://sia.undiknas.ac.id/assets/icons/akademik.png', path:"wisuda"},
            {title: "Alumni", icons:'https://sia.undiknas.ac.id/assets/icons/akademik.png', path:"alumni"}
      ];

      form = this.fb.group({
            check:''
      });

  constructor(
        private fb:FormBuilder
  ){}

  ngOnInit(){
      this.form.controls.check.valueChanges.subscribe(
            e => console.log(e)
      );
  }

  onChange(e){
      console.log(e);
  }
}