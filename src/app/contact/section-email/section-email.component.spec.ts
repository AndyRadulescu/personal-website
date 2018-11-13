import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEmailComponent } from './section-email.component';

describe('SectionEmailComponent', () => {
  let component: SectionEmailComponent;
  let fixture: ComponentFixture<SectionEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
