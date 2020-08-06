<?php
/*
Template Name: News
*/
get_header();
?>
<?php get_router('news'); ?>

<main class="news">
    <section class="section list-section news-section">
      <div class="container section__container list-section__container">
        <div class="h2-wrapper">
          <div class="h2__line services-h2__line transition-line"></div>
          <h2 class="h2 news-h2">
            <span class="transition-span">
            <?php echo translateRusUaEn('Корпоративные новости', 'Корпоративні новини', 'Corporate news') ?>
            </span></h2>
          <div class="h2__line services-h2__line transition-line"></div>
        </div>
        <div class="list-section__list-items news__list-items transition-other">
        <?php   
          $args = array(
            'post_type' => 'news',
            'posts_per_page' => 50,
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
                  <div class="list-section__img-pic news-section__img-pic pli" data-bg="<?php echo get_field('изображение')['sizes']['large']; ?>"></div>
                </div>
                <div class="list-section__text">
                  <h3 class="h3 list-section__h"><?php the_title(); ?></h3>
                  <p class="list-section__d"><?php the_excerpt(); ?></p>
                  <span class="list-section__date"><?php echo get_the_date() ?></span>
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
        <?php btn(translateRusUaEn('Показать больше новостей', 'Більше новин', 'More news'), '', 'news-btn') ?>
      </div>
    </section>
    <section class="section c-list">
      <div class="container section__container c-list__container">
        <div class="h2-wrapper">
          <div class="h2__line services-h2__line"></div>
          <h2 class="h2 services-h2">Новости партнёров</h2>
          <div class="h2__line services-h2__line"></div>
        </div>
        <div class="c-list__items">
          <div class="c-list__line"></div>
          <a target='_blank' rel='noreferer noopener' href="#" class="c-list__item">
            <div class="c-list__overlay"></div>
            <div class="container__cols c-list__cols">
              <div class="container__l-col c-list__l-col">
                <div class="c-list__left-item">
                  <div class="h3 c-list__num">01</div>
                </div>
              </div>
              <div class="container__r-col c-list__r-col">
                <h4 class="h4 c-list__h4">Новости ЦТЛ</h4>
                <div class="c-list__arrow"><?php include get_theme_file_path('partials/svg/arrow.php' ); ?></div>
              </div>
            </div>
            <div class="c-list__line"></div>
          </a>
          <a target='_blank' rel='noreferer noopener' href="#" class="c-list__item">
            <div class="c-list__overlay"></div>
            <div class="container__cols c-list__cols">
              <div class="container__l-col c-list__l-col">
                <div class="c-list__left-item">
                  <div class="h3 c-list__num">02</div>
                </div>
              </div>
              <div class="container__r-col c-list__r-col">
                <h4 class="h4 c-list__h4">Новости УЗ</h4>
                <div class="c-list__arrow"><?php include get_theme_file_path('partials/svg/arrow.php' ); ?></div>
              </div>
            </div>
            <div class="c-list__line"></div>
          </a>
        </div>
      </div>
    </section>
  </main>

  <?php include get_theme_file_path('partials/components/footer.php' ); ?>

<?php get_footer(); ?> 
