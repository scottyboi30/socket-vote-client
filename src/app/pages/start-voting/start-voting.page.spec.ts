import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartVotingPage } from './start-voting.page';

describe('StartVotingPage', () => {
  let component: StartVotingPage;
  let fixture: ComponentFixture<StartVotingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartVotingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartVotingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
