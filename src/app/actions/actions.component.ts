import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  betAmount = new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$")]);

  constructor(private apiService: ApiService, public stateService: StateService) { }

  ngOnInit(): void {
  }

  callOrCheck(){
    this.apiService.actionCall().subscribe();
    this.playAudio('chips');
  }

  fold(){
    this.apiService.actionFold().subscribe();
    this.playAudio('fold');
  }

  raise(){
    this.apiService.actionRaise(this.betAmount.value).subscribe();
    this.playAudio('chips');
  }

  allIn(){
    this.apiService.actionAllIn().subscribe();
    this.playAudio('all-in');
  }

  playAudio(type){
    let audio = new Audio();
    audio.src = `/assets/audio/${type}.wav`;
    audio.load();
    audio.play();
  }


}
