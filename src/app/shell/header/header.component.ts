import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import {
  AuthenticationService,
  CredentialsService,
  I18nService
} from '@app/core';
import { RadioDataService } from '@app/shared/radiodata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  currentShow: any;
  isLoading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService,
    private radioDataService: RadioDataService
  ) {}

  ngOnInit() {
    {
      $(document).ready(function() {
        let prev = 0;
        const $window = $(window);
        const nav = $('.navbar');

        $window.on('scroll', function() {
          const scrollTop = $window.scrollTop();
          nav.toggleClass('hidden', scrollTop > prev);
          prev = scrollTop;
        });
      });
    }
    this.isLoading = true;
    this.radioDataService.getCurrentShowLive().subscribe((currentShow: any) => {
      this.currentShow = currentShow;
      this.isLoading = false;
    });
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  closeMenu() {
    this.menuHidden = true;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService
      .logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}
