import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderSendPage } from './order-send.page';

describe('OrderSendPage', () => {
  let component: OrderSendPage;
  let fixture: ComponentFixture<OrderSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
