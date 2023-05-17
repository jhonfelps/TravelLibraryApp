import { ComponentFixture, TestBed } from '@angular/core/testing';

import { librosComponent } from './libros.component';

describe('librosComponent', () => {
  let component: librosComponent;
  let fixture: ComponentFixture<librosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ librosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(librosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
