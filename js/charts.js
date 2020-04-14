
var chart =  dc.boxPlot("#boxplot");
var rowchart =  new dc.RowChart("#rowchart");
var rowchart2 =  new dc.RowChart("#piechart");

var districtSel = new dc.SelectMenu('#select1')
var suburbSel = new dc.SelectMenu('#select2')
var conditionSel = new dc.SelectMenu('#select3')
var roomSel = new dc.SelectMenu('#select4')
var ownerSel = new dc.SelectMenu('#select5')


d3.csv("/data/realty_final.csv").then(function(data){

    data.forEach(d=>{
      d.price=+d.price;
    })

   
   data = data.filter(d=>d.suburb!="NA")

    var ndx=crossfilter(data);
    
    var districtDim        = ndx.dimension(d=>[d.district])
    var districtGroup            = districtDim.group()

    
    var suburbDim        = ndx.dimension(d=>d.suburb)
    var suburbGroup            = suburbDim.group()



    var conditionDim        = ndx.dimension(d=>[d.condition])
    var conditionGroup            = conditionDim.group()
    

     var roomDim        = ndx.dimension(d=>[d.room])
    var roomGroup            = roomDim.group()
    
 var ownerDim        = ndx.dimension(d=>[d.owner])
    var ownerGroup            = ownerDim.group()
    
     var matherialDim        = ndx.dimension(d=>[d.matherial])
    var matherialGroup            = matherialDim.group()
    

    var devaluationDim        = ndx.dimension(d=>d.devaluation)
    
    var devaluationGroup = devaluationDim.group().reduce(
            function(p,v) {
              // keep array sorted for efficiency
              p.splice(d3.bisectLeft(p, v.price), 0, v.price);
              return p;
            },
            function(p,v) {
              p.splice(d3.bisectLeft(p, v.price), 1);
              return p;
            },
            function() {
              return [];
            }
          );

      chart
        .width(600)
        .height(400)
        .useViewBoxResizing(true)
        .margins({top: 10, right:10, bottom: 30, left: 50})
        .dimension(devaluationDim)
        .group(devaluationGroup)
        .elasticY(true)
        .elasticX(true);

    chart.yAxis().tickFormat(d3.format('.3s'));
    


  districtSel
    .dimension(districtDim)
    .group(districtGroup)
    .controlsUseVisibility(true);

 suburbSel
    .dimension(suburbDim)
    .group(suburbGroup)
    .controlsUseVisibility(true);

roomSel
    .dimension(roomDim)
    .group(roomGroup)
    .controlsUseVisibility(true);

     conditionSel
    .dimension(conditionDim)
    .group(conditionGroup)
    .controlsUseVisibility(true);

    ownerSel
    .dimension(ownerDim)
    .group(ownerGroup)
    .controlsUseVisibility(true);

rowchart
        .width(400)
        .height(180)
        .x(d3.scaleLinear().domain([0,100]).range([0,200]))
        .elasticX(true)
        .rowsCap(10)
        .dimension(matherialDim)
        .group(matherialGroup)


  rowchart2
        .width(400)
        .height(180)
        .x(d3.scaleLinear().domain([0,100]).range([0,200]))
        .elasticX(true)
        .rowsCap(10)
        .dimension(conditionDim)
        .group(conditionGroup)


  dc.renderAll();

})
