d3.csv('brain_data_noquotes.csv', function (data) {
  // Variables
  var body = d3.select('body')

  // Scales
  var colorScale = d3.scale.category20()
  var xScale = d3.scale.linear()
    .domain([-60,60])
    .range([-400,400])
  var yScale = d3.scale.linear()
    .domain([40,-50])
    .range([-400,400])

  // SVG
  var svg = body.append('svg')
      .attr('height',1000)
      .attr('width',1000)
    .append('g')
      .attr('transform','translate(' + 500 + ',' + 500 + ')')
      
  // X-axis
  var xAxis = d3.svg.axis()
    .scale(xScale)
    .ticks(10)
    .orient('bottom')

  // Y-axis
  var yAxis = d3.svg.axis()
    .scale(yScale)
    .ticks(10)
    .orient('left')

  // Circles
  var circles = svg.selectAll('circle')
      .data(data)
      .enter()
    .append('circle')
      .attr('cx',function (d) { return xScale(d.tSNE1) })
      .attr('cy',function (d) { return yScale(d.tSNE2) })
      .attr('r','3')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { return colorScale(i) })
      .on('mouseover', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',6)
          .attr('stroke-width',3)
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',3)
          .attr('stroke-width',1)
      })

  // X-axis
  svg.append('g')
      .attr('class','axis')
      .call(xAxis)

  // Y-axis
  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis)




})