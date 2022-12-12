import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Crane } from 'interfaces/cranes';
import { CranesHttpService } from 'src/app/shared/cranes-http.service';

@Component({
  selector: 'crane-dialog',
  templateUrl: './edit-crane-dialog.component.html',
  styleUrls: ['./edit-crane-dialog.component.scss']
})
export class EditCraneDialogComponent implements OnInit {
  form: FormGroup;
  dialogTitle: string;
  crane: Crane;
  mode: 'create' | 'update';
  loading$:Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCraneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private cranesService: CranesHttpService) {

    this.dialogTitle = data.dialogTitle;
    this.crane = data.crane;
    this.mode = data.mode;

    const formControls = {
      name: ['', Validators.required],
      iconUrl: ['', Validators.required],
      loadCapacity: ['', Validators.required],
      telescopicBoom: ['', Validators.required],
      maxHeight: ['', Validators.required],
      maxRadius: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(60)]]
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({...data.crane});
    }
    else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        seqNo: ['', Validators.required],
        category: ['', Validators.required],
        axles: ['', Validators.required],
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {

    const changes: Partial<Crane> = {
      ...this.form.value
    };

    if (this.mode == 'update') {
      this.cranesService.updateCrane(this.crane._id, changes)
        .subscribe(
          crane => this.dialogRef.close(crane)
        )
    }
    else if (this.mode == "create") {
      this.cranesService.createCrane(changes)
        .subscribe(
          crane => this.dialogRef.close(crane)
        )
    }
  }


  ngOnInit(): void {
  }



}
