


   src = "{{ url_for('static', filename = 'js-fluid-meter.js') }}" >
  var fm = new FluidMeter();
    fm.init({
      targetContainer: document.getElementById("fluid-meter"),
      fillPercentage: 0,
      options: {
        fontFamily: "Raleway",
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 19,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa",
        foregroundFluidLayer: {
          fillStyle: "purple",
          angularSpeed: 100,
          maxAmplitude: 12,
          frequency: 30,
          horizontalSpeed: -150
        },
        backgroundFluidLayer: {
          fillStyle: "pink",
          angularSpeed: 100,
          maxAmplitude: 9,
          frequency: 30,
          horizontalSpeed: 150
        }
      }
    });

    var fm2 = new FluidMeter();
    fm2.init({
      targetContainer: document.getElementById("fluid-meter-2"),
      fillPercentage: 0,
      options: {
        fontFamily: "Oxygen",
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 10,
        backgroundColor: "#262626",
        foregroundColor: "#4C4A4A",
        foregroundFluidLayer: {
          fillStyle: "#55DD10",
          angularSpeed: 90,
          maxAmplitude: 11,
          frequency: 25,
          horizontalSpeed: -200
        },
        backgroundFluidLayer: {
          fillStyle: "#CDDD10",
          angularSpeed: 100,
          maxAmplitude: 13,
          frequency: 23,
          horizontalSpeed: 230
        }
      }
    });

    var fm3 = new FluidMeter();
    fm3.init({
      targetContainer: document.getElementById("fluid-meter-3"),
      fillPercentage: 30,
      options: {
        fontFamily: "Raleway",
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 19,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa",
        foregroundFluidLayer: {
          fillStyle: "purple",
          angularSpeed: 100,
          maxAmplitude: 12,
          frequency: 30,
          horizontalSpeed: -150
        },
        backgroundFluidLayer: {
          fillStyle: "blue",
          angularSpeed: 100,
          maxAmplitude: 9,
          frequency: 30,
          horizontalSpeed: 150
        }
      }
    });

    var fm4 = new FluidMeter();
    fm4.init({
      targetContainer: document.getElementById("fluid-meter-4"),
      fillPercentage: 30,
      options: {
        fontFamily: "Raleway",
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 19,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa",
        foregroundFluidLayer: {
          fillStyle: "purple",
          angularSpeed: 100,
          maxAmplitude: 12,
          frequency: 30,
          horizontalSpeed: -150
        },
        backgroundFluidLayer: {
          fillStyle: "pink",
          angularSpeed: 100,
          maxAmplitude: 9,
          frequency: 30,
          horizontalSpeed: 150
        }
      }
    });

var fm5 = new FluidMeter();
    fm5.init({
      targetContainer: document.getElementById("fluid-meter-5"),
      fillPercentage: 30,
      options: {
        fontFamily: "Raleway",
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 19,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa",
        foregroundFluidLayer: {
          fillStyle: "purple",
          angularSpeed: 100,
          maxAmplitude: 12,
          frequency: 30,
          horizontalSpeed: -150
        },
        backgroundFluidLayer: {
          fillStyle: "pink",
          angularSpeed: 100,
          maxAmplitude: 9,
          frequency: 30,
          horizontalSpeed: 150
        }
      }
    });

var fm6 = new FluidMeter();
    fm6.init({
      targetContainer: document.getElementById("fluid-meter-6"),
      fillPercentage: 30,
      options: {
        fontFamily: "Raleway",
        drawPercentageSign: true,
        drawBubbles: true,
        size: 300,
        borderWidth: 19,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa",
        foregroundFluidLayer: {
          fillStyle: "purple",
          angularSpeed: 100,
          maxAmplitude: 12,
          frequency: 30,
          horizontalSpeed: -150
        },
        backgroundFluidLayer: {
          fillStyle: "pink",
          angularSpeed: 100,
          maxAmplitude: 9,
          frequency: 30,
          horizontalSpeed: 150
        }
      }
    });
    
    const source2 = new EventSource("/gauge");

        source2.onmessage = function (event) {
            const data = JSON.parse(event.data);

            
            
          const val1 = (data.value/ 600)*100;
           
          fm2.setPercentage(val1)
          
     
    };
    const source3 = new EventSource("/gauge");

        source3.onmessage = function (event) {
            const data2 = JSON.parse(event.data);
          const val2 = (data2.value/600)*100;
          fm.setPercentage(val2);
     
    };
</script>

<!--suppress JSUnresolvedLibraryURL -->
 src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"
<!--suppress JSUnresolvedLibraryURL -->
src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
<!--suppress JSUnresolvedLibraryURL -->
src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"

    $(document).ready(function () {
        const config = {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: "sensor Data",
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: [],
                    fill: false,
                }],
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Creating Real-Time'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        const context = document.getElementById('canvas').getContext('2d');

        const lineChart = new Chart(context, config);

        const source = new EventSource("/chart-data");

        source.onmessage = function (event) {
            const data = JSON.parse(event.data);
            
            if (config.data.labels.length === 20) {
                config.data.labels.shift();
                config.data.datasets[0].data.shift();
            }
            config.data.labels.push(data.time);
            config.data.datasets[0].data.push(data.value);
            lineChart.update();
        }
    });

    

