app.directive('scatterChart', function(){

    function draw(svg, width, height, data) {

        svg
            .attr('width', width)
            .attr('height', height);

        var margin = 30;

        var xScale = d3.time.scale()
            .domain(d3.extent(data, function(d) { return d.x; }))
            .range([margin, width-margin]);

        var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient('top')
            .tickFormat(d3.time.format('%S'));

        var yScale = d3.time.scale()
            .domain([0, d3.max(data, function(d) { return d.y; })])
            .range([margin, height-margin]);

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient('left')
            .tickFormat(d3.format('f'));

        svg.select('.x-axis')
            .attr("transform", "translate(0, " + margin + ")")
            .call(xAxis);

        svg.select('.y-axis')
            .attr("transform", "translate(" + margin + ")")
            .call(yAxis);

        svg.select('.data')
            .selectAll('circle').data(data)
            .enter()
            .append('circle');

        var colorScale = d3.scale.linear()
            .domain(d3.extent(data, function(d) { return d.y; }))
            .range(['red', 'blue']);

        svg.select('.data')
            .selectAll('circle').data(data)
            .attr('r', 2.5)
            .attr('cx', function(d) { return xScale(d.x); })
            .attr('cy', function(d) { return yScale(d.y); })
            .style('fill', function(d) { return colorScale(d.y) })
            .transition()
            .delay(5000)
            .duration(1000)
            .style('fill', 'orange');
    }

    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        compile: function( element, attrs, transclude ) {

            // Create a SVG root element
            var svg = d3.select(element[0]).append('svg');

            svg.append('g').attr('class', 'data');
            svg.append('g').attr('class', 'x-axis axis');
            svg.append('g').attr('class', 'y-axis axis');

            // Define the dimensions for the chart
            var width = 600, height = 300;

            // Return the link function
            return function(scope, element, attrs) {

                // Watch the data attribute of the scope
                scope.$watch('data', function(newVal, oldVal, scope) {

                    var data = scope.data.map(function(d){
                        return {
                            x: d.time,
                            y: d.visitors
                        }
                    });

                    // Update the chart
                    draw(svg, width, height, data);
                }, true);
            };
        }
    };
});