var margin={left:30,top:30,right:30, bottom:30};
  var width=850,height=300;
  

  var data = [{title:"Учеба", start:"2004-Sep", end:"2008-Jul"},
              {title:"Работа в различных структурах",start:"2008-Aug", end:"2012-Mar"},
              {title:"Астана",start:"2012-Apr", end:"2013-May"},
              {title:"Москва",start:"2013-Jun",end:"2015-Feb"},
              {title:"Минск",start:"2015-Mar",end:"2016-Oct"},
              {title:"Краков",start:"2016-Nov",end:"2018-Jun"},
             // {title:"Гамбург",start:"2018-Jul",end:"2018-Sep"},
              {title:"Нью-Йорк",start:"2018-Oct",end:"2020-Jul"}];
  
  var colors=["#31a354","#e31a1c",
             "#dd1c77","#ff7f00",
             "#cab2d6","#6a3d9a",
             "#1f78b4","#b15928"]
  var color=d3.scaleOrdinal().domain(d3.map(data,d=>d.title).keys()).range(colors);
  console.log(color("Учеба"));
  var parseDate = d3.timeParse("%Y-%b");
  var formatDate=d3.timeFormat("%m/%Y");
  
  data.forEach(d=>{
    d.start=parseDate(d.start)
    d.end=parseDate(d.end)
  });
  
  console.log(data)
  
  var svg=d3.select("#chart").append("svg")
            .attr("viewBox", "0 0 "+(width+margin.left+margin.right)+" "+(height+margin.top+margin.bottom)+"")
            .append("g")
            .attr("transform","translate("+margin.left+","+margin.top+")")
  
  var x=d3.scaleLinear().domain([d3.min(data,d=>d.start),d3.max(data,d=>d.end)]).range([0,width]);

  var xAxis=d3.axisBottom(x);
  
  svg.append("g").attr("class","x-axis")
     .attr("transform","translate(0,"+margin.top+")")
     .call(xAxis)
  
   var defs = svg.append("defs")

		defs.append("marker")
				.attr("id","arrow")
					.attr("viewBox","0 -5 10 10")
					.attr("refX",5)
					.attr("refY",0)
					.attr("markerWidth",2)
					.attr("markerHeight",2)
					.attr("orient","auto")
				.append("path")
					.attr("d", "M0,-5L10,0L0,5")
					.attr("class","arrowHead");
  
  var lines = svg.append("g").selectAll("g")
                 .data(data)
                 .enter()
                 .append("g")
                 .style("stroke",d=>color(d.title))
                 .append("line")
                .attr("orient", "auto")
                 .attr("x1",d=>x(d.start))
                 .attr("y1",margin.top)
                 .attr("x2",d=>x(d.end))
                 .attr("y2", margin.top)
                 .attr('marker-end', 'url(#arrow1)')
                 .attr("class", "arrow")
                 .on("mouseover", function(d){
                  d3.select(this).style("opacity",0.7)
                  })
                  .on("mouseleave",function(d){
                  d3.select(this).style("opacity",1)
                  });
    
  var labels_start = svg.append("g").attr("class","labels")
                   .selectAll("text")
                   .data(data)
                   .enter()
                   .append("text")
                   .attr("x", d=>x(d.start))
                   .attr("y",50)
                   //.attr("fill",d=>color(d.title))
                   .text(d=>formatDate(d.start))
                   //.attr("text-anchor","middle")
  var labels_end = svg.append("g").attr("class","labels")
                   .selectAll("text")
                   .data(data)
                   .enter()
                   .append("text")
                   .attr("x", d=>x(d.end))
                   .attr("y",50)
                   //.attr("fill",d=>color(d.title))
                   .text(d=>formatDate(d.end))
                   .attr("text-anchor","end")
   var labels= svg.append("g").attr("class","labels_main")
                   .selectAll("text")
                   .data(data)
                   .enter()
                   .append("text")
                   .attr("x", d=>x(d.start))
                   .attr("y",20)
                   //.attr("fill",d=>color(d.title))
                   .text(d=>d.title)