var ShowStackedChart = function(control,chartData,chartTicks)
{
		if (typeof charts == 'undefined') 
		return;

	charts.chart_stacked_bars = 
	{
		// chart data
		data: null,

		// will hold the chart object
		plot: null,

		// chart options
		options: 
		{
			grid: {
				show: true,
			    aboveData: false,
			    color: "#3f3f3f" ,
			    labelMargin: 5,
			    axisMargin: 0, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 5 ,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: true,
			    mouseActiveRadius: 20,
			    backgroundColor : { }
			},
	        series: {
	        	grow: {active:false},
	        	stack: 0,
                lines: { show: false, fill: true, steps: false },
                bars: { show: true, barWidth: 0.5, fill:1}
		    },
	        xaxis: {ticks:chartTicks},
	        legend: { position: "ne", backgroundColor: null, backgroundOpacity: 0 },
	        colors: [],
	        shadowSize:1,
	        tooltip: true,
			tooltipOpts: {
				content: "%s : %y.0",
				shifts: {
					x: -30,
					y: -50
				},
				defaultTheme: false
			}
		},
		
		placeholder: control,
		
		// initialize
		init: function()
		{
			// apply styling
			charts.utility.applyStyle(this);
			
			var d1 = [];
		    for (var i = 1; i <= 10; i += 1)
		        d1.push([i, parseInt(Math.random() * 30)]);
		 
		    var d2 = [];
		    for (var i = 1; i <= 10; i += 1)
		        d2.push([i, parseInt(Math.random() * 20)]);
		 
		    var d3 = [];
		    for (var i = 1; i <= 10; i += 1)
		        d3.push([i, parseInt(Math.random() * 20)]);
		 
		    this.data = new Array();
		 
		    this.data.push({
		     	label: "increase",
		        data: chartData.increase
		    });
		    this.data.push({
		    	label: "decrease",
		        data: chartData.decrease
		    });
		    this.data.push({
		    	label: "current",
		        data: chartData.currentValue
		    });

		    this.plot = $.plot($(this.placeholder), this.data, this.options);
		}
	}

	setTimeout(function(){charts.chart_stacked_bars.init()}, 100);
}
$(window).on('load', function(){

	var chartData = {
		increase:[
		    [1, 0], [2, 150], [3, 0],[4, 0], [5, 123], [6, 0],
		    [7, 0], [8, 0], [9, 54],[10, 0], [11, 0], [12, 0]
		],
		decrease:[
		    [1, 0], [2, 0], [3, 0],[4, 0], [5, 0], [6, 0],
		    [7, 0], [8, 0], [9, 0],[10, 0], [11, 0], [12, 0]
		],
		currentValue:[
		    [1, 0], [2, 23], [3, 234],[4, 113], [5, 343], [6, 343],
		    [7, 530], [8, 490], [9, 230],[10, 580], [11, 124], [12, 423]
		],
};

	var chartTicks = [[1, ""], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"], [6, "Jun"],
    				  [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"]]

	ShowStackedChart("#chart_stacked_bars",chartData,chartTicks);
	// setTimeout(function(){
	// 	charts.chart_simple.init();
	// }, 100);
});