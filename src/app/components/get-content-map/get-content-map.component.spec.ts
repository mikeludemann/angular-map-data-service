import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContentMapComponent } from './get-content-map.component';

describe('GetContentMapComponent', () => {
  let component: GetContentMapComponent;
  let fixture: ComponentFixture<GetContentMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetContentMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetContentMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
