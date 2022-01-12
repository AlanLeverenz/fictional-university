<?php 

add_action('rest_api_init', 'universityRegisterSearch');

fnction universityRegisterSearch() {
  // namespace, route, array with methods, callback function
  // WP_REST_SERVER::READABLE
  register_rest_route('university/v1', 'search', array(
    'methods' => 'GET',
    'callback' => 'universitySearchResults'
  ));
}

function universitySearchResults() {
  return 'Congratulations, you created a route.';
}

?>