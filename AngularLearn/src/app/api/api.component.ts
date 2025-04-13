import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CatResponse {
  id: string;
  tags: string[];
  created_at: string;
  url: string;
  mimetype: string;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  catImageUrl: string | null = null;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchCatImage();
  }

  fetchCatImage(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.http.get<CatResponse>('https://cataas.com/cat?json=true')
      .subscribe({
        next: (response: CatResponse) => {
          this.catImageUrl = response.url;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching cat image:', error);
          this.errorMessage = 'Failed to load cat image. Please try again.';
          this.isLoading = false;
        }
      });
  }

  refreshCatImage(): void {
    this.fetchCatImage();
  }
}
