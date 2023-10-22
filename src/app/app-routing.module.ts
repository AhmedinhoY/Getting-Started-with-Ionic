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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
