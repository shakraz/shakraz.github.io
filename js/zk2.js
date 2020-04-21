

var scatter = new dc.BubbleChart("#chart");
var rowchart =  new dc.RowChart("#filter1");
var rowchart2 =  new dc.RowChart("#filter2");
 const numberFormat = d3.format('.2f');

var margin={left:40, right:20, top:20, bottom:20};
var width=900;
var height=400;
var innerWidth = width-margin.left-margin.right;
var innerHeight = height-margin.top-margin.bottom;

d3.csv("https://shakraz.github.io/data/korter_final.csv").then(function(data){
data.forEach(d=>{
  d.building_rate=+d.building_rate;
  d.flat_rate=+d.flat_rate;
  d.price = +d.price;
})


var ndx = crossfilter(data);
const all = ndx.groupAll();
  var dim2 = ndx.dimension(d=>[d.district,d.name,d.developer])
  
  var group2=dim2.group().reduce(
      (p,v)=>{
        p.building_rate+=v.building_rate;
        p.flat_rate+=v.flat_rate;
        p.price+=v.price;
        return p
      },
      (p,v)=>{
         p.building_rate-=v.building_rate;
        p.flat_rate-=v.flat_rate;
        p.price-=v.price;
        return p
      },
       ()=>({price: 0,building_rate: 0,flat_rate: 0})
  );


var districtDim = ndx.dimension(d=>[d.district])
var classDim = ndx.dimension(d=>d.class_name)
var developerDim = ndx.dimension(d=>d.developer)

var priceScale=d3.scaleLinear().domain(d3.extent(data,d=>d.price)).range([1,5]);
var x=d3.scaleLinear().domain([0,2.5]).range([0,innerWidth]);
var y=d3.scaleLinear().domain([0,5]).range([innerHeight, 0])

var colorScale = d3.scaleOrdinal().domain(d3.map(data,d=>d.district).keys())
        .range(["#a6cee3",
        "#1f78b4",
        "#b2df8a",
        "#33a02c",
        "#fb9a99",
        "#e31a1c",
        "#fdbf6f",
        "#ff7f00",
        "#cab2d6"])

var nameDim = ndx.dimension(function(d){return d.developer+ ' '+d.name;})


var searchText = new dc.TextFilterWidget("#search").placeHolder('Застройщик/ЖК');
        
 searchText.dimension(nameDim);

scatter
    .width(900)
    .height(500)
    .useViewBoxResizing(true)
    .x(x)
    .y(y)
    .yAxisLabel("Индекс дома")
    .xAxisLabel("Индекс квартир")
    .keyAccessor(function (p) {
      return p.value.flat_rate;
   })
   
   .valueAccessor(function (p) {
      return p.value.building_rate
   })
   .radiusValueAccessor(function (p) {
      return isNaN(priceScale(p.value.price))?2:priceScale(p.value.price) 
   })
    .colors(colorScale)
    .colorAccessor(function(p) {return p.key[0]})
    .dimension(dim2)
    .group(group2)
    .renderHorizontalGridLines(true)
    .renderVerticalGridLines(true)
    .renderTitle(true)
    .title(p => [
            `Застройщик: ${p.key[2]}`,
            `Индекс дома: ${numberFormat(p.value.building_rate)}`,
            `Индекс квартиры: ${numberFormat(p.value.flat_rate)}`,
            `Средний индекс: ${numberFormat(p.value.building_rate+p.value.flat_rate)/2}`,
            `Цена: ${p.value.price}`
        ].join('\n'))
    .renderLabel(true)
    .label(d=>d.key[1])

  .on('pretransition', function(chart) {
        var x_vert = d3.mean(data, d=>d.flat_rate);
        var y_hor = d3.mean(data, d=>d.building_rate);
        
        var extra_data = [
            {x: chart.x()(x_vert), y: 0},
            {x: chart.x()(x_vert), y: chart.effectiveHeight()}
        ];
        var extra_data2 = [
            {y: chart.y()(y_hor), x: 0},
            {x: chart.effectiveWidth(), y: chart.y()(y_hor)}
        ];
        var line = d3.line()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
            .curve(d3.curveLinear);

       var line2 = d3.line()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
            .curve(d3.curveLinear);
        var chartBody = chart.select('g');
        var path = chartBody.selectAll('path.extra').data([extra_data]);
        path = path.enter()
                .append('path')
                .attr('class', 'oeExtra')
                .attr('stroke', 'red')
                .attr('id', 'oeLine')
                .attr("stroke-width", 1)
                .style("stroke-dasharray", ("10,3"))
            .merge(path);
        path.attr('d', line)


        var chartBody2 = chart.select('g');
        var path2 = chartBody2.selectAll('path.extra').data([extra_data2]);
        path2 = path2.enter()
                .append('path')
                .attr('class', 'oeExtra')
                .attr('stroke', 'red')
                .attr('id', 'oeLine')
                .attr("stroke-width", 1)
                .style("stroke-dasharray", ("10,3"))
            .merge(path2);
        path2.attr('d', line2);


      

    });

rowchart
        .width(400)
        .height(300)
    .useViewBoxResizing(true)
        .x(d3.scaleLinear().domain([0,100]).range([0,200]))
        .elasticX(true)

        .rowsCap(8)
        .title(function(d){return d.value;})
        .colors(colorScale)
        .dimension(districtDim)
        .group(districtDim.group())

rowchart2
        .width(400)
        .height(300)
    .useViewBoxResizing(true)
        .x(d3.scaleLinear().domain([0,100]).range([0,200]))
        .elasticX(true)
        .rowsCap(8)
        .title(function(d){return d.value;})
        .dimension(classDim)
        .group(classDim.group())





dc.renderAll(); 

})