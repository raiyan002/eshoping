import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="notification-div">
                <p>This website uses cookies to provide better user experience.</p>
            </div>`,
            //templte vs templateurl
            //in template we do not get errors of out html code in compile time we will get it in runtime but the same case is not true with template url.
            //it is best practice to use tempplate url if our html code is more than 3 lines.
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color:#FAD7A0; text-align:center;}" , "p{font-size:14px}"]
})
export class NotificationComponent {

}
