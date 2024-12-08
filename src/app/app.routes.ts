import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { CurrentEventComponent } from './events/current-event/current-event.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    // START user routing
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // END user routing

    //START Events routing
    {path: 'events', children: [
        {path: '', component: EventsListComponent},
        {path: ':eventId', component: CurrentEventComponent}
    ]},
    {path: 'add-event', component: AddEventComponent},
    //END Events Routing
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'},
];
