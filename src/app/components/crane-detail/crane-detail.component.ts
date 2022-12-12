import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crane } from 'interfaces/cranes';
import { Observable } from 'rxjs';
import { CranesHttpService } from 'src/app/shared/cranes-http.service';

@Component({
  selector: 'app-crane-detail',
  templateUrl: './crane-detail.component.html',
  styleUrls: ['./crane-detail.component.scss']
})
export class CraneDetailComponent implements OnInit {

  constructor(private cranesHttp: CranesHttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const craneUrl = this.route.snapshot.paramMap.get("cranesUrl");
    this.crane$ = this.cranesHttp.findCraneByUrl(craneUrl);

  }

  crane: Crane;

  crane$: Observable<Crane>;


}
