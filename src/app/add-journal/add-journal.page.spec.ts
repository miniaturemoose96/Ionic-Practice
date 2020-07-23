import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddJournalPage } from './add-journal.page';

describe('AddJournalPage', () => {
  let component: AddJournalPage;
  let fixture: ComponentFixture<AddJournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJournalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
