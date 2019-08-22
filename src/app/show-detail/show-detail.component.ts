import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuoteService } from './../shows/quote.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '@app/shared/listen.service';

import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  show: any;
  title: any;
  hex: any;
  isLoading = false;
  getData: any;
  id: any;
  message: string;
  private sub: any;

  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private data: DataService
  ) {}

  public setTitle({ title }: { title: any }) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
    this.getData = this.getDataFunction;
    this.getData();
    this.data.currentMessage.subscribe(message => (this.message = message));
  }

  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }

  getDataFunction() {
    this.isLoading = true;
    this.quoteService
      .getSingleShowDB({ id: this.id })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(show => {
        this.show = show;
        this.title = show.show.title;
        Vibrant.from(show.show.img)
          .getPalette()
          .then(palette => {
            this.hex = palette.Vibrant.hex;
            console.log(palette);
          });
        this.setTitle({ title: this.title });
      });
  }
}
