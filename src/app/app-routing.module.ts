import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ViewUserComponent } from './user/view-user/view-user.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        component: ListUsersComponent,
        path: '',
      },
      {
        component: ListUsersComponent,
        path: 'list',
      },
      {
        component: DeleteUserComponent,
        path: 'delete/:id',
      },
      {
        component: EditUserComponent,
        path: 'edit/:id',
      },
      {
        component: ViewUserComponent,
        path: 'view/:id',
      },
      {
        component: AddUserComponent,
        path: 'create',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
