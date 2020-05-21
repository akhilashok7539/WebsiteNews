import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  results: any;
  link: any;
  myDate: string;
  today= new Date();
  jstoday = '';
  englishNews = [];
  Newss: any;
  page = 1;
  latestesNews: any;
  constructor(private newsservice:NewsService,private datePipe: DatePipe) { }

  ngOnInit() {
    this.getallNews();
    this.getEnglishNews();
    // this.myDate = this.datePipe.transform(this.myDate, 'dddd, mmmm dS, yyyy');
    // console.log(this.myDate)
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    console.log(this.jstoday)
  }
  getallNews()
  {
    this.newsservice.getallnews().subscribe(
      data =>{
        this.results = data['articles'];
        console.log(data['articles'])
      },
      error =>{

      }
    )
  }
  result(result)
  {
    console.log(result.link)
    this.link = result.link;
    this.newsservice.getMoreNews(this.link);
  }
  getEnglishNews()
  {
    this.newsservice.getNewsEnglish().subscribe(
      data =>{
        this.englishNews = data['articles'];
      },
      error =>{

      }
    )
  }
  checknews(s)
  {
    this.Newss = s.url;
    this.newsservice.getEnglish(this.Newss);
  }
  viewMore()
  {
    this.page = this.page+1;
    console.log(this.page)
    this.newsservice.getTechNews(this.page).subscribe(
      data =>{
        this.latestesNews = data['articles'];
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
}
