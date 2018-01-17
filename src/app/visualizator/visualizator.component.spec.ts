import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizatorComponent } from './visualizator.component';

describe('VisualizatorComponent', () => {
  let component: VisualizatorComponent;
  let fixture: ComponentFixture<VisualizatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
