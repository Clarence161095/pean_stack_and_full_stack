import { Component } from '@angular/core';
import { routesHasMenu } from '../app-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  menus;
  constructor() {
    this.menus = routesHasMenu;
  }
}
