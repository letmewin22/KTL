<?php
/*
Template Name: Contacts
*/
get_header();
?>
<?php get_router('contacts'); ?>

<main class="contacts-main">
<?php form(translateRusUaEn('Будем рады ответить на ваши вопросы', 'Будемо раді відповісти на ваші питання', 'We will be glad to answer your questions'), 'contacts-section') ?>
</main>


<?php include get_theme_file_path('partials/components/footer.php' ); ?>

<?php get_footer(); ?> 