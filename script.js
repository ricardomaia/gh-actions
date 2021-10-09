const URL_TO_FETCH =
  "https://raw.githubusercontent.com/ricardomaia/gh-actions/master/2021-test.json";

chartData = () => {
  fetch(URL_TO_FETCH, {
    method: "get", // opcional
    cache: "no-store",
  })
    .then(function (response) {
      response.text().then(function (result) {
        console.log("result", result);
        str = result
          .replace(/(\r\n|\n|\r)/gm, "") // removing line breaks
          .replace(/,([^,]*)$/gimu, "$1"); // removing last comma
        console.log("str", str);
        data_string = `[${str}]`;
        console.log(data_string);
        var data = JSON.parse(data_string);
        console.log("data", data);
        /*
      var data = [
        [1633722014000, 0.2719],
        [1633722014000, 0.109883],
        [1633722014000, 0.025492],
        [1633724379000, 0.380885],
        [1633726380000, 0.081743],
        [1633726800000, 0.01263],
      ];
    */

        var options1 = {
          chart: {
            locales: [
              {
                name: "pt_br",
                options: {
                  months: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  shortMonths: [
                    "Jan",
                    "Fev",
                    "Mar",
                    "Abr",
                    "Ma=i",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Set",
                    "Out",
                    "Nov",
                    "Dez",
                  ],
                  days: [
                    "Domingo",
                    "Segunda",
                    "Terça",
                    "Quarta",
                    "Quinta",
                    "Sexta",
                    "Sábado",
                  ],
                  shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                  toolbar: {
                    exportToSVG: "Download SVG",
                    exportToPNG: "Download PNG",
                    menu: "Menu",
                    selection: "Selection",
                    selectionZoom: "Selection Zoom",
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                    pan: "Panning",
                    reset: "Reset Zoom",
                  },
                },
              },
            ],
            defaultLocale: "pt_br",
            zoom: {
              autoScaleYaxis: true,
            },
            id: "chart2",
            type: "area",
            height: 330,
            foreColor: "#ccc",
            toolbar: {
              show: true,
            },
          },
          markers: {
            size: 0,
            style: "hollow",
          },
          colors: ["#00BAEC"],
          stroke: {
            width: 3,
          },
          grid: {
            borderColor: "#555",
            clipMarkers: true,
            yaxis: {
              lines: {
                show: true,
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            gradient: {
              enabled: true,
              opacityFrom: 0.55,
              opacityTo: 0,
            },
          },
          markers: {
            size: 3,
            colors: ["#000524"],
            strokeColor: "#00BAEC",
            strokeWidth: 3,
          },
          series: [
            {
              name: "Tempo de Resposta",
              data: data,
            },
          ],
          tooltip: {
            theme: "dark",
          },
          xaxis: {
            type: "datetime",

            labels: {
              datetimeUTC: false,
              datetimeFormatter: {
                year: "yyyy",
                month: "MMM 'yy",
                day: "dd MMM",
                hour: "HH:mm",
              },
            },
          },
          yaxis: {
            min: 0,
            tickAmount: 10,
          },
          legend: {
            show: true,
          },
        };

        var chart1 = new ApexCharts(
          document.querySelector("#chart-area"),
          options1
        );

        chart1.render();

        var options2 = {
          chart: {
            id: "chart1",
            height: 130,
            type: "bar",
            foreColor: "#ccc",
            brush: {
              target: "chart2",
              enabled: true,
            },
            selection: {
              enabled: true,
              fill: {
                color: "#fff",
                opacity: 0.4,
              },
            },
          },
          colors: ["#FF0080"],
          series: [
            {
              data: data,
            },
          ],
          stroke: {
            width: 2,
          },
          grid: {
            borderColor: "#444",
          },
          markers: {
            size: 0,
          },
          xaxis: {
            type: "datetime",
            labels: {
              datetimeUTC: false,
              datetimeFormatter: {
                year: "yyyy",
                month: "MMM 'yy",
                day: "dd MMM",
                hour: "HH:mm",
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          yaxis: {
            tickAmount: 2,
          },
        };

        var chart2 = new ApexCharts(
          document.querySelector("#chart-bar"),
          options2
        );

        chart2.render();

        function generateDayWiseTimeSeries(baseval, count, yrange) {
          var i = 0;
          var series = [];
          while (i < count) {
            var x = baseval;
            var y =
              Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
              yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
          }
          return series;
        }
      });
    })
    .catch(function (err) {
      console.error(err);
    });
};

chartData();
