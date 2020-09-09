import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryChartComponent } from './country-chart/country-chart.component';



@NgModule({
  declarations: [CountryListComponent, CountryChartComponent],
  imports: [
    CommonModule
  ],
  exports: [CountryListComponent, CountryChartComponent] 

})
export class CountriesModule { }
