import { series } from './data.js';
var seriesTable = document.getElementById('series-table');
var cardColumn = document.getElementById('card-col');
showSeriesData(series);
function showSeriesData(series) {
    var tbodySeries = document.createElement('tbody');
    tbodySeries.classList.add('series-table-body');
    var _loop_1 = function (serie) {
        var trSerie = document.createElement('tr');
        trSerie.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th>\n        <td style=\"color:#00ACC1\"><strong>").concat(serie.name, "</strong></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        trSerie.addEventListener('click', function () { return showSeriesCard(serie); });
        tbodySeries.appendChild(trSerie);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(tbodySeries);
    var seasonAvg = getSeasonsAvg(series);
    showSeasonsAvg(seasonAvg);
}
function showSeasonsAvg(seasonAvg) {
    var trSeasonAvg = document.createElement('tr');
    trSeasonAvg.innerHTML = "<td scope=\"row\" id=\"white-cell\" colspan=\"12\">Seasons average: ".concat(seasonAvg, "</td>");
    seriesTable.appendChild(trSeasonAvg);
}
function getSeasonsAvg(series) {
    var sum = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        sum += serie.seasons;
    }
    return sum / series.length;
}
function showSeriesCard(serie) {
    console.log("".concat(serie.name, " has been clicked"));
    var card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    cardColumn.innerHTML = "<img class=\"card-img-top\" src=\"./images/".concat(serie.image, "\" alt=\"Image of ").concat(serie.name, "\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a>\n    </div>");
    cardColumn.appendChild(card);
}
