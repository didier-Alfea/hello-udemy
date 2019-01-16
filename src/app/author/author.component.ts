import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: string[];

  nbAuthors: number;

  isActive = false;

  constructor(private authorService: AuthorService) {
    this.authors = authorService.getAuthors();
    this.nbAuthors = this.authors.length;
   }

  ngOnInit() {
  }

  
  onSave($event) {
    $event.stopPropagation();  // stop bubbling

    console.log('Button clicked!', $event);
  }
}
