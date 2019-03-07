import { Component, OnInit } from '@angular/core';
import { Login, Group, Role } from '../../shared/models/index';
import { AppConfig } from '../../app.config';
import { LoadingService, UtilsService, GroupService, AlertService } from '../../shared/services/index';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.html',
  styleUrls: ['./games.scss']
})
export class GamesComponent implements OnInit {
  public returnUrl: string;
  public groupId: string;
  public groups: Array<Group>;
  public isTeacher = false;
  public sub: {};

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public alertService: AlertService,
    public utilsService: UtilsService,
    public loadingService: LoadingService,
    public groupService: GroupService) {

    this.utilsService.currentUser = Login.toObject(localStorage.getItem(AppConfig.LS_USER));
    this.utilsService.role = Number(localStorage.getItem(AppConfig.LS_ROLE));

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.groupId = params['id'];
      console.log(this.groupId);
    });


    /*
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/groupStudents';


    if (this.utilsService.role === Role.TEACHER || this.utilsService.role === Role.STUDENT) {
      if (this.utilsService.role === Role.TEACHER) { this.isTeacher = true; }
      this.loadingService.show();
      this.groupService.getMyGroups().subscribe(
        ((groups: Array<Group>) => {
          this.groups = groups.sort((n1, n2) => +n1.id - +n2.id);
          this.loadingService.hide();
        }),
        ((error: Response) => {
          this.loadingService.hide();
          this.alertService.show(error.toString());
        }));
    }
    */
  }

}
