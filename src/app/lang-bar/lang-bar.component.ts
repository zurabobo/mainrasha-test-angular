import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-bar',
  templateUrl: './lang-bar.component.html',
  styleUrls: ['./lang-bar.component.css']
})
export class LangBarComponent {
browserLang: any
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('ru');

    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|ru/) ? this.browserLang : 'ru');
  }

}
