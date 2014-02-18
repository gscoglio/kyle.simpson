var Widget = {
	init: function(width,height){
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	},
	render: function($where){
		if (this.$elem) {
			this.$elem.css({
				width: this.width + "px",
				height: this.height + "px"
			}).appendTo($where);
		}
	}
};

var Button = Object.create(Widget);

Button.create = function(width,height,label){
	// "super" constructor call
	this.init(width,height);
	this.label = label || "Default";

	this.$elem = $("<button>").text(this.label);
};
Button.addToPage = function($where) {
	// "super" call
	this.render($where);
	this.$elem.click(this.onClick.bind(this));
};
Button.onClick = function(evt) {
	console.log("Button '" + this.label + "' clicked!");
};

$(document).ready(function(){
	var $body = $(document.body);

	var btn1 = Object.create(Button);
	btn1.create(125,30,"Hello");

	var btn2 = Object.create(Button);
	btn2.create(150,40,"World");

	btn1.addToPage($body);
	btn2.addToPage($body);
});
