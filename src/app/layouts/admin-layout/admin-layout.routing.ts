import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListUtilisateurComponent } from './../../pages/list-utilisateur/list-utilisateur.component';
import { AjouterUtilisateurComponent } from './../../pages/ajouter-utilisateur/ajouter-utilisateur.component';
import { SkillsComponent } from '../../pages/skills/skills.component';
import { UpdateUserComponent } from '../../pages/update-user/update-user.component';
import { TrainingComponent } from 'app/pages/training/training.component';
import { PageTrainingComponent } from 'app/pages/training/page-training/page-training.component';
import { ListContratComponent } from 'app/pages/list-contrat/list-contrat.component';
import { AddContratComponent } from 'app/pages/add-contrat/add-contrat.component';
import { PossitionComponent } from 'app/pages/possition/possition.component';
import { MyAssestsComponent } from 'app/pages/my-assests/my-assests.component';
import { TaskComponent } from 'app/task/task.component';
import { ContratComponent } from 'app/pages/contrat/contrat.component';
import { MyHolidayComponent } from 'app/pages/my-holiday/my-holiday.component';
import { ListPlanningComponent } from 'app/pages/list-planning/list-planning.component';
import { ListRequestComponent } from 'app/pages/list-request/list-request.component';
import { RequestComponent } from 'app/pages/request/request.component';
import { InvidualDataComponent } from 'app/pages/invidual-data/invidual-data.component';
import { CalendarComponent } from 'app/pages/calendar/calendar.component';
import { ListTrainingRequestComponent } from 'app/pages/list-training-request/list-training-request.component';
 
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'employee-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'list-user', component: ListUtilisateurComponent },
    { path: 'add-user', component: AjouterUtilisateurComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'training-catalog', component: PageTrainingComponent },
    { path: 'update/:id', component: UpdateUserComponent },
    { path: 'mobility', component: ListContratComponent },
    { path: 'add-contract', component: AddContratComponent },
    { path: 'open-positions', component: PossitionComponent },
    { path: 'employee-assets', component: MyAssestsComponent },
    { path: 'task', component: TaskComponent },
    { path: 'contrat', component: ContratComponent },
    { path: 'time-tracking', component: MyHolidayComponent },
    { path: 'notification', component: NotificationsComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'planning', component: ListPlanningComponent },
    { path: 'request-list', component: ListRequestComponent },
    { path: 'request', component: RequestComponent },
    { path: 'invidual-data', component: InvidualDataComponent },
    {path:'calendar',component:CalendarComponent},
    {path:'my-contract',component:ContratComponent},
    {path:'list-contract',component:ListContratComponent},
    {path:'checkList/:id',component:ListTrainingRequestComponent},
     
];
