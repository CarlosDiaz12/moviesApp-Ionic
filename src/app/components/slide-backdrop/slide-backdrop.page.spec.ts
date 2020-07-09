import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideBackdropPage } from './slide-backdrop.page';

describe('SlideBackdropPage', () => {
  let component: SlideBackdropPage;
  let fixture: ComponentFixture<SlideBackdropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBackdropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideBackdropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
