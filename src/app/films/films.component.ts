import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Film {
  title: string;
  producer: string;
  director: string;
  release_date: string;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  actor: string = "";
  displayedColumns: string[] = ['title', 'producer', 'director', 'release_date'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<FilmsComponent>) { }

  ngOnInit(): void {
     this.films = this.data.films;
     this.actor = this.data.actor;
  }

}
