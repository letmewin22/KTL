<?php

function upload_allow_types( $mimes ) {
	// разрешаем новые типы
	$mimes['svg']  = 'text/plain'; // image/svg+xml
	$mimes['svg'] = 'image/svg+xml';
	$mimes['doc']  = 'application/msword'; 
	$mimes['woff'] = 'font/woff';
	$mimes['psd']  = 'image/vnd.adobe.photoshop'; 
	$mimes['djv']  = 'image/vnd.djvu';
	$mimes['djvu'] = 'image/vnd.djvu';

	return $mimes;
}
add_filter( 'upload_mimes', 'upload_allow_types' );

function webp_upload_mimes( $existing_mimes ) {
	// add webp to the list of mime types
	$existing_mimes['webp'] = 'image/webp';

	// return the array back to the function with our added mime type
	return $existing_mimes;
}
add_filter( 'mime_types', 'webp_upload_mimes' );

function mytheme_customize_register( $wp_customize ) {
	/*
	Добавляем секцию в настройки темы
	*/
	$wp_customize->add_section(
		'data_site_section',
		array(
			'title' => 'Даные о компании',
			'capability' => 'edit_theme_options',
			'description' => "Здесь можно указать данные о компании"
		)
	);

	$wp_customize->add_setting(
		'company_adress',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'company_adress_control',
		array(
			'type' => 'text',
			'label' => "Адресс компании",
			'section' => 'data_site_section',
			'settings' => 'company_adress'
		)
	);
	
	$wp_customize->add_setting(
		'company_map_link',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'company_map_link_control',
		array(
			'type' => 'text',
			'label' => "Ссылка на гугл картах",
			'section' => 'data_site_section',
			'settings' => 'company_map_link'
		)
	);



	}
	add_action( 'customize_register', 'mytheme_customize_register' );



function onwp_disable_content_editor() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	if( !isset( $post_id ) ) return;
	$template_file = get_post_meta($post_id, '_wp_page_template', true);
			if ( $template_file == 'about.php' ) {
			remove_post_type_support( 'page', 'editor' );
			} elseif ( $template_file == 'main.php' ){
				remove_post_type_support( 'page', 'editor' );
			} elseif ( $template_file == 'contacts.php' ){
				remove_post_type_support( 'page', 'editor' );
			} elseif ( $template_file == 'review.php' ){
				remove_post_type_support( 'page', 'editor' );
			} elseif ( $template_file == 'services.php' ){
				remove_post_type_support( 'page', 'editor' );
			} elseif($template_file == 'singular.php'){
				remove_post_type_support( 'page', 'editor' );
			} elseif($template_file == 'single-services.php'){
				remove_post_type_support( 'page', 'editor' );
			}
			
	}
add_action( 'admin_init', 'onwp_disable_content_editor' );


add_action('admin_menu', 'remove_admin_menu');
function remove_admin_menu() {
	remove_menu_page('edit.php'); // Посты блога
	remove_menu_page('edit-comments.php'); // Комментарии	

}


function showCurrentLangAtt($langVal, $currentSwitch){
	$translations = pll_the_languages(array('raw'=>1)); 
	if (!$currentSwitch){
			if ($translations['uk']['current_lang']){
					return $translations['uk'][$langVal];
			} elseif ($translations['en']['current_lang']){
					return $translations['en'][$langVal];
			} elseif ($translations['ru']['current_lang']){
				return $translations['ru'][$langVal];
		}; 
	} else {
			if (!$translations['uk']['current_lang']){
					return $translations['uk'][$langVal];
			} elseif (!$translations['en']['current_lang']){
					return $translations['en'][$langVal]; 
				} elseif (!$translations['ru']['current_lang']){
						return $translations['ru'][$langVal];
			};   
	}
}
function translateRusUaEn($rus, $ua, $en){
$translations = pll_the_languages(array('raw'=>1)); 
if ($translations['uk']['current_lang']){
	return $ua;
} elseif ($translations['en']['current_lang']){
	 return $en;
} elseif ($translations['ru']['current_lang']){
	return $rus;
};  
}

function wpb_mce_buttons_2($buttons) {
	array_unshift($buttons, 'styleselect');
	return $buttons;
}
add_filter('mce_buttons_2', 'wpb_mce_buttons_2');


function my_mce_before_init_insert_formats( $init_array ) {

	// Определяем массив style_formats
	
		$style_formats = array(
			// Каждый дочерний элемент  - формат со своими собственными настройками
			array(
				'title' => 'Текст секции',
				'block' => 'p',
				'classes' => array('section__text', 'a-p'),
				'wrapper' => false
			),
			array(
				'title' => 'Цитата',
				'block' => 'blockquote',
				'classes' => array('review__quote', 'a-p'),
				'wrapper' => false
			)
		);
		// Вставляем массив, JSON ENCODED, в 'style_formats'
		$init_array['style_formats'] = json_encode( $style_formats );
	
		return $init_array;
	
	}
	// Прикрепляем вызов к 'tiny_mce_before_init'
	add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' );
?>
