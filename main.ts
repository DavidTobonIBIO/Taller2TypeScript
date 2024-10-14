import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById('series-table')!;

console.log(series);
console.log("otra cosa");

showSeriesData(series);

function showSeriesData(series: Serie[]): void {
    let tbodySeries: HTMLElement = document.createElement('tbody');
    for (let serie of series) {
        let trSerie: HTMLElement = document.createElement('tr');
        trSerie.innerHTML = `<th scope="row">${serie.id}</th>
        <td style="color:blue">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        tbodySeries.appendChild(trSerie);
    }

    // let trSeasonAvg: HTMLElement = document.createElement('tr');
    // trSeasonAvg.innerHTML = `<td scope="row" id="white-cell" colspan="12">Seasons average: ${seasonAvg}</td>`;
    // tbodySeries.appendChild(trSeasonAvg);
    seriesTable.appendChild(tbodySeries);
    
    let seasonAvg = getSeasonsAvg(series);
    showSeasonsAvg(seasonAvg);
}

function showSeasonsAvg(seasonAvg: number): void {
    let trSeasonAvg: HTMLElement = document.createElement('tr');
    trSeasonAvg.innerHTML = `<td scope="row" id="white-cell" colspan="12">Seasons average: ${seasonAvg}</td>`;
    seriesTable.appendChild(trSeasonAvg);
}

function getSeasonsAvg(series: Serie[]): number {
    let sum: number = 0;
    for (let serie of series) {
        sum += serie.seasons;
    }
    return sum / series.length;
}