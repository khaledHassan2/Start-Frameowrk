import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfuondComponent} from './notfuond/notfuond.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'portfolio',component:PortfolioComponent,title:'portfolio'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:'**',component:NotfuondComponent,title:'Not Found'}
];
