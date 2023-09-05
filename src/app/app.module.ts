import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
 
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
 import { LoginComponent } from './pages/login/login.component';
import { ListUtilisateurComponent } from './pages/list-utilisateur/list-utilisateur.component';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { AjouterUtilisateurComponent } from './pages/ajouter-utilisateur/ajouter-utilisateur.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { TrainingComponent } from './pages/training/training.component';
import { ContratComponent } from './pages/contrat/contrat.component';
import { PageTrainingComponent } from './pages/training/page-training/page-training.component';
import { MayTrainingComponent } from './pages/training/may-training/may-training.component';
import { ListContratComponent } from './pages/list-contrat/list-contrat.component';
import { AddContratComponent } from './pages/add-contrat/add-contrat.component';
import { PossitionComponent } from './pages/possition/possition.component';
import { MyAssestsComponent } from './pages/my-assests/my-assests.component';
import { ChildRequestComponent } from './pages/my-assests/child-request/child-request.component';
import { MyInternetSubscriptionComponent } from './pages/my-assests/my-internet-subscription/my-internet-subscription.component';
import { GymRequestComponent } from './pages/my-assests/gym-request/gym-request.component';
import { TaskComponent } from './task/task.component';
 
import { RemoteComponent } from './pages/my-holiday/remote/remote.component';
import { MyHolidayComponent } from './pages/my-holiday/my-holiday.component';
import { HolidayComponent } from './pages/my-holiday/holiday/holiday.component';
import { PermissionComponent } from './pages/my-holiday/permission/permission.component';
import { PresenceComponent } from './pages/my-holiday/presence/presence.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { ToastrModule } from 'ngx-toastr';
import { ListPlanningComponent } from './pages/list-planning/list-planning.component';
import { RequestComponent } from './pages/request/request.component';
import { ListRequestComponent } from './pages/list-request/list-request.component';
import { TrainingRequestService } from './service/TrainingRequest.service';
import { InvidualDataComponent } from './pages/invidual-data/invidual-data.component';
import { HrCommunicationComponent } from './pages/invidual-data/hr-communication/hr-communication.component';
import { HrDocumentComponent } from './pages/invidual-data/hr-document/hr-document.component';
import { NgxPaginationModule } from 'ngx-pagination';
     
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
     LoginComponent,
     ListUtilisateurComponent,
     AjouterUtilisateurComponent,
     PlanningComponent,
     TrainingComponent,
     ContratComponent,
     PageTrainingComponent,
     MayTrainingComponent,
     ListContratComponent,
     AddContratComponent,
     PossitionComponent,
     MyAssestsComponent,
     ChildRequestComponent,
     MyInternetSubscriptionComponent,
     GymRequestComponent,
     TaskComponent,
     MyHolidayComponent,
     RemoteComponent,
     HolidayComponent,
     PermissionComponent,
     RemoteComponent,
     PresenceComponent,
     UpdateUserComponent,
     TaskComponent,
     ListPlanningComponent,
     RequestComponent,
     ListRequestComponent,
     InvidualDataComponent,
     HrCommunicationComponent,
     HrDocumentComponent
   
      
 
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
 
  ],

  providers: [AuthService,UserService,TrainingRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
