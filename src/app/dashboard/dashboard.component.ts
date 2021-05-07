import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillsService } from '../services/skills.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  regularDistribution = 100 / 3;
  constructor(private httpClient: HttpClient, private skillService: SkillsService) { }

  ngOnInit() {
    this.getSkills()
  }
  public getSkills() {
    this.skillService.getSkills().subscribe((ret: Array<any>) => this.cards = ret);
  }
  public putSkills(card) {
  
    this.skillService.updateSkill(card).subscribe((ret) => { console.log("Policy updated: ", ret); });
  }

}
