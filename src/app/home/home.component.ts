import { Component, OnInit } from '@angular/core';
import { DataSourcesService } from '../dataSrcs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataSourcesService) {}
  bannersData: string[];
  ngOnInit(): void {
    this.bannersData = this.dataService.imagesSrcs;
  }
}
