import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TableViewComponent } from './table-view/table-view.component';
import { DemotableComponent } from './demotable/demotable.component';
import { CreativePushComponent } from './creative-push/creative-push.component';
import { DaxComponent } from './dax/dax.component';
import { VformComponent } from './vform/vform.component';
import { IntegrationComponent } from './integration/integration.component';
import { IntgUpdateComponent } from './intg-update/intg-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table-view', component: TableViewComponent },
  { path: 'demotable', component: DemotableComponent },
  { path: 'integration',component:IntegrationComponent},
  { path: 'intg-update', component: IntgUpdateComponent },
  { path: 'creative-push',component:CreativePushComponent,
children:[
  {path:'dax',component:DaxComponent},
  {path:'vform',component:VformComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}