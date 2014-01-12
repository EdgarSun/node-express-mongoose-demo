var ShowLineChart = function(control,chartData,label,chartTicks)
{
	if (typeof charts == 'undefined') 

		return;
	charts.chart_simple = 
	{
		// will hold the chart object
		plot: null,

		// chart options
		options: 
		{
			colors: [ primaryColor, "#7c7c7c" ],
			grid: {
				color: "#dedede",
			    borderWidth: 1,
			    borderColor: "transparent",
			    clickable: true, 
			    hoverable: true
			},
	        series: {
	        	grow: {active: false},
	            lines: {
            		show: true,
            		fill: false,
            		lineWidth: 4,
            		steps: false
            	},
	            points: {
	            	show:true,
	            	radius: 5,
	            	symbol: "circle",
	            	fill: true,
	            	borderColor: "#fff"
	            }
	        },
	        legend: { position: "se", backgroundColor: null, backgroundOpacity: 0, noColumns: 2 },
	        shadowSize:0,
	        yaxis: { ticks:3 },
	        xaxis: {  tickColor: 'transparent',ticks:chartTicks },
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "Nums : %y.3",
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

			this.plot = $.plot(
				$(this.placeholder),
	           	[{
	    			label: "material", 
	    			data: chartData.material,
	    			lines: {fillColor: "#DA4C4C"},
	    			points: {fillColor: "#fff"}
	    		},
	    		{
	    			label: "texture", 
	    			data: chartData.texture,
	    			lines: {fillColor: "#444"},
	    			points: {fillColor: "#fff"}
	    		},
	    		{
	    			label: "xmodel", 
	    			data: chartData.xmodel,
	    			lines: {fillColor: "#D4624C"},
	    			points: {fillColor: "#fff"}
	    		},
	    		{
	    			label: "xmodel_export", 
	    			data: chartData.xmodel_export,
	    			lines: {fillColor: "#222"},
	    			points: {fillColor: "#fff"}
	    		}], this.options);
		}
	}

	setTimeout(function(){charts.chart_simple.init()}, 100);
}
$(window).on('load', function(){


	var chartLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var chart_data = {
		material:[
		    [1, 1530], [2, 6580], [3, 1980],[4, 6630], [5, 6633], [6, 6634],
		    [7, 3530], [8, 7490], [9, 5230],[10, 2580], [11, 6880], [12, 3640]
		],
		texture:[
		    [1, 11530], [2, 26580], [3, 31980],[4, 16630], [5, 38010], [6, 70800],
		    [7, 23530], [8, 27490], [9, 15230],[10, 22580], [11, 46880], [12, 23640]
		],
		xmodel:[
		    [1, 530], [2, 580], [3, 980],[4, 630], [5, 010], [6, 800],
		    [7, 530], [8, 490], [9, 230],[10, 580], [11, 880], [12, 640]
		],
		xmodel_export:[
		    [1, 31530], [2, 86580], [3, 11980],[4, 36630], [5, 68010], [6, 90800],
		    [7, 23530], [8, 87490], [9, 25230],[10, 42580], [11, 26880], [12, 63640]
		]
};

	var chartTicks = [[1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"], [6, "Jun"],
    				  [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"]]

	ShowLineChart("#chart_counts",chart_data,chartLabel,chartTicks);
	// setTimeout(function(){
	// 	charts.chart_simple.init();
	// }, 100);
});