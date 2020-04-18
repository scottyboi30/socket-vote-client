import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VotingsPage } from './votings.page';

describe('VotingsPage', () => {
  let component: VotingsPage;
  let fixture: ComponentFixture<VotingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VotingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
