import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public afterLine = false;
  public mainLine = false;
  public beforeLine = false;
  public dropMenuShow = false;

  public triger = true;

  public showMenu() {
    if (this.triger) {
      this.afterLine = true;
      this.mainLine = true;
      this.beforeLine = true;
      this.dropMenuShow = true;

      this.triger = false;
    } else {
      this.afterLine = false;
      this.mainLine = false;
      this.beforeLine = false;
      this.dropMenuShow = false;

      this.triger = true;
    }
  }
}
