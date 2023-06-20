import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlanApi } from 'src/app/plan/plan.api';
import { DashboardApi } from './dashboard.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  loading = false;
  data = {
    totalElapsedTime: 0,
    totalElapsedTimeMessage: "",
    currentUsageDataByHours: {},
    currentUsageDataByPeople: {},
    currentIdlePeopleByRole: {},
    numberOfPeople: {}
  }

  constructor(
    private errorService: ErrorService,
  ) {}

  async getDashboardData() {
    try {
      this.loading = true;
      
      const result = await DashboardApi.fetchDashboardData();

      this.data.totalElapsedTime = result.totalElapsedTime;
      this.data.totalElapsedTimeMessage = i18n("dashboard.message", result.totalElapsedTime);

      this.data.currentUsageDataByHours = {
        labels: [
          i18n('dashboard.charts.busy'),
          i18n('dashboard.charts.idle')
        ],
        datasets: [
          {
            data: [ result.currentUsageDataByHours.busy, result.currentUsageDataByHours.idle ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
            ],
          },
        ],
      };

      this.data.currentUsageDataByPeople = {
        labels: [
          i18n('dashboard.charts.fullyBusy'),
          i18n('dashboard.charts.partlyIdle'),
          i18n('dashboard.charts.fullyIdle')
        ],
        datasets: [
          {
            data: [
              result.currentUsageDataByPeople.fullyBusy, 
              result.currentUsageDataByPeople.partlyIdle, 
              result.currentUsageDataByPeople.fullyIdle
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          },
        ],
      };

      this.data.currentIdlePeopleByRole = {
        labels: [
          i18n('dashboard.charts.projectManager'),
          i18n('dashboard.charts.technicalLead'),
          i18n('dashboard.charts.seniorDeveloper'),
          i18n('dashboard.charts.intermediateDeveloper'),
          i18n('dashboard.charts.juniorDeveloper')
        ],
        datasets: [
          {
            label: 'Usage By Role',
            data: [
              result.currentIdlePeopleByRole.projectManager, 
              result.currentIdlePeopleByRole.technicalLead,
              result.currentIdlePeopleByRole.seniorDeveloper,
              result.currentIdlePeopleByRole.intermediateDeveloper,
              result.currentIdlePeopleByRole.juniorDeveloper
            ],
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
          },
        ],
      };

      this.data.numberOfPeople = {
        labels: [
          i18n('dashboard.charts.projectManager'),
          i18n('dashboard.charts.technicalLead'),
          i18n('dashboard.charts.seniorDeveloper'),
          i18n('dashboard.charts.intermediateDeveloper'),
          i18n('dashboard.charts.juniorDeveloper')
        ],
        datasets: [
          {
            label: 'People',
            data: [
              result.numberOfPeople.projectManager, 
              result.numberOfPeople.technicalLead,
              result.numberOfPeople.seniorDeveloper,
              result.numberOfPeople.intermediateDeveloper,
              result.numberOfPeople.juniorDeveloper
            ],
            backgroundColor: '#36A2EB',
            borderColor: '#36A2EB',
            hoverBackgroundColor: '#36A2EB',
            hoverBorderColor: '#36A2EB',
          },
        ],
      }

      this.loading = false;
    } catch (error) {
      this.errorService.showMessage(error);
      this.loading = false;
    }
  }
}
