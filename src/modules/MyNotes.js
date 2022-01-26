import $ from 'jquery';

class MyNotes {
  // constructor
  constructor() {
    this.events();
  }

  // events
  events() {
    $(".delete-note").on("click", this.deleteNote);
  }

  // methods
  deleteNote() {
    alert("you clicked delete");
  }
}

export default MyNotes;