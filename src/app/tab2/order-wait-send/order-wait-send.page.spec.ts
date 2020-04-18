import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderWaitSendPage } from './order-wait-send.page';

describe('OrderWaitSendPage', () => {
  let component: OrderWaitSendPage;
  let fixture: ComponentFixture<OrderWaitSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWaitSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderWaitSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
