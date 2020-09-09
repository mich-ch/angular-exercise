import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { CountryService } from '../country.service';
import { Country } from '../country';


@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.scss']
})
export class CountryChartComponent implements OnInit {
  countries: Country[];
  countd: number = 1;
  countd2: number ;

  s: number = 1 ;


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    let mich = this.countd;
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
      
      for (let entry of this.countries) {
       
        if(entry.region == "Asia"){
          this.countd = this.countd + 1;
        }
      }
      
    })
    //let mich =this.countd;
    this.countd2 = 22;
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [this.countd2, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}
