var $ = require("jquery");
//require("mixitup")
var mixItUp = require('mixitup')

$(document).ready(function($) {
    //$("#portfolio_grid").mixItUp();
    mixItUp('#portfolio_grid')
    // mixItUp('#portfolio_grid', {
    // 	selectors: {
    // 		target: '.portfolio_item'
    // 	},
    // 	animation: {
    // 		duration: 300
    // 	}
    // })
});