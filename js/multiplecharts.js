import {spendings} from '../data/spendings.js';

var full_data = prepareData(spendings)

drawCharts()



function prepareData(){

   
  
  spendings.forEach(d=>{
    d.periods.forEach(t=>{
      t.value= +t.value
      t.date = d3.timeParse("%d.%m.%Y")(t.date)
      t.year = d3.timeFormat("%Y")(t.date)
      t.year = +t.year
    })
  })

  var spendings = spendings.filter(d=>d.termNames[1]=="Всего" && d.termNames[0]!="ТУРКЕСТАНСКАЯ ОБЛАСТЬ" && d.termNames[0]!="Г.ШЫМКЕНТ")
  



  flat = []
  spendings.forEach(function(region) {
    region.periods.forEach(function(period) {
      flat.push({
        region: region.termNames[0],
        category: region.termNames[2],
        value: period.value,
        year: period.year
      });
    });
  });

  flat = flat.sort((a,b)=> d3.ascending(a.year, b.year))

  total = d3.nest()
            .key(d=>d.region)
            .key(d=>d.year)
            .rollup(d=>d3.sum(d,t=>t.value))
            .entries(flat)
  total_flat = []

  total.forEach(r=>{

    r.values.forEach(v=>{

      total_flat.push({
        region:r.key,
        category:"Всего",
        value:v.value,
        year:v.key
      })

    })
  })

  total_flat.forEach(d=>{
    d.year = +d.year
  })

  flat=total_flat.concat(flat) //concat aggregated values by category
  return flat
}







function drawCharts(){

  flat =full_data
 d3.select("#category")
    .selectAll("option")
    .data(d3.map(flat,d=>d.category).keys())
    .enter()
    .append("option")
    .property("selected",d=>d=="Всего")
    .text(d=>d)
  

  var margin = {left:35, right:0, top:20, bottom:20}
  var outer_width = 250, outer_height=150;
  var width  = outer_width-margin.left-margin.right;
  var   height = outer_height-margin.top-margin.bottom;
  

  var x = d3.scaleLinear().range([0,width])
  var y = d3.scaleLinear().range([height,0])
  var regions = d3.map(flat,d=>d.region).keys()
  var svg =d3.select("#charts")
                    .selectAll("svg")
                    .data(regions)
                    .enter()
                    .append("svg")
                    .attr("width",outer_width)
                    .attr("height",outer_height)
                    .append("g")
                    .classed("mini_chart",true)
                    .attr("transform","translate("+margin.left+","+margin.top+")")
  
  svg.append("path").attr("class","line")

  svg.append("path").attr("class","area")
  svg.append("text").attr("class","title")


 var xAxis=svg.append("g")
               .attr("class","x-axis")
               .attr("transform","translate(0,"+height+")")
 

 var yAxis =  svg.append("g")
                 .attr("class","y-axis")

  update(d3.select("#category").property("value"))

  function update(input){

       flat = full_data.filter(d=>d.category==input)
       flat_nested =  d3.nest()
                     .key(d=>d.region+"|"+d.category)
                     .entries(flat)

        max_value=d3.max(flat,d=>d.value)
        y.domain([0,max_value])
        ex=d3.extent(flat,d=>d.year)
        x.domain(ex)

        svg.selectAll(".x-axis")
           .transition().duration(600)
           .attr("transform","translate(0,"+height+")")
           .call(d3.axisBottom(x))

        svg.selectAll(".y-axis")
           .transition().duration(600)
           .call(d3.axisLeft(y)
                      .tickFormat(d => d + "%")
                      .ticks(5))

        var line = d3.line().curve(d3.curveBasis)
                      .x(d=>x(d.year))
                      .y(d=>y(d.value))

         var area = d3.area().curve(d3.curveBasis)
                      .x(d=>x(d.year))
                      .y1(d=>y(d.value))
                      .y0(y(0))

      
        d3.selectAll(".mini_chart")
        .data(flat_nested)
        .each(function(d,i){
           
        var lines=  d3.select(this).select("path.line").data([d])
         lines.exit().remove()


        lines.enter().append("path").merge(lines)
             .transition().duration(700)
             .attr("class","line")
             .attr("d",d=>line(d.values)) 



        var areas = d3.select(this).select("path.area").data([d])
        areas.exit().remove()

          areas.enter().append("path").merge(areas)
             .transition().duration(700)
             .attr("class","area")
             .attr("d",t=>area(t.values)) 


        var label = d3.select(this).select(".title").data([d])

        label.exit().remove()

        label.enter().append("text")
             .merge(label)
             .attr("class","title")
             .attr("text-anchor", "start")
             .attr("y", -5)
             .attr("x", 0)
             .text(d=>d.key.split("|")[0])
             .attr("style","font-size:10") 
      }
  
  )


 }

  var bisectDate = d3.bisector(function(d) { return d.year; }).left

 //tooltip for all charts
 var tooltip = svg.append("g")
                  .attr("id",d=>d.key)
                  .attr("class","tooltip")
                  .style("display","none")
  
  
tooltip.append("circle")
            .attr("r", 5);

tooltip.append("rect")
       .attr("class", "popup")
       .attr("width", 80)
       .attr("height", 50)
       .attr("x", 10)
       .attr("y", -22)
       .attr("rx", 4)
       .attr("ry", 4);

tooltip.append("text")
       .attr("class", "tooltip-date")
       .attr("x", 18)
       .attr("y", -2);

tooltip.append("text")
       .attr("x", 18)
       .attr("y", 18)
       .text("Доля:");

tooltip.append("text")
       .attr("class", "tooltip-likes")
       .attr("x", 60)
       .attr("y", 18)



  svg.append("rect")
    .attr("id",d=>d.key.split("|")[0])
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height)
    .on("mouseover", function() { tooltip.style("display", null); })
    .on("mouseout", function() { tooltip.style("display", "none"); })
    .on("mousemove", mousemove);





function mousemove() {
            id = d3.select(this).attr("id")
            current_category=d3.select("#category").property("value")
            data = full_data.filter(d=>d.region==id && d.category==current_category)
          
            var x0 = x.invert(d3.mouse(this)[0]),
                i = bisectDate(data, x0, 1),
                d0 = data[i - 1],
                d1 = data[i],
                d = x0 - d0.year > d1.year - x0 ? d1 : d0

            updateTooltips(d)
        }

function updateTooltips(d){

  current_category=d3.select("#category").property("value")
  var tooltips= d3.selectAll(".tooltip")
                  .attr("transform",c=>{
                  var val =full_data.filter(t=>t.region==c.key.split("|")[0] 
                                            && t.year==d.year 
                                            && t.category==current_category)[0]

                   
                   return  "translate(" + x(d.year) + "," + y(val.value) + ")"
                                         } )
                  
    
    tooltips.select(".tooltip-date").text(d.year)


    tooltips.select(".tooltip-likes").text(c=>{

  current_category=d3.select("#category").property("value")
       var val =full_data.filter(t=>t.region==c.key.split("|")[0] 
                                            && t.year==d.year 
                                            && t.category==current_category)[0]
       
      return d3.format(".0%")(val.value/100)
    }) 
    
    

}


  var select = d3.select("#category")
    .on("change", function() {
      update(this.value)
    })


}