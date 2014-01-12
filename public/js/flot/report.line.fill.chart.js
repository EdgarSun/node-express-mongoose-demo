var ShowLineFillChart = function(control,chartData,chartTicks)
{
	
	if (typeof charts == 'undefined') 
		return;

	charts.chart_lines_fill_nopoints = 
	{
		// will hold the chart object
		plot: null,

		// chart options
		options: 
		{
			grid: {
				show: true,
			    aboveData: true,
			    color: "#3f3f3f",
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
	            lines: {
            		show: true,
            		fill: false,
            		lineWidth: 2,
            		steps: false
            	},
	            points: {show:true}
	        },
	        legend: { position: "nw", backgroundColor: null, backgroundOpacity: 0 },
	        yaxis: { min: 0 },
	        xaxis: {ticks:chartTicks},
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

		placeholder: "#chart_lines_fill_nopoints",
		
		// initialize
		init: function()
		{
			// apply styling
			charts.utility.applyStyle(this);
			
			// // generate some data
			// this.data.d1 = [[1, 3+charts.utility.randNum()], [2, 6+charts.utility.randNum()], [3, 9+charts.utility.randNum()], [4, 12+charts.utility.randNum()],[5, 15+charts.utility.randNum()],[6, 18+charts.utility.randNum()],[7, 21+charts.utility.randNum()],[8, 15+charts.utility.randNum()],[9, 18+charts.utility.randNum()],[10, 21+charts.utility.randNum()],[11, 24+charts.utility.randNum()],[12, 27+charts.utility.randNum()],[13, 30+charts.utility.randNum()],[14, 33+charts.utility.randNum()],[15, 24+charts.utility.randNum()],[16, 27+charts.utility.randNum()],[17, 30+charts.utility.randNum()],[18, 33+charts.utility.randNum()],[19, 36+charts.utility.randNum()],[20, 39+charts.utility.randNum()],[21, 42+charts.utility.randNum()],[22, 45+charts.utility.randNum()],[23, 36+charts.utility.randNum()],[24, 39+charts.utility.randNum()],[25, 42+charts.utility.randNum()],[26, 45+charts.utility.randNum()],[27,38+charts.utility.randNum()],[28, 51+charts.utility.randNum()],[29, 55+charts.utility.randNum()], [30, 60+charts.utility.randNum()]];
			// this.data.d2 = [[1, charts.utility.randNum()-5], [2, charts.utility.randNum()-4], [3, charts.utility.randNum()-4], [4, charts.utility.randNum()],[5, 4+charts.utility.randNum()],[6, 4+charts.utility.randNum()],[7, 5+charts.utility.randNum()],[8, 5+charts.utility.randNum()],[9, 6+charts.utility.randNum()],[10, 6+charts.utility.randNum()],[11, 6+charts.utility.randNum()],[12, 2+charts.utility.randNum()],[13, 3+charts.utility.randNum()],[14, 4+charts.utility.randNum()],[15, 4+charts.utility.randNum()],[16, 4+charts.utility.randNum()],[17, 5+charts.utility.randNum()],[18, 5+charts.utility.randNum()],[19, 2+charts.utility.randNum()],[20, 2+charts.utility.randNum()],[21, 3+charts.utility.randNum()],[22, 3+charts.utility.randNum()],[23, 3+charts.utility.randNum()],[24, 2+charts.utility.randNum()],[25, 4+charts.utility.randNum()],[26, 4+charts.utility.randNum()],[27,5+charts.utility.randNum()],[28, 2+charts.utility.randNum()],[29, 2+charts.utility.randNum()], [30, 3+charts.utility.randNum()]];
			
			// make chart
			this.plot = $.plot(
				this.placeholder, 
				[{
         			label: "material", 
         			data: chartData.material,
         			lines: {fillColor: "rgba(0,0,0,0.01)"},
         			points: {fillColor: "#88bbc8"}
         		}, 
         		{	
         			label: "xmodel", 
         			data: chartData.xmodel,
         			lines: {fillColor: "rgba(0,0,0,0.1)"},
         			points: {fillColor: "#ed7a53"}
         		}], 
         		this.options);
		}
	};

	setTimeout(function(){charts.chart_lines_fill_nopoints.init()}, 100);
}
$(window).on('load', function(){

	var chartData = {
		material:[
		    [1, 1530], [2, 6580], [3, 1980],[4, 6630], [5, 6633], [6, 6634],
		    [7, 3530], [8, 7490], [9, 5230],[10, 2580], [11, 6880], [12, 3640]
		],
		xmodel:[
		    [1, 11530], [2, 26580], [3, 31980],[4, 16630], [5, 38010], [6, 70800],
		    [7, 23530], [8, 27490], [9, 15230],[10, 22580], [11, 46880], [12, 23640]
		],
};

	var chartTicks = [[1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"], [6, "Jun"],
    				  [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"]]

	ShowLineFillChart("#chart_lines_fill_nopoints",chartData,chartTicks);
	// setTimeout(function(){
	// 	charts.chart_simple.init();
	// }, 100);
});