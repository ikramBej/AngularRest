import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
selector: 'app-check-list',
templateUrl: './check-list.component.html',
styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
Check:any;
constructor(
public restApi: RestApiService
) { }
ngOnInit() {
this.loadChecks()
}
// Get checks list
loadChecks() {
return this.restApi.getCheck().subscribe(data => {
this.Check = data;
console.log(this.Check);
})
}
}
