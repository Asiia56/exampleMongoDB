import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraneDetailComponent } from './crane-detail.component';

describe('CraneDetailComponent', () => {
  let component: CraneDetailComponent;
  let fixture: ComponentFixture<CraneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraneDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
