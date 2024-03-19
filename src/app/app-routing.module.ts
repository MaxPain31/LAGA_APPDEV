import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithId } from './my-custom/my-custom-page-with-id/my-custom-page-with-id';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-custom',
    loadChildren: () => import('./my-custom/my-custom.module').then( m => m.MyCustomPageModule)
  },
  {
    path: 'my-custom/:id', 
    component: MyCustomPageWithId
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
