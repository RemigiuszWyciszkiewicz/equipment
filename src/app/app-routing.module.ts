import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'equipment', loadChildren: () => import('src/app/feature/equipment').then((m) => m.EquipmentModule) },
  {
    path: '',
    redirectTo: 'equipment',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
