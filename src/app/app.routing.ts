import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdditionalComponent } from './additional/additional.component';
import { RecordsComponent } from './records/records.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'additional', component: AdditionalComponent },
    { path: 'records', component: RecordsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }