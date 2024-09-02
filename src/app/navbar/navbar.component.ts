import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isscrolling:boolean=false;
  @HostListener('window:scroll',[])
  onWindowScroll(){
    this.isscrolling=window.scrollY >30;

  }

}
