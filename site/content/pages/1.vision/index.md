---
featured_image: https://s3-us-west-1.amazonaws.com/itig-s3/page-images/grand_canyon_colorized.png
title: Vision
template: top-page
id: 61248714-571f-4b19-97e4-c8f0ba5fe025
custom_footer_js: https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js
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
    new Chartist.Pie('.ct-chart', data, {
        chartPadding: 150,
        labelOffset: 150,
    });
</script>