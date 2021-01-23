import { Component, OnInit } from "@angular/core";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  dab = false;

  whites: number[] = [];
  megas: number[] = [];

  whitePicks: number[] = [];
  megaPick: number|null = null;

  toggleDab() {
    this.dab = !this.dab;
    this.generatePicks();
  }

  ngOnInit() {
    this.initNumbers();
  }

  initNumbers() {
    this.whites = [];
    this.megas = [];

    for (let i = 1; i < 71; i++) {
      this.whites.push(i);
    }

    for (let i = 1; i < 26; i++) {
      this.megas.push(i);
    }
  }

  generatePicks() {
    this.initNumbers();
    this.whitePicks = [];
    this.megaPick = null;
    for (let i = 0; i < 7; i++) {
      this.generateWhite();
    }
    this.generateMega();
  }

  generateWhite() {
    const whitePick = Math.floor(Math.random() * 6) + 1;
    this.whitePicks.push(whitePick);
    this.removePick(this.whites, whitePick);
  }

  generateMega() {
    const megaPick = Math.floor(Math.random() * 25) + 1;
    this.megaPick = megaPick;
    this.removePick(this.megas, megaPick);
  }

  removePick(list: number[], pick: number) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === pick) {
        list.splice(i--, 1);
      }
    }
  }
}
