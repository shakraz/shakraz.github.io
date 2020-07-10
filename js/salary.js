var rowchart =new dc.RowChart("#chart")
var piechart =new dc.RowChart("#quarter")
var regionchart =new dc.RowChart("#region")


var parseDate = d3.timeParse("%d.%m.%Y");
var formatDate=d3.timeFormat("%B");
var formatQuarter=d3.timeFormat("%q");





d3.csv("/data/enbek.csv").then(function(data){


data.forEach(d=>{
	d.salary=+d.salary
	d.published_date = parseDate(d.date)
	d.published_month = formatDate(d.published_date)
	d.published_quarter = `Q${formatQuarter(d.published_date)}`
})

var ndx = crossfilter(data);
var descriptionDim = ndx.dimension(d=>d.description_short);
var descriptionGroup = descriptionDim.group();

var quarterDim = ndx.dimension(d=>d.experience_text);
var quarterGroup = quarterDim.group();

var regionDim = ndx.dimension(d=>d.region);
var regionGroup = regionDim.group();


console.log(data)


rowchart
	.width(500)
	.height(300)
	.dimension(descriptionDim)
	.group(descriptionGroup)
	.useViewBoxResizing(true)
	.elasticX(true)
	.rowsCap(10)


piechart
	.dimension(quarterDim)
	.group(quarterGroup)
	.useViewBoxResizing(true)
	.elasticX(true)
	.rowsCap(10)


regionchart
	.dimension(regionDim)
	.group(regionGroup)
	.useViewBoxResizing(true)
	.elasticX(true)

dc.renderAll();

});