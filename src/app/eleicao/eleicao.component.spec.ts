import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleicaoComponent } from './eleicao.component';

describe('EleicaoComponent', () => {
  let component: EleicaoComponent;
  let fixture: ComponentFixture<EleicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
