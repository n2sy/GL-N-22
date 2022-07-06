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
import { AllowGuard } from './guards/allow.guard';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [AllowGuard] },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: UpdateComponent },
    ],
  },

  {
    path: 'list-servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] }, //canDeactivate: [LoginGuard]
  { path: 'ms-word', component: MsWordComponent },
  { path: 'not-found', component: NotFoudnComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const GL_N_ROUTING = RouterModule.forRoot(myRoutes);
