import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from '../../dashboard/dashboard.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private httpClient: HttpClient, private dashboardComponent: DashboardComponent) {

  }

  ngOnInit() {
  }

  onLike(card: any) {
    console.log(card)
    let position = this.dashboardComponent.cards.findIndex(item => item.id == card.id);
    this.dashboardComponent.cards.splice(position, 1, Object.assign(card, card.likes++))
    this.dashboardComponent.putSkills(card)
  }
 

  onShare() {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = 'https://www.linkedin.com/in/vinicius-rodrigues-060b68208/';
    link.setAttribute('visibility', 'hidden');
    link.click();
  }

}
