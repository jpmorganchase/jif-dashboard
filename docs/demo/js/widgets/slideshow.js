
module.exports = function(id) {
	var extended = {
		title: 'slide show',
		size: 'third',
		widgetId: id,

		hideLink: true,

		template: _.template(
								'<div class="slideshow-container">'+


  '<div class="mySlides fade">'+
    '<div class="numbertext">1 / 3</div>'+
    '<img src="img1.jpg" style="width:100%">'+
    '<div class="text">Caption Text</div>'+
  '</div>'

  '<div class="mySlides fade">'+
    '<div class="numbertext">2 / 3</div>'+
    '<img src="img2.jpg" style="width:100%">'+
    '<div class="text">Caption Two</div>'+
  '</div>'+

  '<div class="mySlides fade">'+
    '<div class="numbertext">3 / 3</div>'+
    '<img src="img3.jpg" style="width:100%">'+
    '<div class="text">Caption Three</div>'+
  '</div>'+

  '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>'+
  '<a class="next" onclick="plusSlides(1)">&#10095;</a>'+
'</div>'+
'<br>'+
'<div style="text-align:center">'+
  '<span class="dot" onclick="currentSlide(1)"></span>'+
  '<span class="dot" onclick="currentSlide(2)"></span>'+
  '<span class="dot" onclick="currentSlide(3)"></span>'+
'</div>'
),

		render: function() {
			Dashboard.render.widget(this.name, this.shell.tpl);

			this.fetch();

			$('#widget-' + this.shell.id).css({
				'height': '240px',
				'margin-bottom': '10px',
				'overflow-x': 'hidden',
				'width': '100%'
			}).html( this.template() );

			this.postRender();
			$(document).trigger("WidgetInternalEvent", ["widget|rendered|" + this.name]);
		}
	};

	var widget = _.extend({}, widgetRoot, extended);

	// register presence with screen manager
	Dashboard.addWidget(widget);
};
