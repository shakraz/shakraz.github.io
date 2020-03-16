const margin={top:20,bottom:20, left:40,right:5},
        width=700,
        height=550
  
 
  const svg = d3.select("#chart")
  svg.attr("viewBox", `0 0 ${width+margin.left+margin.right} ${height+margin.top+margin.bottom}`)
     .attr('transform','translate('+margin.top+','+margin.left+')')

  var thresholds = [-8000,-5000,0,5000,8000];
  var legend_text = ["выбыло 8К+","выбыло 5-8К","выбыло 0-5К","прибыло 0-5К","прибыло 5-8К","прибыло 8К+"];
  var legend_color=["#d73027","#fc8d59","#fee08b",
                    "#d9ef8b","#91cf60","#1a9850"];
  
  var valueColor=d3.scaleThreshold()
                   .domain(thresholds)
                   .range(legend_color)
  var gridSize=35;

var dataset=d3.csvParse("data/heatmap.csv",d=>{
  d.total=+d.total;
  d.region_id=+d.region_id;
  d.occupation_id=+d.occupation_id;
  d.occupation_id=d.occupation_id==9?8:d.occupation_id;
return d
})
console.log(dataset)



dataset = dataset.filter(d=>d.occupation!="Не указавшие")

  var cards = svg.append("g").attr("transform", "translate(100,150)").selectAll("rect")
                 .data(dataset).enter()
                 .append("g")
                 .attr("transform",(d,i)=> "translate("+(gridSize*d.region_id+2*d.region_id)+","+(gridSize*d.occupation_id+2*d.occupation_id)+")")
  
  var rects=cards
                .append("rect")
                .attr("width", gridSize).attr("height",gridSize)
                .attr('fill', d=>valueColor(d.total)).text(d=>d.total)
                .attr("rx","3px")
  
  var values=cards.append("text")
                   .attr('text-anchor','middle')
                   .attr("class","values")
                   .attr('x',gridSize/2)
                   .attr("y", gridSize/2)
                   .style("font-size","8px")
                   .text(d=>d.total)
  
  svg.append("g")
     .attr("transform","translate(20, 210)")
     .selectAll("text")
     .data(d3.map(dataset, function(d){return d.occupation;}).keys())
     .enter()
     .append("text")
     .attr("class","names")
     .attr("y",(d,i)=>37*i)
     .text(d=>d)
 
  svg.append("g")
     .attr("transform","translate(160, 170)")
     .selectAll("text")
     .data(d3.map(dataset, function(d){return d.region;}).keys())
     .enter()
     .append("text")
     .attr("class","names")
     .attr("transform","rotate(270)")
     .attr("class","names")
     .attr("y",(d,i)=>37*i)
     .text(d=>d)

  var legend=svg.append("g").attr("class","legend").attr("transform","translate(327, 500)")
  
  legend.selectAll("rect").data(legend_text).enter()
                 .append("rect").attr("width", 65)
                 .attr("height",20)
                 .attr("x",(d,i)=>67*i)
                 .attr('fill', (d,i)=>legend_color[i]);
  
  legend.selectAll("text").data(legend_text).enter()
                 .append("text")
                 .attr("x",(d,i)=>67*i)
                 .attr("y",30)
                 .text(d=>d);