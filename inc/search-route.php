<?php 

add_action('rest_api_init', 'universityRegisterSearch');

function universityRegisterSearch() {
  // namespace, route, array with methods, callback function
  // WP_REST_SERVER::READABLE
  register_rest_route('university/v1', 'search', array(
    'methods' => 'GET',
    'callback' => 'universitySearchResults'
  ));
}

function universitySearchResults() {
  $professors = new WP_QUERY(array(
    'post_type' => 'professor'
  ));

  $professorResults = array();

  while($professors->have_posts()) {
    $professors->the_post();
    // array to add on to, what to add 
    array_push($professorResults, array(
      'title' => get_the_title(),
      'permalink' => get_the_permalink()
    ));
  }

  return $professorResults;

}

