import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloggersComponent } from './bloggers/bloggers.component';
import { CasesComponent } from './cases/cases.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExitAgencyComponent } from './exit-agency/exit-agency.component';
import { MainComponent } from './main/main.component';
import { BloggerComponent } from './blogger/blogger.component';

const routes: Routes = [
  { path: 'bloggers', component: BloggersComponent },
  { path: 'main', component: MainComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'exit-agency', component: ExitAgencyComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'blogger/:id', component: BloggerComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


