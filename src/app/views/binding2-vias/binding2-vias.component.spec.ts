import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding2ViasComponent } from './binding2-vias.component';

describe('Binding2ViasComponent', () => {
  let component: Binding2ViasComponent;
  let fixture: ComponentFixture<Binding2ViasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binding2ViasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Binding2ViasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
