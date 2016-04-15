jQuery(document).ready(function () {
  var regions = [];

  jQuery('#vmap').vectorMap({
    map: 'world_en',
    backgroundColor: 'transparent',
    color: '#ffffff',
    hoverOpacity: 0.7,
    selectedColor: '#666666',
    // enableZoom: true,
    showTooltip: true,
    scaleColors: ['#C8EEFF', '#006491'],
    normalizeFunction: 'polynomial',
    values: sample_data,
    multiSelectRegion: true,
    selectedRegions: regions,
    onRegionClick: function(element, code, region){
        service.updateRegions(region);
    }

  });

  var word_array = [
    {text: "Lorem", weight: 15, html:{style: "cursor: pointer;"},
      handlers: {click: function(){service.wordcloudElementClicked(this.id, 'Lorem') } }},
    {text: "Ipsum", weight: 9, link: "http://jquery.com/"},
    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
    {text: "Sit", weight: 7},
    {text: "Amet", weight: 5},
    {text: "Lorem", weight: 15, html:{style: "cursor: pointer;"}, handlers: {click: function() { alert("it works!"); } }},
    {text: "Ipsum", weight: 9, link: "http://jquery.com/"},
    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
    {text: "Sit", weight: 7},
    {text: "Amet", weight: 5},
    {text: "Lorem", weight: 15, html:{style: "cursor: pointer;"}, handlers: {click: function() { alert("it works!"); } }},
    {text: "Ipsum", weight: 9, link: "http://jquery.com/"},
    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
    {text: "Sit", weight: 7},
    {text: "Amet", weight: 5},
    {text: "Lorem", weight: 15, html:{style: "cursor: pointer;"}, handlers: {click: function() { alert("it works!"); } }},
    {text: "Ipsum", weight: 9, link: "http://jquery.com/"},
    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
    {text: "Sit", weight: 7},
    {text: "Amet", weight: 5},
    {text: "Lorem", weight: 15, html:{style: "cursor: pointer;"}, handlers: {click: function() { alert("it works!"); } }},
    {text: "Ipsum", weight: 9, link: "http://jquery.com/"},
    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
    {text: "Sit", weight: 7},
    {text: "Amet", weight: 5},
    {text: "Lorem", weight: 15, html:{style: "cursor: pointer;"}, handlers: {click: function() { alert("it works!"); } }},
    {text: "Ipsum", weight: 9, link: "http://jquery.com/"},
    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
    {text: "Sit", weight: 7},
    {text: "Amet", weight: 5},
    {text: "Lorem", weight: 15, html:{style: "cursor: pointer;"}, handlers: {click: function() { alert("it works!"); } }},
    {text: "Ipsum", weight: 9, link: "http://jquery.com/"},
    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
    {text: "Sit", weight: 7},
    {text: "Amet", weight: 5}
    // ...as many words as you want
  ];
  $("#wordcloud").jQCloud(word_array, {
      height: 350,
      autoResize: true,
      shape: 'rectangular'
  });

  var resizeTimer;
  $(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
       $('#wordcloud').css("width", "90%");
        $('#wordcloud').empty().jQCloud(word_array, {
            height: 350,
            autoResize: true,
            shape: 'rectangular'
        });
    }, 250);

  });
});
