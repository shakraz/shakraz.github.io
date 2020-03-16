const margin={top:20,bottom:20, left:40,right:5},
        width=700,
        height=550
  
 
  const svg = d3.select("#chart").append("svg")
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

var dataset=[{"region_id":1,"occupation_id":1,"region":"г.алматы","occupation":"Техническое","total":-3167,"average":-176},
              {"region_id":1,"occupation_id":2,"region":"г.алматы","occupation":"Медицинское","total":292,"average":15},
              {"region_id":1,"occupation_id":3,"region":"г.алматы","occupation":"Экономическое","total":-958,"average":-50},
              {"region_id":1,"occupation_id":4,"region":"г.алматы","occupation":"Юридическое","total":-297,"average":-17},
              {"region_id":1,"occupation_id":5,"region":"г.алматы","occupation":"Сельскохозяйственное","total":38,"average":2},
              {"region_id":1,"occupation_id":6,"region":"г.алматы","occupation":"Архитектурноe","total":-3857,"average":-203},
              {"region_id":1,"occupation_id":7,"region":"г.алматы","occupation":"Педагогическое","total":-462,"average":-24},
              {"region_id":1,"occupation_id":8,"region":"г.алматы","occupation":"Не указавшие","total":215,"average":36},
              {"region_id":1,"occupation_id":9,"region":"г.алматы","occupation":"Другое","total":-9087,"average":-478},
              {"region_id":2,"occupation_id":1,"region":"г.нур-султан","occupation":"Техническое","total":-3475,"average":-183},
              {"region_id":2,"occupation_id":2,"region":"г.нур-султан","occupation":"Медицинское","total":-890,"average":-47},
              {"region_id":2,"occupation_id":3,"region":"г.нур-султан","occupation":"Экономическое","total":-1238,"average":-65},
              {"region_id":2,"occupation_id":4,"region":"г.нур-султан","occupation":"Юридическое","total":-172,"average":-9},
              {"region_id":2,"occupation_id":5,"region":"г.нур-султан","occupation":"Сельскохозяйственное","total":-331,"average":-17},
              {"region_id":2,"occupation_id":6,"region":"г.нур-султан","occupation":"Архитектурноe","total":-676,"average":-40},
              {"region_id":2,"occupation_id":7,"region":"г.нур-султан","occupation":"Педагогическое","total":-817,"average":-43},
              {"region_id":2,"occupation_id":8,"region":"г.нур-султан","occupation":"Не указавшие","total":632,"average":70},
              {"region_id":2,"occupation_id":9,"region":"г.нур-султан","occupation":"Другое","total":-1418,"average":-75},
              {"region_id":3,"occupation_id":1,"region":"акмолинская область","occupation":"Техническое","total":-7024,"average":-390},
              {"region_id":3,"occupation_id":2,"region":"акмолинская область","occupation":"Медицинское","total":-1902,"average":-106},
              {"region_id":3,"occupation_id":3,"region":"акмолинская область","occupation":"Экономическое","total":-3377,"average":-188},
              {"region_id":3,"occupation_id":4,"region":"акмолинская область","occupation":"Юридическое","total":-677,"average":-38},
              {"region_id":3,"occupation_id":5,"region":"акмолинская область","occupation":"Сельскохозяйственное","total":-2004,"average":-111},
              {"region_id":3,"occupation_id":6,"region":"акмолинская область","occupation":"Архитектурноe","total":-1081,"average":-60},
              {"region_id":3,"occupation_id":7,"region":"акмолинская область","occupation":"Педагогическое","total":-3432,"average":-191},
              {"region_id":3,"occupation_id":8,"region":"акмолинская область","occupation":"Не указавшие","total":63,"average":5},
              {"region_id":3,"occupation_id":9,"region":"акмолинская область","occupation":"Другое","total":-5763,"average":-320},
              {"region_id":4,"occupation_id":1,"region":"актюбинская область","occupation":"Техническое","total":-2838,"average":-158},
              {"region_id":4,"occupation_id":2,"region":"актюбинская область","occupation":"Медицинское","total":-377,"average":-21},
              {"region_id":4,"occupation_id":3,"region":"актюбинская область","occupation":"Экономическое","total":-850,"average":-47},
              {"region_id":4,"occupation_id":4,"region":"актюбинская область","occupation":"Юридическое","total":-195,"average":-11},
              {"region_id":4,"occupation_id":5,"region":"актюбинская область","occupation":"Сельскохозяйственное","total":98,"average":6},
              {"region_id":4,"occupation_id":6,"region":"актюбинская область","occupation":"Архитектурноe","total":-289,"average":-16},
              {"region_id":4,"occupation_id":7,"region":"актюбинская область","occupation":"Педагогическое","total":-796,"average":-44},
              {"region_id":4,"occupation_id":8,"region":"актюбинская область","occupation":"Не указавшие","total":135,"average":15},
              {"region_id":4,"occupation_id":9,"region":"актюбинская область","occupation":"Другое","total":-926,"average":-51},
              {"region_id":5,"occupation_id":1,"region":"алматинская область","occupation":"Техническое","total":-821,"average":-46},
              {"region_id":5,"occupation_id":2,"region":"алматинская область","occupation":"Медицинское","total":685,"average":38},
              {"region_id":5,"occupation_id":3,"region":"алматинская область","occupation":"Экономическое","total":250,"average":14},
              {"region_id":5,"occupation_id":4,"region":"алматинская область","occupation":"Юридическое","total":13,"average":1},
              {"region_id":5,"occupation_id":5,"region":"алматинская область","occupation":"Сельскохозяйственное","total":255,"average":14},
              {"region_id":5,"occupation_id":6,"region":"алматинская область","occupation":"Архитектурноe","total":234,"average":14},
              {"region_id":5,"occupation_id":7,"region":"алматинская область","occupation":"Педагогическое","total":953,"average":53},
              {"region_id":5,"occupation_id":8,"region":"алматинская область","occupation":"Не указавшие","total":151,"average":15},
              {"region_id":5,"occupation_id":9,"region":"алматинская область","occupation":"Другое","total":506,"average":28},
              {"region_id":6,"occupation_id":1,"region":"атырауская область","occupation":"Техническое","total":438,"average":24},
              {"region_id":6,"occupation_id":2,"region":"атырауская область","occupation":"Медицинское","total":306,"average":17},
              {"region_id":6,"occupation_id":3,"region":"атырауская область","occupation":"Экономическое","total":310,"average":17},
              {"region_id":6,"occupation_id":4,"region":"атырауская область","occupation":"Юридическое","total":109,"average":6},
              {"region_id":6,"occupation_id":5,"region":"атырауская область","occupation":"Сельскохозяйственное","total":236,"average":14},
              {"region_id":6,"occupation_id":6,"region":"атырауская область","occupation":"Архитектурноe","total":169,"average":9},
              {"region_id":6,"occupation_id":7,"region":"атырауская область","occupation":"Педагогическое","total":376,"average":21},
              {"region_id":6,"occupation_id":8,"region":"атырауская область","occupation":"Не указавшие","total":36,"average":9},
              {"region_id":6,"occupation_id":9,"region":"атырауская область","occupation":"Другое","total":617,"average":34},
              {"region_id":7,"occupation_id":1,"region":"восточно-казахстанская область","occupation":"Техническое","total":-14168,"average":-787},
              {"region_id":7,"occupation_id":2,"region":"восточно-казахстанская область","occupation":"Медицинское","total":-2991,"average":-166},
              {"region_id":7,"occupation_id":3,"region":"восточно-казахстанская область","occupation":"Экономическое","total":-6153,"average":-342},
              {"region_id":7,"occupation_id":4,"region":"восточно-казахстанская область","occupation":"Юридическое","total":-1360,"average":-76},
              {"region_id":7,"occupation_id":5,"region":"восточно-казахстанская область","occupation":"Сельскохозяйственное","total":-1234,"average":-69},
              {"region_id":7,"occupation_id":6,"region":"восточно-казахстанская область","occupation":"Архитектурноe","total":-1952,"average":-108},
              {"region_id":7,"occupation_id":7,"region":"восточно-казахстанская область","occupation":"Педагогическое","total":-5340,"average":-297},
              {"region_id":7,"occupation_id":8,"region":"восточно-казахстанская область","occupation":"Не указавшие","total":126,"average":11},
              {"region_id":7,"occupation_id":9,"region":"восточно-казахстанская область","occupation":"Другое","total":-11847,"average":-658},
              {"region_id":8,"occupation_id":1,"region":"жамбылская область","occupation":"Техническое","total":-1995,"average":-111},
              {"region_id":8,"occupation_id":2,"region":"жамбылская область","occupation":"Медицинское","total":262,"average":15},
              {"region_id":8,"occupation_id":3,"region":"жамбылская область","occupation":"Экономическое","total":-510,"average":-28},
              {"region_id":8,"occupation_id":4,"region":"жамбылская область","occupation":"Юридическое","total":-108,"average":-6},
              {"region_id":8,"occupation_id":5,"region":"жамбылская область","occupation":"Сельскохозяйственное","total":7,"average":0},
              {"region_id":8,"occupation_id":6,"region":"жамбылская область","occupation":"Архитектурноe","total":-254,"average":-14},
              {"region_id":8,"occupation_id":7,"region":"жамбылская область","occupation":"Педагогическое","total":-478,"average":-28},
              {"region_id":8,"occupation_id":8,"region":"жамбылская область","occupation":"Не указавшие","total":117,"average":9},
              {"region_id":8,"occupation_id":9,"region":"жамбылская область","occupation":"Другое","total":-3361,"average":-187},
              {"region_id":9,"occupation_id":1,"region":"западно-казахстанская область","occupation":"Техническое","total":-1673,"average":-93},
              {"region_id":9,"occupation_id":2,"region":"западно-казахстанская область","occupation":"Медицинское","total":-303,"average":-19},
              {"region_id":9,"occupation_id":3,"region":"западно-казахстанская область","occupation":"Экономическое","total":-1248,"average":-69},
              {"region_id":9,"occupation_id":4,"region":"западно-казахстанская область","occupation":"Юридическое","total":-200,"average":-11},
              {"region_id":9,"occupation_id":5,"region":"западно-казахстанская область","occupation":"Сельскохозяйственное","total":-4,"average":0},
              {"region_id":9,"occupation_id":6,"region":"западно-казахстанская область","occupation":"Архитектурноe","total":-275,"average":-16},
              {"region_id":9,"occupation_id":7,"region":"западно-казахстанская область","occupation":"Педагогическое","total":-1190,"average":-66},
              {"region_id":9,"occupation_id":8,"region":"западно-казахстанская область","occupation":"Не указавшие","total":68,"average":34},
              {"region_id":9,"occupation_id":9,"region":"западно-казахстанская область","occupation":"Другое","total":-2648,"average":-147},
              {"region_id":10,"occupation_id":1,"region":"карагандинская область","occupation":"Техническое","total":-16359,"average":-909},
              {"region_id":10,"occupation_id":2,"region":"карагандинская область","occupation":"Медицинское","total":-2628,"average":-146},
              {"region_id":10,"occupation_id":3,"region":"карагандинская область","occupation":"Экономическое","total":-5107,"average":-284},
              {"region_id":10,"occupation_id":4,"region":"карагандинская область","occupation":"Юридическое","total":-1187,"average":-66},
              {"region_id":10,"occupation_id":5,"region":"карагандинская область","occupation":"Сельскохозяйственное","total":-325,"average":-19},
              {"region_id":10,"occupation_id":6,"region":"карагандинская область","occupation":"Архитектурноe","total":-1112,"average":-62},
              {"region_id":10,"occupation_id":7,"region":"карагандинская область","occupation":"Педагогическое","total":-4749,"average":-264},
              {"region_id":10,"occupation_id":8,"region":"карагандинская область","occupation":"Не указавшие","total":-163,"average":-15},
              {"region_id":10,"occupation_id":9,"region":"карагандинская область","occupation":"Другое","total":-7962,"average":-442},
              {"region_id":11,"occupation_id":1,"region":"костанайская область","occupation":"Техническое","total":-11942,"average":-663},
              {"region_id":11,"occupation_id":2,"region":"костанайская область","occupation":"Медицинское","total":-2063,"average":-115},
              {"region_id":11,"occupation_id":3,"region":"костанайская область","occupation":"Экономическое","total":-5378,"average":-299},
              {"region_id":11,"occupation_id":4,"region":"костанайская область","occupation":"Юридическое","total":-1246,"average":-69},
              {"region_id":11,"occupation_id":5,"region":"костанайская область","occupation":"Сельскохозяйственное","total":-2643,"average":-147},
              {"region_id":11,"occupation_id":6,"region":"костанайская область","occupation":"Архитектурноe","total":-1686,"average":-94},
              {"region_id":11,"occupation_id":7,"region":"костанайская область","occupation":"Педагогическое","total":-5152,"average":-286},
              {"region_id":11,"occupation_id":8,"region":"костанайская область","occupation":"Не указавшие","total":93,"average":10},
              {"region_id":11,"occupation_id":9,"region":"костанайская область","occupation":"Другое","total":-9064,"average":-504},
              {"region_id":12,"occupation_id":1,"region":"кызылординская область","occupation":"Техническое","total":-325,"average":-18},
              {"region_id":12,"occupation_id":2,"region":"кызылординская область","occupation":"Медицинское","total":-47,"average":-3},
              {"region_id":12,"occupation_id":3,"region":"кызылординская область","occupation":"Экономическое","total":-30,"average":-2},
              {"region_id":12,"occupation_id":4,"region":"кызылординская область","occupation":"Юридическое","total":-33,"average":-2},
              {"region_id":12,"occupation_id":5,"region":"кызылординская область","occupation":"Сельскохозяйственное","total":-10,"average":-1},
              {"region_id":12,"occupation_id":6,"region":"кызылординская область","occupation":"Архитектурноe","total":1,"average":0},
              {"region_id":12,"occupation_id":7,"region":"кызылординская область","occupation":"Педагогическое","total":-56,"average":-3},
              {"region_id":12,"occupation_id":8,"region":"кызылординская область","occupation":"Не указавшие","total":10,"average":3},
              {"region_id":12,"occupation_id":9,"region":"кызылординская область","occupation":"Другое","total":97,"average":5},
              {"region_id":13,"occupation_id":1,"region":"мангистауская область","occupation":"Техническое","total":2515,"average":140},
              {"region_id":13,"occupation_id":2,"region":"мангистауская область","occupation":"Медицинское","total":925,"average":51},
              {"region_id":13,"occupation_id":3,"region":"мангистауская область","occupation":"Экономическое","total":956,"average":53},
              {"region_id":13,"occupation_id":4,"region":"мангистауская область","occupation":"Юридическое","total":254,"average":15},
              {"region_id":13,"occupation_id":5,"region":"мангистауская область","occupation":"Сельскохозяйственное","total":557,"average":31},
              {"region_id":13,"occupation_id":6,"region":"мангистауская область","occupation":"Архитектурноe","total":314,"average":17},
              {"region_id":13,"occupation_id":7,"region":"мангистауская область","occupation":"Педагогическое","total":1832,"average":102},
              {"region_id":13,"occupation_id":8,"region":"мангистауская область","occupation":"Не указавшие","total":248,"average":21},
              {"region_id":13,"occupation_id":9,"region":"мангистауская область","occupation":"Другое","total":3774,"average":210},
              {"region_id":14,"occupation_id":1,"region":"павлодарская область","occupation":"Техническое","total":-12875,"average":-715},
              {"region_id":14,"occupation_id":2,"region":"павлодарская область","occupation":"Медицинское","total":-1784,"average":-99},
              {"region_id":14,"occupation_id":3,"region":"павлодарская область","occupation":"Экономическое","total":-4195,"average":-233},
              {"region_id":14,"occupation_id":4,"region":"павлодарская область","occupation":"Юридическое","total":-685,"average":-38},
              {"region_id":14,"occupation_id":5,"region":"павлодарская область","occupation":"Сельскохозяйственное","total":-885,"average":-52},
              {"region_id":14,"occupation_id":6,"region":"павлодарская область","occupation":"Архитектурноe","total":-1047,"average":-58},
              {"region_id":14,"occupation_id":7,"region":"павлодарская область","occupation":"Педагогическое","total":-3882,"average":-216},
              {"region_id":14,"occupation_id":8,"region":"павлодарская область","occupation":"Не указавшие","total":-285,"average":-24},
              {"region_id":14,"occupation_id":9,"region":"павлодарская область","occupation":"Другое","total":-8003,"average":-445},
              {"region_id":15,"occupation_id":1,"region":"северо-казахстанская область","occupation":"Техническое","total":-6647,"average":-369},
              {"region_id":15,"occupation_id":2,"region":"северо-казахстанская область","occupation":"Медицинское","total":-1341,"average":-75},
              {"region_id":15,"occupation_id":3,"region":"северо-казахстанская область","occupation":"Экономическое","total":-3640,"average":-202},
              {"region_id":15,"occupation_id":4,"region":"северо-казахстанская область","occupation":"Юридическое","total":-1146,"average":-64},
              {"region_id":15,"occupation_id":5,"region":"северо-казахстанская область","occupation":"Сельскохозяйственное","total":-2065,"average":-115},
              {"region_id":15,"occupation_id":6,"region":"северо-казахстанская область","occupation":"Архитектурноe","total":-796,"average":-44},
              {"region_id":15,"occupation_id":7,"region":"северо-казахстанская область","occupation":"Педагогическое","total":-4524,"average":-251},
              {"region_id":15,"occupation_id":8,"region":"северо-казахстанская область","occupation":"Не указавшие","total":43,"average":4},
              {"region_id":15,"occupation_id":9,"region":"северо-казахстанская область","occupation":"Другое","total":-6242,"average":-347},
              {"region_id":16,"occupation_id":1,"region":"южно-казахстанская область","occupation":"Техническое","total":2784,"average":155},
              {"region_id":16,"occupation_id":2,"region":"южно-казахстанская область","occupation":"Медицинское","total":3621,"average":201},
              {"region_id":16,"occupation_id":3,"region":"южно-казахстанская область","occupation":"Экономическое","total":1692,"average":100},
              {"region_id":16,"occupation_id":4,"region":"южно-казахстанская область","occupation":"Юридическое","total":476,"average":26},
              {"region_id":16,"occupation_id":5,"region":"южно-казахстанская область","occupation":"Сельскохозяйственное","total":1063,"average":59},
              {"region_id":16,"occupation_id":6,"region":"южно-казахстанская область","occupation":"Архитектурноe","total":2160,"average":127},
              {"region_id":16,"occupation_id":7,"region":"южно-казахстанская область","occupation":"Педагогическое","total":4215,"average":234},
              {"region_id":16,"occupation_id":8,"region":"южно-казахстанская область","occupation":"Не указавшие","total":597,"average":46},
              {"region_id":16,"occupation_id":9,"region":"южно-казахстанская область","occupation":"Другое","total":3853,"average":214}
              ]
dataset.forEach(d=>{
d.occupation_id=d.occupation_id==9?8:d.occupation_id;
})
dataset = dataset.filter(d=>d.occupation!="Не указавшие")


  var cards = svg.append("g").attr("transform", "translate(100,150)").selectAll("rect")
                 .data(dataset).enter()
                 .append("g")
                 .attr("class","cards")
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
                  // .style("font-size","8px")
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