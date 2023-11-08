import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div>
                <p>This website uses cookies to provide better user experience.</p>
            </div>`,
            //templte vs templateurl
            //in template we do not get errors of out html code in compile time we will get it in runtime but the same case is not true with template url.
            //it is best practice to use tempplate url if our html code is more than 3 lines.
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

}
