var margin={left:30,right:10,top:175, bottom:55};
var width=1100,
    height=540,
    gridSize=50;
var names=["Техническое" ,"Другое" ,"Не указавшие",
"Экономическое" ,"Архитектурно-строительное", "Юридическое",
"Педагогическое" ,"Медицинское" ,"Сельскохозяйственное" ];

var regions = ["ВОСТОЧНО-КАЗАХСТАНСКАЯ", "СЕВЕРО-КАЗАХСТАНСКАЯ",   "ПАВЛОДАРСКАЯ","ЮЖНО-КАЗАХСТАНСКАЯ",     "МАНГИСТАУСКАЯ",          "КЫЗЫЛОРДИНСКАЯ",
"КОСТАНАЙСКАЯ" ,          "КАРАГАНДИНСКАЯ",         "ЖАМБЫЛСКАЯ",
"АКМОЛИНСКАЯ",            "ЗАПАДНО-КАЗАХСТАНСКАЯ",  "АТЫРАУСКАЯ",
"АЛМАТИНСКАЯ",            "АКТЮБИНСКАЯ"];

var data = [{"region_id":1,"occupation_id":1,"total":-14168},{"region_id":1,"occupation_id":2,"total":-11847},{"region_id":1,"occupation_id":3,"total":126},{"region_id":1,"occupation_id":4,"total":-6153},{"region_id":1,"occupation_id":5,"total":-1952},{"region_id":1,"occupation_id":6,"total":-1360},{"region_id":1,"occupation_id":7,"total":-5340},{"region_id":1,"occupation_id":8,"total":-2991},{"region_id":1,"occupation_id":9,"total":-1234},{"region_id":2,"occupation_id":1,"total":-6647},{"region_id":2,"occupation_id":2,"total":-6242},{"region_id":2,"occupation_id":3,"total":43},{"region_id":2,"occupation_id":4,"total":-3640},{"region_id":2,"occupation_id":5,"total":-796},{"region_id":2,"occupation_id":6,"total":-1146},{"region_id":2,"occupation_id":7,"total":-4524},{"region_id":2,"occupation_id":8,"total":-1341},{"region_id":2,"occupation_id":9,"total":-2065},{"region_id":3,"occupation_id":1,"total":-12875},{"region_id":3,"occupation_id":2,"total":-8003},{"region_id":3,"occupation_id":3,"total":-285},{"region_id":3,"occupation_id":4,"total":-4195},{"region_id":3,"occupation_id":5,"total":-1047},{"region_id":3,"occupation_id":6,"total":-685},{"region_id":3,"occupation_id":7,"total":-3882},{"region_id":3,"occupation_id":8,"total":-1784},{"region_id":3,"occupation_id":9,"total":-885},{"region_id":4,"occupation_id":1,"total":2784},{"region_id":4,"occupation_id":2,"total":3853},{"region_id":4,"occupation_id":3,"total":597},{"region_id":4,"occupation_id":4,"total":1692},{"region_id":4,"occupation_id":5,"total":2160},{"region_id":4,"occupation_id":6,"total":476},{"region_id":4,"occupation_id":7,"total":4215},{"region_id":4,"occupation_id":8,"total":3621},{"region_id":4,"occupation_id":9,"total":1063},{"region_id":5,"occupation_id":1,"total":2515},{"region_id":5,"occupation_id":2,"total":3774},{"region_id":5,"occupation_id":3,"total":248},{"region_id":5,"occupation_id":4,"total":956},{"region_id":5,"occupation_id":5,"total":314},{"region_id":5,"occupation_id":6,"total":254},{"region_id":5,"occupation_id":7,"total":1832},{"region_id":5,"occupation_id":8,"total":925},{"region_id":5,"occupation_id":9,"total":557},{"region_id":6,"occupation_id":1,"total":-325},{"region_id":6,"occupation_id":2,"total":97},{"region_id":6,"occupation_id":3,"total":10},{"region_id":6,"occupation_id":4,"total":-30},{"region_id":6,"occupation_id":5,"total":1},{"region_id":6,"occupation_id":6,"total":-33},{"region_id":6,"occupation_id":7,"total":-56},{"region_id":6,"occupation_id":8,"total":-47},{"region_id":6,"occupation_id":9,"total":-10},{"region_id":7,"occupation_id":1,"total":-11942},{"region_id":7,"occupation_id":2,"total":-9064},{"region_id":7,"occupation_id":3,"total":93},{"region_id":7,"occupation_id":4,"total":-5378},{"region_id":7,"occupation_id":5,"total":-1686},{"region_id":7,"occupation_id":6,"total":-1246},{"region_id":7,"occupation_id":7,"total":-5152},{"region_id":7,"occupation_id":8,"total":-2063},{"region_id":7,"occupation_id":9,"total":-2643},{"region_id":8,"occupation_id":1,"total":-16359},{"region_id":8,"occupation_id":2,"total":-7962},{"region_id":8,"occupation_id":3,"total":-163},{"region_id":8,"occupation_id":4,"total":-5107},{"region_id":8,"occupation_id":5,"total":-1112},{"region_id":8,"occupation_id":6,"total":-1187},{"region_id":8,"occupation_id":7,"total":-4749},{"region_id":8,"occupation_id":8,"total":-2628},{"region_id":8,"occupation_id":9,"total":-325},{"region_id":9,"occupation_id":1,"total":-1995},{"region_id":9,"occupation_id":2,"total":-3361},{"region_id":9,"occupation_id":3,"total":117},{"region_id":9,"occupation_id":4,"total":-510},{"region_id":9,"occupation_id":5,"total":-254},{"region_id":9,"occupation_id":6,"total":-108},{"region_id":9,"occupation_id":7,"total":-478},{"region_id":9,"occupation_id":8,"total":262},{"region_id":9,"occupation_id":9,"total":7},{"region_id":10,"occupation_id":1,"total":-7024},{"region_id":10,"occupation_id":2,"total":-5763},{"region_id":10,"occupation_id":3,"total":63},{"region_id":10,"occupation_id":4,"total":-3377},{"region_id":10,"occupation_id":5,"total":-1081},{"region_id":10,"occupation_id":6,"total":-677},{"region_id":10,"occupation_id":7,"total":-3432},{"region_id":10,"occupation_id":8,"total":-1902},{"region_id":10,"occupation_id":9,"total":-2004},{"region_id":11,"occupation_id":1,"total":-1673},{"region_id":11,"occupation_id":2,"total":-2648},{"region_id":11,"occupation_id":3,"total":68},{"region_id":11,"occupation_id":4,"total":-1248},{"region_id":11,"occupation_id":5,"total":-275},{"region_id":11,"occupation_id":6,"total":-200},{"region_id":11,"occupation_id":7,"total":-1190},{"region_id":11,"occupation_id":8,"total":-303},{"region_id":11,"occupation_id":9,"total":-4},{"region_id":12,"occupation_id":1,"total":438},{"region_id":12,"occupation_id":2,"total":617},{"region_id":12,"occupation_id":3,"total":36},{"region_id":12,"occupation_id":4,"total":310},{"region_id":12,"occupation_id":5,"total":169},{"region_id":12,"occupation_id":6,"total":109},{"region_id":12,"occupation_id":7,"total":376},{"region_id":12,"occupation_id":8,"total":306},{"region_id":12,"occupation_id":9,"total":236},{"region_id":13,"occupation_id":1,"total":-821},{"region_id":13,"occupation_id":2,"total":506},{"region_id":13,"occupation_id":3,"total":151},{"region_id":13,"occupation_id":4,"total":250},{"region_id":13,"occupation_id":5,"total":234},{"region_id":13,"occupation_id":6,"total":13},{"region_id":13,"occupation_id":7,"total":953},{"region_id":13,"occupation_id":8,"total":685},{"region_id":13,"occupation_id":9,"total":255},{"region_id":14,"occupation_id":1,"total":-2838},{"region_id":14,"occupation_id":2,"total":-926},{"region_id":14,"occupation_id":3,"total":135},{"region_id":14,"occupation_id":4,"total":-850},{"region_id":14,"occupation_id":5,"total":-289},{"region_id":14,"occupation_id":6,"total":-195},{"region_id":14,"occupation_id":7,"total":-796},{"region_id":14,"occupation_id":8,"total":-377},{"region_id":14,"occupation_id":9,"total":98}];

var outerW=width+margin.left+margin.right;
var outerH=height+margin.top+margin.bottom;
          
var svg=d3.select("#chart")
          .append("svg")
          .attr("viewBox","0 0 "+outerW+" "+outerH+"")
          .append("g")
          .attr("transform",'translate('+margin.left+','+margin.top+')');

color_palette=["#D73027", "#FC8D59", "#FEE08B", "#D9EF8B", "#91CF60", "#1A9850"];

var valueColor = d3.scaleThreshold().domain([-10000,-5000,0,5000,10000])
.range(color_palette);

var legend_text = ["выбыло \nболее 10 тыс.", "выбыло\n 5-10 тыс.", "выбыло 0-5 тыс.","прибыло до 5 тыс.","прибыло 5-10тыс.","прибыло более 10 тыс."];

var cards=svg.append("g")
             .attr("transform","translate(130,0)")
             .selectAll(".grid")
             .data(data)
             .enter()
             .append("g").attr("class","cards")
             .attr("transform",(d,i)=>"translate("+(d.region_id*gridSize+2*d.region_id)+","+(d.occupation_id*gridSize+2*d  .occupation_id)+")" );
             
var tooltip=d3.select("body").append("div").attr("class","tooltip").attr("opacity",0);

cards.append("rect")
     .attr("width", gridSize)
     .attr("height",gridSize)
     .attr("rx",5)
     .attr("ry",5)
    .attr("fill",d=>valueColor(d.total))//.attr("opacity","0.5");
    .on("mouseover",d=>{
      
      tooltip
        .attr("opacity",0.9)
        .style("left", (d3.event.pageX) + "px") 
        .style("top", (d3.event.pageY - 28) + "px")
      //  buildHistory()
    })
    .on("mouseout",d=>{
      tooltip.transition().duration(500).attr("opacity",0)
    });
    

     
cards.append("text")
     .attr("y",2+gridSize/2)
     .attr("x",2+gridSize/2)
     .attr("text-anchor", "middle")
     //.attr("fill","#ccc")
     .text(d=>d.total);


var labels=d3.select("svg").append("g")
              .attr("transform",'translate(0,235)')
              .selectAll("text")
              .data(names)
              .enter()
              .append("text")
              .attr("y",(d,i)=>25+i*52)
              .text(d=>d);

var region_labels = d3.select("svg")
              .append("g")
              .attr("transform"," translate(220,200) rotate(-90)")
              .selectAll("text")
              .data(regions)
              .enter()
              .append("text")
              .attr("class","reg")
              .attr("y",(d,i)=>25+i*52)
              .text(d=>d);
              
              
var legend=d3.select("svg").append("g").attr("class","legend").attr("transform","translate(480,700)");

legend.selectAll("rect")
              .data(legend_text)
             .enter()
             .append("rect")
             .attr("width", 75)
             .attr("height",25)
             .attr("x",(d,i)=>77*i)
             .attr("fill",(d,i)=>color_palette[i]);
             
legend.selectAll("text").
              data(legend_text)
             .enter()
             .append("text")
             .attr("x",(d,i)=>79*i)
             .attr("y",35)
             .text(d=>d);
             
             
//bar chart
var sample_history =[{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2007,"value":-623,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2009,"value":-435,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2011,"value":-378,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2012,"value":-283,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2008,"value":-722,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2013,"value":-284,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2010,"value":-161,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2005,"value":-378,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2014,"value":-425,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2004,"value":-501,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2001,"value":-1822,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2015,"value":-395,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2016,"value":-606,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2003,"value":-424,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2006,"value":-154,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2002,"value":-1380,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2000,"value":-2135,"id":"KZ-KUS","occupation_id":1,"region_id":7},{"region":"КОСТАНАЙСКАЯ ОБЛАСТЬ","occupation":"Техническое","year":2017,"value":-836,"id":"KZ-KUS","occupation_id":1,"region_id":7}] ;

var buildHistory=function(){
  var margin=25;
  var width=250,height=150;
  var svg=d3.select(".tooltip")
            .append('svg')
            .attr("width",width+2*margin)
            .attr("height",height+2*margin)
            .attr("transform","translate("+margin+","+margin+")")
            
  console.log(sample_history.map(d=>d.year))
  var x=d3.scaleBand().domain(sample_history.map(d=>d.year)).range([0,width]);
  
  var xAxis=d3.axisBottom(x)
  svg.append("g")
     .attr("transform","translate(0,"+height+")")
     .call(xAxis);
     
  var y = d3.scaleLinear().domain(d3.extent(sample_history,d=>d.value)).range([height,0])
  var yAxis =d3.axisLeft(y);
  
  svg.append("g")
     .call(yAxis)
};