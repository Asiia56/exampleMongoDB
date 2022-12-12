import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCraneDialogComponent } from './edit-crane-dialog.component';

describe('EditCraneDialogComponent', () => {
  let component: EditCraneDialogComponent;
  let fixture: ComponentFixture<EditCraneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCraneDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCraneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
