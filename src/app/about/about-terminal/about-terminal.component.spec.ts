import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTerminalComponent } from './about-terminal.component';

describe('AboutTerminalComponent', () => {
  let component: AboutTerminalComponent;
  let fixture: ComponentFixture<AboutTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
