import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'hd-dashboard-example',
  templateUrl: './dashboard-example.component.html',
  styleUrls: ['./dashboard-example.component.css']
})
export class DashboardExampleComponent implements OnInit {
      menuklikkanan = [
            {icon:'edit', title:'Edit',method:this.edit, groupPermission:[0]},
            {icon:'delete', title:'Delete',method:this.delete, groupPermission:[0]}
      ];

      rows = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      ];
      columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
      ];

  ngOnInit() {
  }

  test(event){
        event.method();
  }

  edit(){
        alert("edit");
  }

  delete(){
        alert("delete");
  }

}
