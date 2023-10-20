import { Component } from '@angular/core';
import { Plans } from 'src/app/Model/Plans';

@Component({
  selector: 'app-view-plans-body',
  templateUrl: './view-plans-body.component.html',
  styleUrls: ['./view-plans-body.component.css']
})
export class ViewPlansBodyComponent {

  plans:Plans[] = [new Plans(399,40,100,'N/A'),
                   new Plans(499,75,100,'YES'),
                   new Plans(599,75,100,'YES'),
                   new Plans(999,100,100,'YES'),
                   new Plans(1199,150,100,'YES')]

}
