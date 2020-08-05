<?php
/*
Template Name: Services
*/
get_header();
?>
<?php get_router('services'); ?>

<main class="services">
    <section class="section list-section">
      <div class="container section__container list-section__container">
        <div class="h2-wrapper">
          <div class="h2__line services-h2__line transition-line"></div>
          <h2 class="h2 services-h2">
          <span class="transition-span">
          <?php echo translateRusUaEn('Услуги', 'Послуги', 'Services') ?>
          </span>
          </h2>
          <div class="h2__line services-h2__line transition-line"></div>
        </div>
        <div class="list-section__list-items services__list-items transition-other">
        <?php   
          $args = array(
            'post_type' => 'services',
            'posts_per_page' => 5,
            'order' => 'ASC'
          );    
          $my_query = new WP_Query( $args ); 
            if ( $my_query->have_posts() ) {
              while ( $my_query->have_posts() ) {
                  $my_query->the_post();
          ?>
            <a href="<?php the_permalink() ?>" class="list-section__list-item">
              <div class="list-section__line"></div>
              <div class="list-section__overlay"></div>
              <div class="list-section__list-item-content">
                <div class="list-section__left">
                  <div class="list-section__img">
                    <div class="list-section__img-pic pli" data-bg="<?php echo get_field('изображение')['sizes']['large']; ?>"></div>
                  </div>
                  <div class="list-section__text">
                    <h3 class="h3 list-section__h"><?php the_title(); ?></h3>
                    <p class="list-section__d"><?php echo get_field('описание_услуги'); ?></p>
                  </div>
                </div>
                <div class="list-section__right"><?php include get_theme_file_path('partials/svg/arrow.php' ); ?></div>
              </div>
            </a>
            <?php             
        }  
      }       
      wp_reset_postdata(); 
    ?>
        </div>
      </div>
    </section>
  </main>

<?php include get_theme_file_path('partials/components/footer.php' ); ?>

<?php get_footer(); ?>