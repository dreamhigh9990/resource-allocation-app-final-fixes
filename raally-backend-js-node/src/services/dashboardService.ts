import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';

export default class DashboardService {
  options: IServiceOptions;
  private timeToGather: number;

  constructor(options) {
    this.options = options;
    this.timeToGather = 0;
  }

  async getUsageByHoursData() {
    const startTime = process.hrtime();
    
    const responseData = await SequelizeRepository.getUsageByHoursData(this.options);
    
    const stopTime = process.hrtime(startTime);
    const elapsedTime = stopTime[0] * 1000 + stopTime[1] / 1000000;
    // Bug #17: [Dashboard] Total elapsed time to generate the dashboard data is not accurate
    this.timeToGather = this.timeToGather + elapsedTime;
    
    return responseData;
  }

  async getNumberOfPeoplePerRole() {
    const startTime = process.hrtime();

    const responseData = await SequelizeRepository.getNumberOfPeoplePerRole(this.options);
    
    const stopTime = process.hrtime(startTime);
    const elapsedTime = stopTime[0] * 1000 + stopTime[1] / 1000000
    this.timeToGather = this.timeToGather + elapsedTime;
    
    return responseData;
  }

  async getUsageByPeopleData() {
    const startTime = process.hrtime();

    const responseData = await SequelizeRepository.getUsageByPeopleData(this.options);
    
    const stopTime = process.hrtime(startTime);
    const elapsedTime = stopTime[0] * 1000 + stopTime[1] / 1000000
    this.timeToGather = this.timeToGather + elapsedTime;

    return responseData;
  }

  async getIdlenessPerRoleData() {
    const startTime = process.hrtime();

    const responseData = await SequelizeRepository.getIdlenessPerRoleData(this.options);
    
    const stopTime = process.hrtime(startTime);
    const elapsedTime = stopTime[0] * 1000 + stopTime[1] / 1000000
    this.timeToGather = this.timeToGather + elapsedTime;
    
    return responseData;
  }

  getGatheringTime() {
    return this.timeToGather;
  }
}
