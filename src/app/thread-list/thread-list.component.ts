import { Component, OnInit, Input } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Thread} from "@shared/models/thread.model";

@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

  @Input('threads') threads: Observable<Thread[]>;

  constructor() { }

  ngOnInit() {
  }

}
