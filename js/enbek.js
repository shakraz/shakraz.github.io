

var heatmap = new dc.HeatMap("#heatmap");
var rowchart =   dc.rowChart("#chart1")
var agechart =   dc.rowChart("#age")
var categorychart =   dc.rowChart("#category")
var boxplot =   dc.rowChart("#boxplot")
var piechart =   dc.pieChart("#piechart")
 var boxND    =  new dc.NumberDisplay("#scorecard2")
 var cvSalary    =  new dc.NumberDisplay("#scorecard4")
 var hrindex    =  new dc.NumberDisplay("#scorecard3")
 var jobcount    =  new dc.NumberDisplay("#scorecard1")
 
 const numberFormat = d3.format('.2f')


//cv dataset
d3.csv("https://raw.githubusercontent.com/shakraz/infoviz/master/resume_final.csv").then(function(data){

	data.forEach(d=>{
		d.avg_job_salary=+d.avg_job_salary
		d.cv_salary=+d.cv_salary
		d.region=d.region.replace(" ОБЛАСТЬ","")
	})
	data.forEach(d=>{
		d.avg_job_salary = isNaN(d.avg_job_salary)?0:d.avg_job_salary
	   d.cv_salary = isNaN(d.cv_salary)?0:d.cv_salary
	})



	data = data.filter(d=>d.cv_salary!=10000000)



	var ndx = crossfilter(data)
	var dim = ndx.dimension(d=>[d.x,d.y,d.region])




	var group = dim.group().reduce(
		(p,v)=>{
			++p.count;
			p.isna+=v.avg_job_salary==0?1:0;
			p.total+=v.avg_job_salary;
	        p.avg_salary=p.total/(p.count-p.isna);
	return p
	},
	(p,v)=>{
		--p.count;
		p.isna-=v.avg_job_salary==0?1:0;
		p.total-=v.avg_job_salary;
	    p.avg_salary=p.total/(p.count-p.isna);
	return p
	},
	()=>({avg_salary: 0,isna: 0,count: 0,total:0})
	)




	var graduationDim = ndx.dimension(d=>[d.graduation])
	var graduationGroup = graduationDim.group().reduce(
			(p,v)=>{
			++p.count;
			p.total+=v.avg_job_salary;
	        p.avg_salary=p.total/p.count;
	return p
	},
	(p,v)=>{
		--p.count;
		p.total-=v.avg_job_salary;
	    p.avg_salary=p.total/p.count;
	return p
	},
	()=>({avg_salary: 0,count: 0,total:0}))



	var group2 = ndx.groupAll().reduce(
		(p,v)=>{
				++p.count;
				p.isna+=v.avg_job_salary==0?1:0;
				p.total+=v.avg_job_salary;
				p.cv_total+=v.cv_salary;
				p.jobcount+=isNaN(v.job_count)?0:v.job_count;
		        p.avg_salary=p.total/(p.count-p.isna);
		         p.avg_cv_salary=p.cv_total/(p.count);
		        // p.hrindex= p.count/p.job_count;
		return p
		},
		(p,v)=>{
			--p.count;
			p.isna-=v.avg_job_salary==0?1:0;
			p.total-=v.avg_job_salary;
			p.cv_total-=v.cv_salary;
			p.jobcount-=isNaN(v.job_count)?0:v.job_count;
		    p.avg_salary=p.total/(p.count-p.isna);
		    p.avg_cv_salary=p.cv_total/(p.count);
		    //p.hrindex= p.count/p.job_count;
		return p
		},
		()=>({avg_salary: 0,isna:0,jobcount:0,cv_total:0,count: 0,total:0,avg_cv_salary:0})

		      	);

	boxND
	  .valueAccessor(function(d) {return d.avg_salary})
	  .group(group2)

	cvSalary
	  .valueAccessor(function(d) {return d.avg_cv_salary})
	  .group(group2)


	hrindex
	  .valueAccessor(function(d) {return d.count})
	  .group(group2)


	var heatColorMapping = d3.scaleLinear()
	            .domain([50000,80000,150000,300000, 500000])
	            .range(["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"]);


	heatmap
	    .width(800)
	    .height(300)
	    .useViewBoxResizing(true)
	    .dimension(dim)
	    .group(group)
	    .keyAccessor(function(d) { return +d.key[0]; })
	    .valueAccessor(function(d) { return +d.key[1]; })
	    .colorAccessor(d=>d.value.avg_salary)
	    .title(function(d) {return d.key[2]+"\nСредняя запрос: "+ Math.round(d.value.avg_salary) })
	    .colors(heatColorMapping)
	    .on('renderlet.label', function(chart) {
	                      
	 heatmap.selectAll("text").data(d=>[d]).exit().remove();
	 heatmap.selectAll('g.box-group')
	                            .append("text")
	                            .attr("x", function (d) {
									var rect = d3.select(this.parentNode).select('rect');
									

	                                return +rect.attr("x") + (+rect.attr("width") / 2);
	                            })

	                            .attr("y", function (d) {
	                                var rect = d3.select(this.parentNode).select('rect');
	                      
	                                return +rect.attr("y") + (+rect.attr("height") / 2);
	                            })
	                            .text(function (d) { return d.key[2]+"\n"+numberFormat(d.value.avg_salary)+" тг."})
	                            .attr("dy", ".35em")
	                            .attr("fill", "gray")
	                            .attr("font-size", "6px")
	                            .attr("text-anchor", "middle");
	    })

	    ;
	    


	 var categoryDim = ndx.dimension(d=>d.experience_text)
	 var categoryGroup=categoryDim.group().reduce(
			(p,v)=>{
			++p.count;
			p.total+=v.avg_job_salary;
	        p.avg_salary=p.total/p.count;
	return p
	},
	(p,v)=>{
		--p.count;
		p.total-=v.avg_job_salary; 
	    p.avg_salary=p.total/p.count;
	return p
	},
	()=>({avg_salary: 0,count: 0,total:0})
	 )
	  
	 boxplot
	    .width(250)
	    .height(200)
	    .elasticX(true)
	    .dimension(categoryDim)
	    .group(categoryGroup)
	    .valueAccessor(function(d) { return +d.value.avg_salary })
	    .ordering(function(d) { return -d.value.avg_salary })
	  
	  rowchart
	    .width(250)
	    .height(200)
	    .elasticX(true)
	    .dimension(graduationDim)
	    .group(graduationGroup)
	    .valueAccessor(function(d) { return +d.value.avg_salary })
	  .ordering(function(d) { return -d.value.avg_salary })
	  

	    agechart
	    .width(210)
	    .height(200)
	    .elasticX(true)
	    .dimension(ndx.dimension(d=>d.age_text))
	    .group(ndx.dimension(d=>d.age_text).group().reduceCount())


	  var areaDim = ndx.dimension(d=>d.category)
	  var areaGroup = areaDim.group().reduceCount()

	    categorychart

	    .width(700)
	    .height(400)
		    .elasticX(true)
		    .dimension(areaDim)
		    .group(areaGroup)
		    .cap(15)
	  

	  var genderDim = ndx.dimension(d=>d.gender)
	  var genderGroup = genderDim.group().reduceCount()
	  
	  
	  piechart
	    .width(150)
	    .height(200)
	    .innerRadius(40)
	    .dimension(genderDim)
	    .group(genderGroup)


	dc.renderAll()
});



//jobs dataset


d3.csv("https://raw.githubusercontent.com/shakraz/infoviz/master/enbek.csv").then(function(data){

	data.forEach(d=>{
		d.job_salary=+d.job_salary
	})

	var jobs=data;

	var ndx = crossfilter(data);

	var regionDim = ndx.dimension(d=>d.region)
	var regionGrp = regionDim.groupAll().reduce(

			(p,v)=>{
				++p.count;			
		return p
		},
		(p,v)=>{
			--p.count;
			
		return p
		},
		()=>({avg_salary: 0,isna: 0,count: 0,total:0})
		);


	jobcount
	  .group(regionGrp)
	  .valueAccessor(d=>d.count)

	jobcount.render()


});

heatmap.on('filtered', function(chart) {
   console.log("HEy")
   jobcount.filter(null)
   .filter(chart.filters());
   dc.redrawAll()
});