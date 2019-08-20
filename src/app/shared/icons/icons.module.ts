import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Camera,
  Heart,
  Github,
  Twitter,
  Instagram,
  Mail,
  PhoneCall,
  Music
} from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  Twitter,
  Instagram,
  Music,
  Mail,
  PhoneCall
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {}
