<?php
/*
Template Name: Documents
*/
get_header();
?>
<?php get_router('documents'); ?>

<main>
    <section class="section c-list">
      <div class="container section__container c-list__container">
        <div class="h2-wrapper">
          <div class="h2__line services-h2__line transition-line"></div>
          <h2 class="h2 services-h2">
            <span class="transition-span">
            <?php echo translateRusUaEn('Типовые договоры', 'Типові договори', 'Standard contracts') ?>
            </span></h2>
          <div class="h2__line services-h2__line transition-line"></div>
        </div>
        <div class="c-list__items transition-other">
          <div class="c-list__line"></div>
          <?php   
          $args = array(
            'post_type' => 'contract',
            'posts_per_page' => 50,
            'order' => 'ASC'
          );    
          $my_query = new WP_Query( $args ); 
            if ( $my_query->have_posts() ) {
              while ( $my_query->have_posts() ) {
                  $my_query->the_post();
          ?>
          <a target='_blank' rel='noreferer noopener' href="<?php echo get_field('файл_договора'); ?>" class="c-list__item">
            <div class="c-list__overlay"></div>
            <div class="container__cols c-list__cols">
              <div class="container__l-col c-list__l-col">
                <div class="c-list__left-item">
                  <div class="doc-icon" data-src="<?php echo get_template_directory_uri()?>/img/docicons/"></div>
                </div>
              </div>
              <div class="container__r-col c-list__r-col">
                <h4 class="h4 c-list__h4"><?php echo the_title();?></h4>
                <div class="c-list__arrow"><?php include get_theme_file_path('partials/svg/arrow.php' ); ?></div>
              </div>
            </div>
            <div class="c-list__line"></div>
          </a>
          <?php             
        }  
      }       
      wp_reset_postdata(); 
    ?>
        </div>
      </div>
    </section>
    <section class="section c-list">
      <div class="container section__container c-list__container last">
        <div class="h2-wrapper">
          <div class="h2__line services-h2__line "></div>
          <h2 class="h2 services-h2"><?php echo translateRusUaEn('Справочники', 'Довідники', 'Directories') ?></h2>
          <div class="h2__line services-h2__line"></div>
        </div>
        <div class="c-list__items">
          <div class="c-list__line"></div>
          <?php   
          $args = array(
            'post_type' => 'catalogs',
            'posts_per_page' => 50,
            'order' => 'ASC'
          );    
          $my_query = new WP_Query( $args ); 
            if ( $my_query->have_posts() ) {
              while ( $my_query->have_posts() ) {
                  $my_query->the_post();
          ?>
          <a target='_blank' rel='noreferer noopener' href="<?php echo get_field('ссылка'); ?>" class="c-list__item">
            <div class="c-list__overlay"></div>
            <div class="container__cols c-list__cols">
              <div class="container__l-col c-list__l-col">
                <div class="c-list__left-item">
                  <div class="doc-icon" data-src="<?php echo get_template_directory_uri()?>/img/docicons/"></div>
                </div>
              </div>
              <div class="container__r-col c-list__r-col">
                <h4 class="h4 c-list__h4"><?php echo the_title();?></h4>
                <div class="c-list__arrow"><?php include get_theme_file_path('partials/svg/arrow.php' ); ?></div>
              </div>
            </div>
            <div class="c-list__line"></div>
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