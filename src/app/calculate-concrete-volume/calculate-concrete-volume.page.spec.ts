import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculateConcreteVolumePage } from './calculate-concrete-volume.page';

describe('CalculateConcreteVolumePage', () => {
  let component: CalculateConcreteVolumePage;
  let fixture: ComponentFixture<CalculateConcreteVolumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateConcreteVolumePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculateConcreteVolumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
