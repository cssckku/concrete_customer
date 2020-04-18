import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotiSystemPage } from './noti-system.page';

describe('NotiSystemPage', () => {
  let component: NotiSystemPage;
  let fixture: ComponentFixture<NotiSystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiSystemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotiSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
