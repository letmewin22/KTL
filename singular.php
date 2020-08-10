<?php
get_header();
?>
<?php get_router('post'); ?>
<main class="post">
  <section class="section default-section">
    <div class="container section__container default-section__container">
      <div class="h2-wrapper">
        <div class="h2__line services-h2__line transition-line"></div>
        <h2 class="h2 post-h2">
          <span class="transition-span"><?php the_title(); ?></span></h2>
        <div class="h2__line services-h2__line transition-line"></div>
      </div>
      <div class="container__cols">
        <div class="container__l-col">
          <div class="post__img">
            <picture>
              <source
                srcset="<?php echo preg_replace('/\.+jpg|\.png/m', '.webp', get_field('изображение')['sizes']['large']);  ?>"
                type="image/webp">
              <img src="<?php echo get_field('изображение')['sizes']['large']; ?>" alt="news-img">
            </picture>
          </div>
        </div>
        <div class="container__r-col">
          <?php the_content();?>
          <div class="section__after-line"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section list-section news-section">
    <div class="container section__container list-section__container">
      <div class="h2-wrapper">
        <div class="h2__line services-h2__line"></div>
        <h2 class="h2 news-h2">Другие новости</h2>
        <div class="h2__line services-h2__line"></div>
      </div>
      <div class="list-section__list-items news__list-items">
        <?php
                global $post;
                $current_category = get_the_category(); 
              $args = array(
                  'cat' => $current_category[0]->cat_ID,
                  'post__not_in'   => array($post->ID),
                  'post_type' => 'news',
                  'posts_per_page' => 6
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
                <div class="list-section__img-pic news-section__img-pic pli" data-bg="<?php echo get_field('изображение')['sizes']['large']; ?>"></div>
              </div>
              <div class="list-section__text">
                <h3 class="h3 list-section__h"><?php the_title(); ?></h3>
                <p class="list-section__d"><?php the_excerpt(); ?></p>
                <span class="list-section__date"><?php echo get_the_date() ?></span>
              </div>
            </div>
            <div class="list-section__right">><?php include get_theme_file_path('partials/svg/arrow.php' ); ?></div>
          </div>
        </a>
        <?php             
        }  
      }  else {
        echo  translateRusUaEn('Других новостей пока нет', 'Інших новин поки не має', 'Other news doesn\'t exist');
      }   
      wp_reset_postdata(); 
    ?>
      </div>
    </div>
  </section>
</main>

<?php include get_theme_file_path('partials/components/footer.php' ); ?>

<?php get_footer(); ?>