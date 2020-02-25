import { Component, OnInit } from '@angular/core';
import { GeneralStateService } from 'src/app/features/services/general-state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private generalStateService: GeneralStateService) { }

  ngOnInit() {
  }
  deleteProfile(){
    this.generalStateService.updatedDataSelection('some');
  }
}
