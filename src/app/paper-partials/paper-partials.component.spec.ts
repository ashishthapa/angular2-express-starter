import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPartialsComponent } from './paper-partials.component';

describe('PaperPartialsComponent', () => {
  let component: PaperPartialsComponent;
  let fixture: ComponentFixture<PaperPartialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperPartialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperPartialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
