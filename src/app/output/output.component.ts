import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  public message = '';
  constructor() { }

  ngOnInit(): void {
  }

  printOddEven(event: any){

    let msg = ""
    try{
      if(event%2==0){
        msg='Even Number is Entered';
      }
      else{
        msg = 'Odd Number is Entered';
      }
    }
    catch{
      msg="Error"
    }
    this.message = "Loading ... "
    let cls = this
    setTimeout(function(){ cls.message=msg }, 300);
  }

}
