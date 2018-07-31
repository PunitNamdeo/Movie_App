import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  message: string;
  movie: any;
  movieFound: boolean;
  moviePoster: string;

  constructor(private searchService: SearchService) { }
  ngOnInit() {}

  searchMovies(term: string): void {
    this.searchService.search(term).subscribe(res => {
      this.movie = res;
      if (this.movie.Response === 'True') {
        if (this.movie.Poster !== 'N/A') {
          this.moviePoster = this.movie.Poster;
        } else {
          this.moviePoster = '';
        }
        this.movieFound = true;
      } else {
        this.movieFound = false;
        this.message = 'No movie was found that matched your search.';
      }
    });
  }
}
