import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTagComponent } from './new-tag.component';

describe('NewTagComponent', () => {
  let component: NewTagComponent;
  let fixture: ComponentFixture<NewTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTagComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
