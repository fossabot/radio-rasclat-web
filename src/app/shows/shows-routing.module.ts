import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ShowsComponent } from './shows.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/shows', pathMatch: 'full' },
    {
      path: 'shows',
      component: ShowsComponent,
      data: { title: extract('SHOWS') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShowsRoutingModule {}
