import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isPostfixUnaryExpression } from 'typescript';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private stateService: StateService) {}

  quitView() {
    return this.http.post('http://poker/quit', {});
  }

  sendBuyIn(buyIn) {
    this.stateService.cardsToDisplay = [];
    return this.http.post('http://poker/postBuyIn', {
      buyIn: buyIn,
      gameId: this.stateService.getGameId(),
    });
  }

  startGame() {
    if(this.stateService.showdown) this.stateService.showdown = false;
    return this.http.post('http://poker/start', { action: 'start-game' });
  }

  actionCall() {
    return this.http.post('http://poker/actionCall', {});
  }

  actionFold() {
    return this.http.post('http://poker/actionFold', {});
  }

  actionRaise(amount) {
    return this.http.post('http://poker/actionRaise', { betAmount: amount });
  }

  actionAllIn() {
    return this.http.post('http://poker/actionAllIn', {});
  }

  exitGame() {
    return this.http.post('http://poker/leaveGame', {})
  }
}
