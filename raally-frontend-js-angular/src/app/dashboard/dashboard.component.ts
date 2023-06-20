import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    public service: DashboardService
  ) {}

  ngOnInit(): void {
    this.doFetchData();
  }

  get loading() {
    return this.service.loading;
  }

  async doFetchData() {
    return this.service.getDashboardData();
  }

  doughnut = {
    type: 'doughnut',
  };

  mix1 = {
    type: 'bar',
    options: {
      responsive: true,
      tooltips: {
        mode: 'label',
      },
      scales: {
        x: {
          display: false,
        },
        yAxes: [{  
          display: true,    
          ticks: {
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: 100
          }
        }],
      },
    },
  };

  radar = {
    type: 'radar',
    options: {
      elements: {
        line: {
          borderWidth: 2,
        }
      },
      scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 0,
            suggestedMax: 100
        }
      }
    },
  };
}
