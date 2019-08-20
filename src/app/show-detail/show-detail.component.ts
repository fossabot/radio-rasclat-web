import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuoteService } from '@app/shows/quote.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  show: any;
  title: any;
  isLoading = false;
  getData: any;
  id: any;
  private sub: any;

  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
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
        this.setTitle({ title: this.title });
      });
  }
}
