import { Component, OnInit } from '@angular/core';
import { DataReaderService } from './data-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userId!:number;
  id!: number;
  title!: string;
  completed!: boolean;

  constructor(private _dataReader:DataReaderService){}
  
  ngOnInit(): void {
    this.dataReader();
  }

  dataReader(){
    this._dataReader.read().subscribe({
      next:(v:any)=>{
        this.userId=v.userId;
        this.id=v.id;
        this.title=v.title;
        this.completed=v.completed;
      },
      error:()=>console.log('error'),
      complete:()=>console.log('every thing is Ok!')
    });
  }

  
}
