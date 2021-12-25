import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MyPogoda';
  rand:any 
  timerId:any
  ngOnInit(): void {
    let subject = new BehaviorSubject(0);
    subject.subscribe((x)=>console.log(x))
  
     this.timerId = window.setInterval(() => {
     let a = Math.floor(Math.random()*1000)
     subject.next(a)
}, 2000);
subject.subscribe((value:number)=>{
  if(value >=300 && value<=700){
    this.rand = value
  }
})
  }
onClick(){
setTimeout(()=>{
  clearInterval(this.timerId);
},0)
}
}
  