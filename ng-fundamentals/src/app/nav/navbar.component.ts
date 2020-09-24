import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15 px;
      }
      searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        searchForm {
          display: none;
        }
      }
      li > a.active { color: #C57974; }
    `,
  ],
})
export class NavBarComponent {
  constructor(public auth: AuthService){}
}
