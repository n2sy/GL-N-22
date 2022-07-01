import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { UpdateComponent } from './update/update.component';
import { NotFoudnComponent } from './not-foudn/not-foudn.component';
import { LoginComponent } from './login/login.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    component: CvComponent,
    children: [
      //   { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: UpdateComponent },
    ],
  },

  {
    path: 'list-servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'not-found', component: NotFoudnComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const GL_N_ROUTING = RouterModule.forRoot(myRoutes);
