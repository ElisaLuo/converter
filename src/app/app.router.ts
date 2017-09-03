import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { HomeComponent } from './home/home.component';
import { LengthComponent } from './length/length.component';
import { MassComponent } from './mass/mass.component';
import { SpeedComponent } from './speed/speed.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { VolumeComponent } from './volume/volume.component';

export const router:Routes = [
    {path:"", redirectTo: "home", pathMatch: "full"},
    {path:"area", component: AreaComponent},
    {path:"home", component: HomeComponent},
    {path:"length", component: LengthComponent},
    {path:"mass", component: MassComponent},
    {path:"speed", component: SpeedComponent},
    {path:"temperature", component: TemperatureComponent},
    {path:"volume", component: VolumeComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);