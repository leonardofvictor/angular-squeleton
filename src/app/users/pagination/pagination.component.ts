import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent  {
  @Input() current_page: number;
  @Input() last_page: number;
  @Input() url: string;

}
