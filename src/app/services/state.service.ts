import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  showBuyIn: boolean = false;
  callOrCheck: boolean = false; // if true check else call
  gameId;
  playersToPlay = [];
  pot;
  showdown:boolean = false;
  amountToCall = 0;


  yourHand:[] = [];
  cardsToDisplay;
  playerAction;
  constructor() { }

  setShowAppFalse(){
    this.showBuyIn = false;
  }

  setShowAppTrue(){
    this.showBuyIn = true;
  }

  setGameId(gameid){
    this.gameId = gameid;
  }

  getGameId(){
    return this.gameId;
  }
}
