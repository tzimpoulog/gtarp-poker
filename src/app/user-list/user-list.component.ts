import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  startBet = new FormControl('', [Validators.required]);

  constructor(private apiService: ApiService, private router: Router, private stateService: StateService) {}

  ngOnInit(): void {}

  quitView(){
    this.stateService.setShowAppFalse();
    this.apiService.quitView().subscribe();
  }

  sendBuyIn(){
    this.stateService.setShowAppFalse();
    this.apiService.sendBuyIn(this.startBet.value).subscribe();
  }

}


