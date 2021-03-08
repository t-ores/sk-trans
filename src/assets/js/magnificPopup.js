const $ = require("jquery");
const {magnificPopup} = require("magnific-popup")

import '../libs/magnific-popup/magnific-popup.css'


$(document).ready(function($) {
    $(".popup_content").magnificPopup({type:"inline"})
});