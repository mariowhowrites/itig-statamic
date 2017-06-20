---
featured_image: https://s3-us-west-1.amazonaws.com/itig-s3/page-images/grand_canyon_colorized.png
title: Vision
template: top-page
id: 61248714-571f-4b19-97e4-c8f0ba5fe025
---
The Third Way immigration platform is built around incentives that perfectly align the interests of all stakeholders in the immigration debate. In return for paying into America's tax system, immigrants will be afforded protections and liberties unknown under their present legal condition. This ensures immigrant safety and the absolute minimization of burden to taxpayers, creating a win-win situation in which America once again embraces its role as the world's foremost guarantor of opportunity. 

<div class="ct-chart ct-perfect-fourth"></div>

<script>
    var data = {
        // Our series array that contains series objects or in this case series data arrays
        labels: ['Education: $40 Billion', 'Health Care: $30 Billion', 'Community Centers: $10 Billion', 'Correctional Programs: $10 Billion', 'Government Services: $10 Billion', 'Infrastructure: $67 Billion'],
        series: [40, 30, 10, 10, 10, 67]
    };

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object.
    var myChart = new Chartist.Pie('.ct-chart', data, {
        chartPadding: 150,
        labelOffset: 150,
        donut: true 
    });
    myChart.on('draw', function(data) {
      if(data.type === 'slice') {
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();
    
        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });
    
        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition = {
          'stroke-dashoffset': {
            id: 'anim' + data.index,
            dur: 1000,
            from: -pathLength + 'px',
            to:  '0px',
            easing: Chartist.Svg.Easing.easeOutQuint,
            // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
            fill: 'freeze'
          }
        };
    
        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if(data.index !== 0) {
          animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }
    
        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
          'stroke-dashoffset': -pathLength + 'px'
        });
    
        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false);
      }
    });

</script>