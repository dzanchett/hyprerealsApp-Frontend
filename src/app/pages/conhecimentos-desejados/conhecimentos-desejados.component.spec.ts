import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecimentosDesejadosComponent } from './conhecimentos-desejados.component';

describe('ConhecimentosDesejadosComponent', () => {
  let component: ConhecimentosDesejadosComponent;
  let fixture: ComponentFixture<ConhecimentosDesejadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConhecimentosDesejadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecimentosDesejadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
