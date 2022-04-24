import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from './app.service';
import { FilmsComponent } from './films/films.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dsv';
  filmsCmptRef: MatDialogRef<FilmsComponent>;
  peopleDetails: any = [];
  films: any = [];
  constructor(private appService: AppService,
    private cd: ChangeDetectorRef,
    public dialog: MatDialog) {
  }
  ngOnInit() {
    this.appService.getAllPeopleDetails().subscribe((res: any) => {
      this.peopleDetails = res.results;
      this.cd.detectChanges();
    });
  }

  showFilms(pd: any) {
    this.appService.getFilmsData(pd.films).subscribe((res: any) => {
      this.filmsCmptRef = this.dialog.open(FilmsComponent, {
        width: '100%',
        //maxWidth: '400px',
        height: 'auto',
        hasBackdrop: true,
        //maxHeight: '700px',
        data: {actor: pd.name, films: res}
      })
      this.filmsCmptRef
        .afterClosed()
        .subscribe(data => {
        });
    })

  }
}
