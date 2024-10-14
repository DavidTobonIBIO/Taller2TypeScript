import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById('series-table')!;
let cardColumn: HTMLElement = document.getElementById('card-col')!;


showSeriesData(series);

function showSeriesData(series: Serie[]): void {
    let tbodySeries: HTMLElement = document.createElement('tbody');
    tbodySeries.classList.add('series-table-body');
    for (let serie of series) {
        let trSerie: HTMLElement = document.createElement('tr');
        trSerie.innerHTML = `<th scope="row">${serie.id}</th>
        <td style="color:#00ACC1"><strong>${serie.name}</strong></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        trSerie.addEventListener('click', () => showSeriesCard(serie));
        tbodySeries.appendChild(trSerie);
    }

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

function showSeriesCard(serie: Serie): void {
    console.log(`${serie.name} has been clicked`);
    let card: HTMLElement = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    cardColumn.innerHTML = `<img class="card-img-top" src="./images/${serie.image}" alt="Image of ${serie.name}">
    <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank">${serie.link}</a>
    </div>`;
    cardColumn.appendChild(card);
}
