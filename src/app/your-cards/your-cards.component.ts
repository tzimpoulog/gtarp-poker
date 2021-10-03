import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-your-cards',
  templateUrl: './your-cards.component.html',
  styleUrls: ['./your-cards.component.css']
})
export class YourCardsComponent implements OnInit {

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
  }

}
