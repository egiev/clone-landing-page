import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input('topic') topic

  constructor() { }

  ngOnInit(): void {
  }

}
