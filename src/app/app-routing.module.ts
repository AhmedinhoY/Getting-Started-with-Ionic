import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'budget-planner',
    loadChildren: () =>
      import('./budget-planner/budget-planner.module').then(
        (m) => m.BudgetPlannerPageModule
      ),
  },
  {
    path: 'tutorial1',
    loadChildren: () =>
      import('./tutorial1/tutorial1.module').then((m) => m.Tutorial1PageModule),
  },
  {
    path: 'tutorial2',
    loadChildren: () =>
      import('./tutorial2/tutorial2.module').then((m) => m.Tutorial2PageModule),
  },
  {
    path: 'tutorial3',
    loadChildren: () =>
      import('./tutorial3/tutorial3.module').then((m) => m.Tutorial3PageModule),
  },
  {
    path: 'brands',
    loadChildren: () =>
      import('./brands/brands.module').then((m) => m.BrandsPageModule),
  },
  {
    path: 'details/:index',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsPageModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsPageModule),
  },
  {
    path: 'tutorial4',
    loadChildren: () =>
      import('./tutorial4/tutorial4.module').then((m) => m.Tutorial4PageModule),
  },
  {
    path: 'tut4-details/:category/:item',
    loadChildren: () =>
      import('./tut4-details/tut4-details.module').then(
        (m) => m.Tut4DetailsPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then( m => m.MembersPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'tutorial5',
    loadChildren: () => import('./tutorial5/tutorial5.module').then( m => m.Tutorial5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
