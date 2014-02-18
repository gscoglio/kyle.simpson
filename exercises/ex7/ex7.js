function NotesManager() {
	this.notes = [];
}

NotesManager.prototype.addNote = function(note) {
	this.$notes.prepend(
		$("<a href='#'></a>")
		.addClass("note")
		.text(note)
	);
};

NotesManager.prototype.addCurrentNote = function(){
	var current_note = this.$new_note.val();

	if (current_note) {
		this.notes.push(current_note);
		this.addNote(current_note);
		this.$new_note.val("");
	}
};

NotesManagers.prototype.showHelp = function(){
	this.$help.show();

	var self = this;

	document.addEventListener("click",function __handler__(evt){
		document.removeEventListener("click",__handler__,true);
		self.hideHelp();
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();
	},true);
};

NotesManager.prototype.hideHelp = function(){
	this.$help.hide();
};

NotesManager.prototype.loadData = function(data){
	for (var i=0; i<data.length; i++) {
		this.notes.push(data[i]);
	}
};

NotesManager.prototype.handleOpenHelp = function(evt){
	if (!this.$help.is(":visible")) {
		this.showHelp();
		return false;
	}
};

NotesManager.prototype.handleAddNote = function(evt){
	this.addCurrentNote();
};

NotesManager.prototype.handleEnter = function(evt){
	if (evt.which == 13) {
		this.addCurrentNote();
	}
};

NotesManager.prototype.handleDocumentClick = function(evt){
	this.$notes.removeClass("active");
	this.$notes.children(".note").removeClass("highlighted");
};

NotesManager.prototype.handleNoteClick = function(evt){
	evt.preventDefault();
	evt.stopPropagation();

	this.$notes.addClass("active");
	this.$notes.children(".note").removeClass("highlighted");
	$(evt.target).addClass("highlighted");
};


	function init(opts) {
		// cache references to the DOM elements we need to manage
		$notes = $(opts.notes);
		$new_note = $(opts.new_note);
		$add_note = $(opts.add_note);
		$help = $(opts.help);
		$open_help = $(opts.open_help);

		// build the initial list from the existing `notes` data
		var html = "";
		for (i=0; i<notes.length; i++) {
			html += "<a href='#' class='note'>" + notes[i] + "</a>";
		}
		$notes.html(html);

		// listen to "help" button
		$open_help.bind("click",handleOpenHelp.bind(this));

		// listen to "add" button
		$add_note.bind("click",handleAddNote);

		// listen for <enter> in text box
		$new_note.bind("keypress",handleEnter);

		// listen for clicks outside the notes box
		$(document).bind("click",handleDocumentClick);

		// listen for clicks on note elements
		$notes.on("click",".note",handleNoteClick);
	}


	var

		// DOM refs
		$notes,
		$new_note,
		$add_note,
		$help,
		$open_help,

		// module API
		publicAPI = {
			loadData: loadData,
			init: init
		}
	;

	return publicAPI;
})();


// assume this data came from the database
NotesManager.loadData([
	"This is the first note I've taken!",
	"Now is the time for all good men to come to the aid of their country.",
	"The quick brown fox jumped over the moon."
]);


$(document).ready(function(){
	NotesManager.init({
		notes: "#notes",
		new_note: "#note",
		add_note: "#add_note",
		help: "#help",
		open_help: "#open_help"
	});
});
