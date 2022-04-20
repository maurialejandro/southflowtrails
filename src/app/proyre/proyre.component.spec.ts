import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyreComponent } from './proyre.component';

describe('ProyreComponent', () => {
  let component: ProyreComponent;
  let fixture: ComponentFixture<ProyreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
