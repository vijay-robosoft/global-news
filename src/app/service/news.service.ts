import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListOfNews, topNewsClass } from '../models/news-list.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})  
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews = () => {
    const temp1 = [];
    let data = [
      {
        "status": "ok",
        "totalResults": 8970,
        "articles": [
        {
        "source": {
        "id": "the-hindu",
        "name": "lskdjfl sldfjk "
        },
        "author": "Reuters",
        "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
        "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
        "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
        "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
        "publishedAt": "2021-02-06T07:42:44Z",
        "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
        },
        {
          "source": {
          "id": "the-hindu",
          "name": "vijay"
          },
          "author": "Reuters",
          "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
          "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
          "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
          "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
          "publishedAt": "2021-02-06T07:42:44Z",
          "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
          },
          {
            "source": {
            "id": "the-hindu",
            "name": "The Hindu"
            },
            "author": "Reuters",
            "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
            "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
            "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
            "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
            "publishedAt": "2021-02-06T07:42:44Z",
            "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
            },
            {
              "source": {
              "id": "the-hindu",
              "name": "The Hindu"
              },
              "author": "Reuters",
              "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
              "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
              "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
              "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
              "publishedAt": "2021-02-06T07:42:44Z",
              "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
              },
              {
                "source": {
                "id": "the-hindu",
                "name": "The Hindu"
                },
                "author": "Reuters",
                "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                "publishedAt": "2021-02-06T07:42:44Z",
                "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                },
                {
                  "source": {
                  "id": "the-hindu",
                  "name": "vijay"
                  },
                  "author": "Reuters",
                  "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                  "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                  "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                  "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                  "publishedAt": "2021-02-06T07:42:44Z",
                  "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                  },
                  {
                    "source": {
                    "id": "the-hindu",
                    "name": "vijay"
                    },
                    "author": "Reuters",
                    "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                    "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                    "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                    "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                    "publishedAt": "2021-02-06T07:42:44Z",
                    "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                    },
                    {
                      "source": {
                      "id": "the-hindu",
                      "name": "vijay"
                      },
                      "author": "Reuters",
                      "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                      "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                      "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                      "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                      "publishedAt": "2021-02-06T07:42:44Z",
                      "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                      },
                      {
                        "source": {
                        "id": "the-hindu",
                        "name": "vijay"
                        },
                        "author": "Reuters",
                        "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                        "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                        "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                        "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                        "publishedAt": "2021-02-06T07:42:44Z",
                        "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                        },
                        {
                          "source": {
                          "id": "the-hindu",
                          "name": "vijay"
                          },
                          "author": "Reuters",
                          "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                          "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                          "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                          "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                          "publishedAt": "2021-02-06T07:42:44Z",
                          "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                          },
                          {
                            "source": {
                            "id": "the-hindu",
                            "name": "vijay"
                            },
                            "author": "Reuters",
                            "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                            "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                            "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                            "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                            "publishedAt": "2021-02-06T07:42:44Z",
                            "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                            },
                            {
                              "source": {
                              "id": "the-hindu",
                              "name": "vijay"
                              },
                              "author": "Reuters",
                              "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                              "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                              "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                              "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                              "publishedAt": "2021-02-06T07:42:44Z",
                              "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                              },
                              {
                                "source": {
                                "id": "the-hindu",
                                "name": "vijay"
                                },
                                "author": "Reuters",
                                "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                                "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                                "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                                "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                                "publishedAt": "2021-02-06T07:42:44Z",
                                "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                                },
                                {
                                  "source": {
                                  "id": "the-hindu",
                                  "name": "vijay"
                                  },
                                  "author": "Reuters",
                                  "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
                                  "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
                                  "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
                                  "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
                                  "publishedAt": "2021-02-06T07:42:44Z",
                                  "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
                                  }
        ],
      
      }
    ];

    if(data[0].status.toLocaleLowerCase() === 'ok') {
      const response: any = data[0].articles;
      const newsInstance = new ListOfNews();

      for(let list = 0; list < response.length; list++) {
        newsInstance.name     = response[list].source.name;
        newsInstance.title    = response[list].title;
        newsInstance.des      = response[list].description;
        newsInstance.img      = response[list].urlToImage;

        temp1.push(newsInstance);
        


      }
      console.log(response)
      return temp1;       

      
    }
    
    
  }

  topNews = () => {
    const temp = [];
    // let data: any = [
    //   {
    //     "status": "ok",
    //     "totalResults": 8970,
    //     "articles": [
    //     {
    //     "source": {
    //     "id": "the-hindu",
    //     "name": "hello"
    //     },
    //     "author": "Reuters",
    //     "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
    //     "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
    //     "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
    //     "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
    //     "publishedAt": "2021-02-06T07:42:44Z",
    //     "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
    //     },
    //     {
    //       "source": {
    //       "id": "the-hindu",
    //       "name": "hello"
    //       },
    //       "author": "Reuters",
    //       "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
    //       "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
    //       "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
    //       "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
    //       "publishedAt": "2021-02-06T07:42:44Z",
    //       "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
    //       },
    //       {
    //         "source": {
    //         "id": "the-hindu",
    //         "name": "The Hindu"
    //         },
    //         "author": "Reuters",
    //         "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
    //         "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
    //         "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
    //         "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
    //         "publishedAt": "2021-02-06T07:42:44Z",
    //         "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
    //         },
    //         {
    //           "source": {
    //           "id": "the-hindu",
    //           "name": "The Hindu"
    //           },
    //           "author": "Reuters",
    //           "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
    //           "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
    //           "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
    //           "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
    //           "publishedAt": "2021-02-06T07:42:44Z",
    //           "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
    //           },
    //           {
    //             "source": {
    //             "id": "the-hindu",
    //             "name": "The Hindu"
    //             },
    //             "author": "Reuters",
    //             "title": "Samsung considers Austin for $17 bln chip plant, eyes tax breaks of at least $806 mln",
    //             "description": "Samsung said in its filings that if Austin is selected, the company would break ground on the site in the second quarter of this year and that the plant will become operational in the third quarter of 2023.",
    //             "url": "https://www.thehindu.com/sci-tech/technology/samsung-considers-austin-for-17-bln-chip-plant-eyes-tax-breaks-of-at-least-806-mln/article33766367.ece",
    //             "urlToImage": "https://www.thehindu.com/sci-tech/technology/ivjpjh/article33588557.ece/ALTERNATES/LANDSCAPE_615/Samsung1",
    //             "publishedAt": "2021-02-06T07:42:44Z",
    //             "content": "(Subscribe to our Today's Cache newsletter for a quick snapshot of top 5 tech stories. Click here to subscribe for free.)\r\nSamsung Electronics Co Ltd is considering Austin, Texas, as one of the sites… [+2522 chars]"
    //             }
    //     ],
      
    //   }
    // ];

    // if(data.status.toLocaleLowerCase() === 'ok') {
    //   const response: any = data.articles;
    //   const newsInstance = new topNewsClass();

    //   for(let list = 0; list < response.length; list++) {
    //     newsInstance.name     = response[list].source.name;
    //     newsInstance.title    = response[list].title;
    //     newsInstance.des      = response[list].description;
    //     newsInstance.img      = response[list].urlToImage;

    //     temp.push(newsInstance);

    //   }
      return temp;     
    // return this.http.get('http://newsapi.org/v2/everything?q=tesla&from=2021-01-06&sortBy=publishedAt&apiKey=b1c766519d9149d9adcc5c7d632eb0eb')
    // .pipe(
    //  map((data : any) => {
    //   if(data.status.toLocaleLowerCase() === 'ok') {
    //     const response: any = data.articles;
    //     const newsInstance = new topNewsClass();
  
    //     for(let list = 0; list < response.length; list++) {
    //       newsInstance.name     = response[list].source.name;
    //       newsInstance.title    = response[list].title;
    //       newsInstance.des      = response[list].description;
    //       newsInstance.img      = response[list].urlToImage;
  
    //       temp.push(newsInstance);
  
    //     }
    //     return temp;       
        
    //   }
    //  })
    // )    
    
  }
}
