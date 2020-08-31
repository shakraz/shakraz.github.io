// https://observablehq.com/@datavizkz/fiscal-budget@192
import define1 from "./e93997d5089d7165@2285.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["budget@6.csv",new URL("./files/e99b1aa6198490105e1313105d6dca8fef6de0a9845b4baf51745306153c2690588f9fbcf45b21afb0489bddd3e4cebcc797523b543705c2ea3dba26f63718f7",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Fiscal budget`
)});
  main.variable(observer("viewof level")).define("viewof level", ["checkbox"], function(checkbox){return(
checkbox({
  title: "Уровень бюджета",
  description: "Выберите возможный уровень",
  options: ["1","2","3"]
})
)});
  main.variable(observer("level")).define("level", ["Generators", "viewof level"], (G, _) => G.input(_));
  main.variable(observer("viewof admins")).define("viewof admins", ["select"], function(select){return(
select({
  description: "Выберите группу",
  options: ["Обслуживание долга",
           "Топливно-энергетический комплекс и недропользование",
           "Образование",
           "Жилищно-коммунальное хозяйство"],
  multiple: true
})
)});
  main.variable(observer("admins")).define("admins", ["Generators", "viewof admins"], (G, _) => G.input(_));
  main.variable(observer("viewof edgeColor")).define("viewof edgeColor", ["html","URLSearchParams"], function(html,URLSearchParams){return(
Object.assign(html`<select>
  <option value=input>Color by input
  <option value=output>Color by output
  <option value=path selected>Color by input-output
  <option value=none>No color
</select>`, {
  value: new URLSearchParams(html`<a href>`.search).get("color") || "path"
})
)});
  main.variable(observer("edgeColor")).define("edgeColor", ["Generators", "viewof edgeColor"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3","width","height","sankey","data","color","edgeColor","DOM"], function(d3,width,height,sankey,data,color,edgeColor,DOM)
{
  const svg = d3.create('svg')
    .attr('viewBox', [0, 0, width, height]);

  const {nodes, links} = sankey(data);
  svg.append('g')
      .attr('stroke', '#000')
    .selectAll('rect')
    .data(nodes)
    .join('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('height', d => d.y1 - d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('fill', color)
    .on('mouseover', showConnection)
    .on('mouseout', hideConnection)
    .append('title')
      .text(d => d.name);

  const link = svg.append('g')
      .attr('fill', 'none')
    .selectAll('g')
    .data(links)
    .join('g');
  
  if (edgeColor === 'path') {
    const gradient = link.append('linearGradient')
      .attr('id', d => (d.uid = DOM.uid('link')).id)
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', d => d.source.x1)
      .attr('x2', d => d.target.x0);

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', d => color(d.source));

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', d => color(d.target));
  }

  link.append('path')
    .attr('d', d3.sankeyLinkHorizontal())
    .attr('stroke', d => edgeColor === 'none' ? '#aaa'
      : edgeColor === 'path' ? d.uid 
      : edgeColor === 'input' ? color(d.source) 
      : color(d.target))
    .style("stroke-width", d => Math.max(1, d.width))

  link.append('title')
    .text(d => `${d.source.name} → ${d.target.name} \n ${d3.format(".2s")(1000*d.value)}\n ${d3.format(".0%")(d.ratio)}`);

  svg
    .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 6)
    .selectAll('text')
    .data(nodes)
    .join('text')
      .attr('x', d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
      .attr('y', d => (d.y1 + d.y0) / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', d => d.x0 < width / 2 ? 'start' : 'end')
      .text(d => d.name)
    .clone(true).lower()

  function showConnection(d) {
    const linkedNodes = [];
    
    var traverse = [{
      linkType : 'sourceLinks',
      nodeType : 'target',
    }, {
      linkType : 'targetLinks',
      nodeType : 'source',
    }];
    
    traverse.forEach((step) => {
      d[step.linkType].forEach((l) => {
        linkedNodes.push(l[step.nodeType]);
      });
    });
    
    // Update linked nodes style
    d3.selectAll('rect').style(
      'opacity',
      r => linkedNodes.find(remainingNode => remainingNode.name === r.name) ? '1' : '0.5'
    );
    
    // Update hovered node style
    d3.select(this).style('opacity', '1');
    
    // Update links style
    d3.selectAll('path').style(
      'opacity',
      p => (p && (p.source.name === d.name || p.target.name === d.name)) ? '1' : '0.5'
    );
    d3.selectAll('path').attr(
      'stroke-width',
      p => (p && (p.source.name === d.name || p.target.name === d.name)) ? '4px' : '1px'
    );
  }
  
  function hideConnection() {
    // Update nodes style
    d3.selectAll('rect').style('opacity', '1');
    
    // Update links style
    d3.selectAll('path').style('opacity', '1');
    d3.selectAll('path').attr('stroke-width', '1px');
  }
  
  return svg.node();
}
);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6", "d3-sankey@0.12")
)});
  const child1 = runtime.module(define1);
  main.import("select", child1);
  const child2 = runtime.module(define1);
  main.import("checkbox", child2);
  main.variable(observer("width")).define("width", function(){return(
800
)});
  main.variable(observer("height")).define("height", function(){return(
1000
)});
  main.variable(observer("color")).define("color", ["d3"], function(d3)
{
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  return d => color(d.name);
}
);
  main.variable(observer("sankey")).define("sankey", ["d3","width","height"], function(d3,width,height)
{
  var sankey = d3.sankey()
      .nodeId(d => d.name)
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 5], [width - 1, height - 5]]);
  return ({nodes, links}) => sankey({
    nodes: nodes.map(d => Object.assign({}, d)),
    links: links.map(d => Object.assign({}, d))
  });
}
);
  main.variable(observer("data")).define("data", ["raw","level","admins"], function(raw,level,admins)
{
  var data=raw.filter(d=>level.includes(d.level.toString()) && admins.includes(d.source));
  console.log(admins)
  var links = data;
  var nodes = Array.from(new Set(links.flatMap(l => [l.source, l.target])), name => ({name}));
  
  return {nodes, links};
}
);
  main.variable(observer("raw")).define("raw", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment('budget@6.csv').text(), d3.autoType)
)});
  return main;
}
