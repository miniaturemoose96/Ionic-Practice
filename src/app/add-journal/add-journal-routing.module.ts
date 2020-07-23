import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddJournalPage } from './add-journal.page';

const routes: Routes = [
  {
    path: '',
    component: AddJournalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddJournalPageRoutingModule {}
