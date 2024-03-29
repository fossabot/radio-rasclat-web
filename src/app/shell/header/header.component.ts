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
        let lastScrollTop = 0;
        $(window).scroll(function(event) {
          const st = $(this).scrollTop();
          if (st > lastScrollTop) {
            if (!$('.navbar').hasClass('hidden')) {
              $('.navbar').addClass('hidden');
            }
          } else {
            $('.navbar').removeClass('hidden');
          }

          lastScrollTop = st;

          if ($(this).scrollTop() <= 30) {
            $('.navbar').removeClass('hidden');
          }
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
