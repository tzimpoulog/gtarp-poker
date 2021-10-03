import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { StateService } from '../services/state.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  exitIcon = faSignOutAlt;
  @ViewChild('editModal') editModal : TemplateRef<any>;

  constructor(public stateService: StateService, private apiService: ApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  startGame(){
    this.apiService.startGame().subscribe();
    this.stateService.cardsToDisplay = [];
  }

  pickBackground(player){
    if(player.has_folded){
      return 'red';
    } else if(player.is_playing){
      return 'green';
    }

    return '#ccc';

  }

  exitGame(){
    this.apiService.exitGame().subscribe();
    // this.modalService.open(this.editModal);
  }

}
