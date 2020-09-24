import { Component } from '@angular/core'

@Component({
  template: `
    <h3 class="errorMessage">404'd<br> Sorry, page not found</h3>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 170px;
      text-align: center;
    }`]
})
export class Error404Component{
  constructor() {

  }

}
