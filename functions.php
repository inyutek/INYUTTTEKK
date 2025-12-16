<?php
/**
 * Functions for Inyutek Figma Theme (Full with Icons)
 */

function inyutek_figma_enqueue_assets() {
  wp_enqueue_style(
    'inyutek-figma-inter',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    array(),
    null
  );

  wp_enqueue_style(
    'inyutek-figma-style',
    get_stylesheet_uri(),
    array('inyutek-figma-inter'),
    wp_get_theme()->get('Version')
  );
}
add_action( 'wp_enqueue_scripts', 'inyutek_figma_enqueue_assets' );
