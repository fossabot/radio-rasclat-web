import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '@app/shared/animations/fadeAnimation';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [fadeAnimation]
})
export class ShellComponent implements OnInit {
  constructor() {}

  public getRouterOutletState({ outlet }: { outlet: any }) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit() {}
}
