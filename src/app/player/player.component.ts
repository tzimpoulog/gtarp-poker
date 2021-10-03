import { Component, Input, OnInit } from '@angular/core';
import { faChair, faUser} from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  faUser = faUser;
  faChair = faChair;
  @Input() name;
  @Input() money;
  @Input() isBB;
  @Input() isSB;
  @Input() playerHand;
  @Input() playerFold = false;
  @Input() playerQuit = false;

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
  }

}
