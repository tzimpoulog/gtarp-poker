import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', redirectTo: '/user-list', pathMatch: 'full'},
  { path: 'user-list', component: UserListComponent },
  { path: 'table', component: TableComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
