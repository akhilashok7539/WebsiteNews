import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpclient:HttpClient) 
  { 

  }
getallnews(){
  // https://api.breakingapi.com/news?q=climate&type=everything&locale=ml-IN&api_key=0380419F77B94460BB62CFC8B57722A5
 return this.httpclient.get('');
}
getMoreNews(link)
{
  window.open(link,'_blank');
}
getEnglish(link)
{
  window.open(link,'_blank');

}
getNewsEnglish(){
  return this.httpclient.get('http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=92aa7a8571b040528c96816343265285');
}
getTechNews(page)
{
  return this.httpclient.get('http://newsapi.org/v2/top-headlines?country=in&category=technology&page=' +page+'&apiKey=92aa7a8571b040528c96816343265285');

}
getallenglishNews()
{
  return this.httpclient.get("http://api-news.dailyhunt.in/api/v2/headlines/user/WEB-06d414f68db3ed635988bc44044cf4cc?pullId=1589951172868&clientId=dhwap123&pageNumber=0&langCode=en&edition=india&pageSize=100&dsOffset=0");
  // return this.httpclient.get('https://www.duklr.com/angular/reverse/?djng_url_name=news_listing-list&news_provider=all&news_type=Feed&period=today&sort=popular');
}
getallnewsNext(url)
{
  return this.httpclient.get(url);
}
}
