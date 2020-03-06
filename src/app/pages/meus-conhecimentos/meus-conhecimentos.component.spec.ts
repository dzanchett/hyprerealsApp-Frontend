import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusConhecimentosComponent } from './meus-conhecimentos.component';

describe('MeusConhecimentosComponent', () => {
  let component: MeusConhecimentosComponent;
  let fixture: ComponentFixture<MeusConhecimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusConhecimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusConhecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
