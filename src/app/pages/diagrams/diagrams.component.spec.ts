import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramsComponent } from './diagrams.component';

describe('DiagramsComponent', () => {
  let component: DiagramsComponent;
  let fixture: ComponentFixture<DiagramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
