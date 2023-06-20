import {
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
})
export class DashboardChartComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas;

  @Input('props')
  props;

  @Input('data')
  data;

  chart = null;

  ngOnInit(): void {
    this.chart = new Chart(
      this.canvas.nativeElement,
      {
        ...this.props,
        data: this.data
      }
    );
  }
}
