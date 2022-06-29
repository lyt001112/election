import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'C:/DApp/BlockchainResume/src/app/modules/main/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }