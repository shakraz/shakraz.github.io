var margin={left:40, right:10, top:20, bottom:40};
var width=700;
var height=400;
var innerWidth = width-margin.right-margin.left;
var innerHeight = height-margin.bottom-margin.top;

d3.csv("/data/korter_final.csv").then(function(data){

console.log(data)

data.forEach(d=>{
	d.building_rate=+d.building_rate;
	d.flat_rate=+d.flat_rate;
	d.price = +d.price;
})

var svg = d3.select("#chart").append("svg")
            .attr("viewBox","0 0 700 400")
            .append("g")



var priceScale=d3.scaleLinear().domain(d3.extent(data,d=>d.price)).range([3,10]);
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


var x=d3.scaleLinear().domain([0,d3.max(data,d=>d.flat_rate)]).range([0,innerWidth]);
var y=d3.scaleLinear().domain([0,d3.max(data,d=>d.building_rate)]).range([innerHeight, 0])

var xAxis = d3.axisBottom(x)
var yAxis = d3.axisLeft(y)

 var tooltip = d3.select(".tooltip")

var g = svg.append("g")
       .attr("transform","translate("+margin.left+","+margin.top+")")

var names = d3.map(data, d=>d.district).keys();

d3.select("#select1").selectAll("option")
  .data(names)
  .enter()
  .append("option")
  .text(d=>d)
  .attr("value",d=>d)




g.append("g")
   .attr("transform","translate(0,"+innerHeight+")")
   .call(xAxis)

g.append("g")
      .call(yAxis)

 g.append("line")
      .attr("x1",x(d3.mean(data, d=>d.flat_rate)))
      .attr("x2",x(d3.mean(data, d=>d.flat_rate)))
      .attr("y1",0)
      .attr("y2", innerHeight)
      .attr("stroke","red")
      .attr("opacity",0.6)


   g.append("line")
      .attr("x1",0)
      .attr("x2",innerWidth)
      .attr("y1",y(d3.mean(data, d=>d.building_rate)))
      .attr("y2", y(d3.mean(data, d=>d.building_rate)))
      .attr("stroke","red")
      .attr("opacity",0.4)

    // create the d3-brush generator
    const brush = d3.brush()
      .extent([[0, 0], [innerWidth, innerHeight]])
      .on("brush", highlightBrushedCircles).on("end", displayTable);
    // attach the brush to the chart
    const gBrush = g.append('g')
      .attr('class', 'brush')
      .call(brush);

    g.append("text")
     .attr("x",innerWidth/2)
     .attr("y",innerHeight+30)
      .style("text-anchor", "middle")
      .attr("class","axis")
     .text("Индекс квартир")


     g.append("text")
     .attr("transform", "rotate(-90)")
     .style("text-anchor", "middle")
     .attr("x",-150)
     .attr("class","axis")
     .attr("y",-30)
     .text("Индекс дома")

var g_circle = g.append("g")

 var houses = g_circle
               .selectAll("circle")
               

updateChart();

  function updateChart(value){
      var filtered_data =  value!=undefined?data.filter(d=>d.district==value):data;
      d3.selectAll("circle").remove()
      houses = g_circle.selectAll("circle").data(filtered_data);
      
 
      houses.enter().append("circle")
             .attr("cx",d=>x(d.flat_rate))
             .attr("cy",d=>y(d.building_rate))
             .attr("r",d=>isNaN(priceScale(d.price))?2:priceScale(d.price) )
             .attr("fill",d=>isNaN(d.price)?"gray":colorScale(d.district))
             .attr("class", "non_brushed")
              .on("mouseover",function(d){
                             
                             tooltip.style("display","inline")
                                    .attr("opacity",1)
                                    .style("left", (d3.event.pageX) + "px") 
                                    .style("top", (d3.event.pageY) + "px")
                                   
                            tooltip
                            .select("a")
                            .attr("href",d.house_url)
                            .html(d.name)    
                                
                                
                        })
        houses.exit().remove();
     


}



   function highlightBrushedCircles() {

                if (d3.event.selection != null) {

                    // revert circles to initial style
                    var houses = d3.selectAll("circle")
                    houses.attr("class", "non_brushed");

                    var brush_coords = d3.brushSelection(this);

                    // style brushed circles
                    houses.filter(function (){

                               var cx = d3.select(this).attr("cx"),
                                   cy = d3.select(this).attr("cy");

                               return isBrushed(brush_coords, cx, cy);
                           })
                           .attr("class", "brushed");
                }
            }

   function isBrushed(brush_coords, cx, cy) {

             var x0 = brush_coords[0][0],
                 x1 = brush_coords[1][0],
                 y0 = brush_coords[0][1],
                 y1 = brush_coords[1][1];

            return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1;
        }

   function displayTable() {

                // disregard brushes w/o selections  
                // ref: http://bl.ocks.org/mbostock/6232537
                if (!d3.event.selection) return;

                // programmed clearing of brush after mouse-up
                // ref: https://github.com/d3/d3-brush/issues/10
                d3.select(this).call(brush.move, null);

                var d_brushed =  d3.selectAll(".brushed").data();

                // populate table if one or more elements is brushed
                if (d_brushed.length > 0) {
                    clearTableRows();
                    d_brushed.forEach(d_row => populateTableRow(d_row))
                } else {
                    clearTableRows();
                }
            }

function clearTableRows() {

            hideTableColNames();
            d3.selectAll(".row_data").remove();
        }
    function populateTableRow(d_row) {

            showTableColNames();

            var d_row_filter = [d_row.district, 
                                d_row.name, 
                                d_row.price,d_row.class_name, d_row.otdelka_name,
                                d_row.parking_name,
                                (d_row.building_rate+d_row.flat_rate)/2];

            d3.select("table")
              .append("tr")
              .attr("class", "row_data")
              .selectAll("td")
              .data(d_row_filter)
              .enter()
              .append("td")
              .attr("align", (d, i) => i == 0 ? "left" : "right")
              .text(d => d);
        }

  function hideTableColNames() {
            d3.select("table").style("visibility", "hidden");
        }

        function showTableColNames() {
            d3.select("table").style("visibility", "visible");
        }
d3.select("#select1").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        updateChart(selectedOption)
    })


  

})