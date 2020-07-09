import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidePairMoviesPage } from './slide-pair-movies.page';

describe('SlidePairMoviesPage', () => {
  let component: SlidePairMoviesPage;
  let fixture: ComponentFixture<SlidePairMoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePairMoviesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidePairMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
