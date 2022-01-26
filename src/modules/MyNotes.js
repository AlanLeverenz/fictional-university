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
    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', universityData.nonce);
      },
      url: universityData.root_url + '/wp-json/wp/v2/note/117',
      type: 'DELETE',
      success: (response) => {
        console.log("Congrats");
        console.log(response);
      },
      error: (response) => {
        console.log("Sorry");
        console.log(response);
      },
    });
  }
}

export default MyNotes;