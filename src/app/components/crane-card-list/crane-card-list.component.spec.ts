import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraneCardListComponent } from './crane-card-list.component';

describe('CraneCardListComponent', () => {
  let component: CraneCardListComponent;
  let fixture: ComponentFixture<CraneCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraneCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraneCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
