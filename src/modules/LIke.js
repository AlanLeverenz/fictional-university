import $ from 'jquery';

class Like {

  // constructor
  constructor() {
    this.events();
  }


  // events
  events() {
    $('.like-box').on("click", this.ourClickDispatcher.bind(this));
  }

  // methods
  ourClickDispatcher(e) {
    var currentLikeBox = $(e.target).closest("like-box");
    //gets nearest parent with "like-box" selector

    if (currentLikeBox.data('exists') == 'yes') {
      this.deleteLike();
    } else {
      this.createLike();
    }

  }

  createLike() {
    alert("create test message");
  }

  deleteLike() {
    alert("delete test message");
  }
}

export default Like;