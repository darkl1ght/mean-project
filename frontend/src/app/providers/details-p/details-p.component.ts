import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-p',
  templateUrl: './details-p.component.html',
  styles: [],
})
export class DetailsPComponent implements OnInit {
  id: string | null;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {}
}
