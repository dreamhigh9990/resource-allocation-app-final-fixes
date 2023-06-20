import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { UserService } from 'src/app/user/user.service';
import { PlanService } from 'src/app/plan/plan.service';
import { CompensationService } from 'src/app/compensation/compensation.service';
import { PersonService } from 'src/app/person/person.service';
import { JobTitleService } from 'src/app/job-title/job-title.service';
import { ProjectService } from 'src/app/project/project.service';
import { AssignmentService } from 'src/app/assignment/assignment.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(
    public auditLogService: AuditLogService,
    public settingsService: SettingsService,
    public userService: UserService,
    public planService: PlanService,
    public compensationService: CompensationService,
    public personService: PersonService,
    public jobTitleService: JobTitleService,
    public projectService: ProjectService,
    public assignmentService: AssignmentService,
  ) {}

  ngOnInit(): void {}
}
