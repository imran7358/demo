import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicslibararyComponent } from './picslibarary.component';

describe('PicslibararyComponent', () => {
  let component: PicslibararyComponent;
  let fixture: ComponentFixture<PicslibararyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicslibararyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicslibararyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
