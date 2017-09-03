import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { LengthComponent } from './length/length.component';
import { MassComponent } from './mass/mass.component';
import { SpeedComponent } from './speed/speed.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { VolumeComponent } from './volume/volume.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    LengthComponent,
    MassComponent,
    SpeedComponent,
    TemperatureComponent,
    VolumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
