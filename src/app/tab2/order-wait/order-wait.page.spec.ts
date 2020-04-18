import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderWaitPage } from './order-wait.page';

describe('OrderWaitPage', () => {
  let component: OrderWaitPage;
  let fixture: ComponentFixture<OrderWaitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWaitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderWaitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
