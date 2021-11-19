import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
<mat-toolbar color="primary">
  <span class="mouseHover" (click)="goToMain()"><mat-icon>stars</mat-icon> Libreria Mayorista Luna <mat-icon>stars</mat-icon> </span>
  <span class="spacer"></span>
  <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
</mat-toolbar>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router){ }

  goToCheckout():void{
    this.router.navigate(['/checkout'])
  }

  goToMain():void{
    this.router.navigate(['/'])
  }
}
