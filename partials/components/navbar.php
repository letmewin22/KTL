<div class="navbar">
  <div class="container navbar__container">
    <div class="navbar__left">
      <a href="<?php $link = translateRusUaEn('/', '/uk/', '/en/'); echo get_site_url().$link?>" aria-label="KTL logo"
        class="navbar__logo">
        <?php include get_theme_file_path( 'partials/svg/logo.php' ); ?>
      </a>
      <div class="lang navbar__lang">
        <div class="navbar__lang-list dropdown">
          <a hreflang="<?php echo translateRusUaEn('ru', 'uk', 'en') ?>" data-router-disabled href="#"
            class="navbar__link dropdown__btn">
            <?php echo translateRusUaEn('Ru', 'Ua', 'En') ?>
            <?php include get_theme_file_path( 'partials/svg/dropdown.php' ); ?>
          </a>
          <div class="dropdown__content">
            <a hreflang="<?php echo translateRusUaEn('uk', 'en', 'ru') ?>" data-router-disabled href="#"
              class="navbar__link dropdown__link">
              <?php echo translateRusUaEn('Ua', 'En', 'Ru') ?>
            </a>
            <a hreflang="<?php echo translateRusUaEn('en', 'ru', 'uk') ?>" data-router-disabled href="#"
              class="navbar__link dropdown__link">
              <?php echo translateRusUaEn('En', 'Ru', 'Ua') ?>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar__right">
      <nav class="navbar__nav">
        <ul class="navbar__list">
          <li class="navbar__list-item dropdown">
            <a href="<?php $link = translateRusUaEn('services', 'services-uk', 'services-en'); echo get_site_url().'/'.$link?>"
              class="navbar__link dropdown__btn">
              <?php echo translateRusUaEn('Услуги', 'Послуги', 'Services') ?>
              <?php include get_theme_file_path( 'partials/svg/dropdown.php' ); ?>
            </a>
            <div class="dropdown__content">
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
              <a href="<?php the_permalink() ?>" class="navbar__link dropdown__link">
                <?php the_title(); ?>
              </a>
            <?php             
                }  
              }       
              wp_reset_postdata(); 
            ?>
            </div>
          </li>
          <li class="navbar__list-item">
            <a href="./about.html" class="navbar__link">
              <?php echo translateRusUaEn('О нас', 'Про нас', 'About') ?>
            </a>
          </li>
          <li class="navbar__list-item">
            <a href="./documents.html" class="navbar__link">
              <?php echo translateRusUaEn('Документы', 'Документи', 'Documents') ?>
            </a>
          </li>
          <li class="navbar__list-item">
            <a href="./partners.html" class="navbar__link">
              <?php echo translateRusUaEn('Партнёры', 'Партнери', 'Partners') ?>
            </a>
          </li>
          <li class="navbar__list-item">
            <a href="./news.html" class="navbar__link">
              <?php echo translateRusUaEn('Новости', 'Новини', 'News') ?>
            </a>
          </li>
          <li class="navbar__list-item">
            <a href="./contacts.html" data-transition="contacts" class="navbar__link">
              <?php echo translateRusUaEn('Контакты', 'Контакти', 'Contacts') ?>
            </a>
          </li>
        </ul>
      </nav>
      <div class="navbar__burger">
        <div class="navbar__burger-line"></div>
        <div class="navbar__burger-line"></div>
      </div>
    </div>
  </div>
</div>