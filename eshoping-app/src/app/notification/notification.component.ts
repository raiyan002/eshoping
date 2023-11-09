import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success notification-div" [hidden]="displayNotification">
                <span class="cookie">This website uses cookies to provide better user experience. </span><span style="float:right; cursor:pointer; border:2px solid red; border-radius:5px; height:26px; margin-right:-15px;" (click)=hide()>&#x274c;</span>
            </div>`,
            //templte vs templateurl
            //in template we do not get errors of out html code in compile time we will get it in runtime but the same case is not true with template url.
            //it is best practice to use tempplate url if our html code is more than 3 lines.
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; text-align:center;}" , ".cookie{font-size:14px}"]
})
export class NotificationComponent {
   displayNotification:boolean=false;
   hide(){
    this.displayNotification=true;
   }
}
