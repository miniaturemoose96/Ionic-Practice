import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddJournalPageRoutingModule } from './add-journal-routing.module';

import { AddJournalPage } from './add-journal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddJournalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddJournalPage]
})
export class AddJournalPageModule {}
