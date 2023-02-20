import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TableViewComponent } from './table-view/table-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GridModule } from '@syncfusion/ej2-angular-grids';


import { NgSelectModule } from '@ng-select/ng-select';

import { MatNativeDateModule } from '@angular/material/core';
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { DemotableComponent } from './demotable/demotable.component';
import { CreativePushComponent } from './creative-push/creative-push.component';
import { DaxComponent } from './dax/dax.component';
import { VformComponent } from './vform/vform.component';
import { IntegrationComponent } from './integration/integration.component';
import { IntgUpdateComponent } from './intg-update/intg-update.component';
// import { PagingSampleComponent } from "./grid/grid-paging-sample/grid-paging-sample.component";
// import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    TableViewComponent,
    DemotableComponent,
    CreativePushComponent,
    DaxComponent,
    VformComponent,
    IntegrationComponent,
    IntgUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    GridModule,
    NgSelectModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
   
    NgbPaginationModule,
    NgbModule,
    ReactiveFormsModule,
    IgxAvatarModule,
    IgxBadgeModule,
    MatDatepickerModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }