import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
  englishNews = [];
  link: any;
  toatalresults: any;
  nextUrl: any;
  latestesNews = [];

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getallenglishNews().subscribe(
      data =>{
        this.toatalresults =data['data'];
        this.englishNews = data['data'].rows;
        // this.englishNews = data['results'];
        console.log(this.englishNews)
      },
      error =>{

      }
    )
  }
  viewMore(){
  this.nextUrl = this.toatalresults.nextPageUrl;
  console.log(this.nextUrl)
  this.newsService.getallnewsNext(this.nextUrl).subscribe(
    data =>{
      this.toatalresults =data['data'];
       this.latestesNews =data['data'].rows;
       for(let i =0;i<this.latestesNews.length;i++)
       {
        this.englishNews.push(this.latestesNews[i])
       }
      
      console.log(this.englishNews)
    },
    error =>{

    }
  )
  }
  checknews(s)
  {
    console.log(s.news_page_url)
    this.link = s.news_page_url;
    this.newsService.getMoreNews(this.link);

  }
}
