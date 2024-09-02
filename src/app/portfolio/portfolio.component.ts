import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  ngOnInit(): void {
    
    let myplus=$('img');
    myplus.on('click',function(e){
    
// let my:any=$(e.target).attr('src');
// console.log($(e.target).attr("src"))
// $('.myout').attr('src',my);
// let x=$('.mylayout');
// x.removeClass('d-none');
// x.on('click',function(){
//   x.addClass('d-none')
// })

});

}
x(e:any):void{
     this.mysrc=e.currentTarget.children[0].src;
     this.isshaw='';
     console.log(this.mysrc)
  }
  
  mysrc:string | undefined;
  isshaw:string='d-none'
y():void{
  this.isshaw='d-none';
}

 
}
