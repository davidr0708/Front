import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import * as $ from 'jquery';

library.add(fas, fab)

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {


  homeIcon = findIconDefinition({ prefix: 'fas', iconName: 'home' });
  menuIcon = findIconDefinition({ prefix: 'fas', iconName: 'align-justify' });
  angularIcon = findIconDefinition({ prefix: 'fab', iconName: 'angular' });
  promotionIcon = findIconDefinition({ prefix: 'fas', iconName: 'box-open' });
  categoriesIcon = findIconDefinition({ prefix: 'fas', iconName: 'cubes' });
  historyIcon = findIconDefinition({ prefix: 'fas', iconName: 'history' });
  helpIcon = findIconDefinition({ prefix: 'fas', iconName: 'question-circle' });
  shopingIcon = findIconDefinition({ prefix: 'fas', iconName: 'shopping-cart' });
  userIcon = findIconDefinition({ prefix: 'fas', iconName: 'user' });
  searchIcon = findIconDefinition({ prefix: 'fas', iconName: 'search' });

  constructor() { }

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
