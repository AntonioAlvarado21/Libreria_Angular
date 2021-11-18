import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model = {
    name:'Default',
    store: '',
    date: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
