import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step21Page } from './step21.page';

describe('Step21Page', () => {
  let component: Step21Page;
  let fixture: ComponentFixture<Step21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step21Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
