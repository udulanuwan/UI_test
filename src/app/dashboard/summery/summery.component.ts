import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/fx/data.service';
import { ITodo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnInit {

  public collapsed = false;
  public data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]];

  public type = 'PieChart';
  public pieChart = 'PieChart';
  public barChart = 'BarChart';

  public columnNames = ['Browser', 'Percentage'];

  public options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
  };

  public width = 400;
  public height = 300;

  public title = 'chart';

  public TableData: ITodo[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAllTodo().subscribe(result => {
      this.TableData = result;
    });
  }

  public toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

}
