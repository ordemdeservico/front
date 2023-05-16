import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {

  @Input() os: any;

  ngAfterViewInit(): void {
    console.log(this.os);
  }
}
