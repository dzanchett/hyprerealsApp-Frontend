import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDesejadosComponent } from './livros-desejados.component';

describe('LivrosDesejadosComponent', () => {
  let component: LivrosDesejadosComponent;
  let fixture: ComponentFixture<LivrosDesejadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosDesejadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosDesejadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
