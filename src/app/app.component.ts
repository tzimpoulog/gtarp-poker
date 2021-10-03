import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private el: ElementRef,
    private apiService: ApiService,
    public stateService: StateService,
    private router: Router
  ) {}

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    if (event.data.action == 'openBuyIn') {
      this.stateService.setShowAppTrue();
      this.stateService.setGameId(event.data.gameId);
      this.router.navigate(['/user-list']);
    }

    if (event.data.action == 'openTable') {
      this.stateService.setShowAppTrue();
      this.router.navigate(['/table']);
    }

    // Your Cards
    if (event.data.action == 'preFlopCardUpdate') {
      this.stateService.yourHand = event.data.hand;
    }

    if (event.data.action == 'flopCardUpdate') {
      this.stateService.cardsToDisplay = event.data.flop;
      this.stateService.amountToCall = 0;
    }

    if (event.data.action == 'turnCardUpdate') {
      this.stateService.cardsToDisplay.push(event.data.turn);
      this.stateService.amountToCall = 0;
    }

    if (event.data.action == 'riverCardUpdate') {
      this.stateService.cardsToDisplay.push(event.data.river);
      this.stateService.amountToCall = 0;
    }

    if (event.data.action == 'actions') {
      this.stateService.callOrCheck = event.data.check;
    }

    if (event.data.action == 'updateLobbyPlayers') {
      if (!this.stateService.showdown) {
        this.stateService.playersToPlay = event.data.playerList;
        this.stateService.pot = event.data.pot;
      }
    }

    if (event.data.action == 'updatePlayerPreviousMove') {
      this.stateService.playerAction = event.data.move;
      if (event.data.amount > this.stateService.amountToCall) {
        this.stateService.amountToCall = event.data.amount;
      }
    }

    if (event.data.action == 'showdown') {
      this.stateService.showdown = true;
      this.stateService.amountToCall = 0;
    }

    if (event.data.action == 'gameHasStarted') {
      this.stateService.cardsToDisplay = [];
      this.stateService.showdown = false;
      this.stateService.amountToCall = 0;
    }

    // close UI
    if (event.data.action == 'leaveGame') {
      this.stateService.setShowAppFalse();
    }

    //for web development - should delete it
    // this.stateService.setShowAppTrue();
    // this.router.navigate(['/table'])
  }
}
