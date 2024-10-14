import { series } from './data.js';
var seriesTable = document.getElementById('series-table');
console.log(series);
console.log("otra cosa");
showSeriesData(series);
function showSeriesData(series) {
    var tbodySeries = document.createElement('tbody');
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trSerie = document.createElement('tr');
        trSerie.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th>\n        <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        tbodySeries.appendChild(trSerie);
    }
    var seasonAvg = getSeasonsAvg(series);
    var trSeasonAvg = document.createElement('tr');
    trSeasonAvg.innerHTML = "<td scope=\"row\" id=\"white-cell\" colspan=\"12\">Seasons average: ".concat(seasonAvg, "</td>");
    tbodySeries.appendChild(trSeasonAvg);
    seriesTable.appendChild(tbodySeries);
}
function getSeasonsAvg(series) {
    var sum = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        sum += serie.seasons;
    }
    return sum / series.length;
}
