import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { HttpComponent } from './http/http.component';
import { HomeComponent } from './home/home.component';

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'template_driven-example', component: TemplateDrivenComponent },
    { path: 'http-example', component: HttpComponent }
];
export const routing = RouterModule.forRoot(MY_ROUTES);