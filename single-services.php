<?php
get_header();
?>
<?php get_router('service'); ?>

<header class="service-header">
  <div class="container service-header__container">
    <div class="service-header__content">
      <div class="service-header__top">
        <div class="service-header__line transition-line"></div>
        <div class="service-header__line-after transition-other">
          <span class="service-header__line-after-content"><?php echo translateRusUaEn('быстро', 'швидко', 'fast') ?></span>
          <span class="service-header__line-after-content"><?php echo translateRusUaEn('надёжно', 'надійно', 'securely') ?></span>
          <span class="service-header__line-after-content">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.58826 9.95291L5.58826 0.0705566L4.41179 0.0705566L4.41179 9.95291H5.58826Z" fill="#7B7B7B" />
              <path d="M10 5.9294L5 11.9294L4.17647 10.9412L9.17647 4.94116L10 5.9294Z" fill="#7B7B7B" />
              <path d="M0.823548 4.94116L5.82355 10.9412L5.00002 11.9294L1.90735e-05 5.9294L0.823548 4.94116Z"
                fill="#7B7B7B" />
            </svg>
          </span>
        </div>
      </div>
      <div class="service-header__medium">
        <h1 class="h1 service-header__h1">
          <span class="service-header__h1-text service-header__scroller">
            <span class='transition-span'><?php echo get_field('первая_строка_заголовка'); ?></span>
          </span>
          <span class="service-header__h1-text service-header__h1-text--second service-header__scroller">
            <span class='transition-span'><?php echo get_field('вторая_строка_заголовка'); ?></span>
          </span>
        </h1>
        <p class="service-header__desc scroller-parallax transition-text"> <?php echo get_field('описание_возле_заголовка'); ?></p>
      </div>
      <div class="service-header__bottom">
        <div class="service-header__line transition-line"></div>
      </div>
    </div>
    <div class="service-header__arrow"><?php include get_theme_file_path( 'partials/svg/down-arrow.php' ); ?></div>
</header>
<main>
  <section class="section default-section">
    <div class="container section__container">
    <?php h2(get_field('второй_экран_заголовок')) ?>
      <div class="container__cols">
        <div class="container__l-col"></div>
        <div class="container__r-col">
          <?php echo get_field('второй_экран_текст'); ?>
          <div class="section__after-line a-line"></div>
        </div>
      </div>
    </div>
  </section>
  <div class="full-screen-img">
    <div class="full-screen-img__img-wrapper">
      <div class="full-screen-img__img pli" data-bg="<?php echo get_template_directory_uri();?>/img/services/1-big.jpg"></div>
    </div>
  </div>
  <section class="section steps-section">
    <div class="container section__container">
      <?php h2('Как заказать перевозку?') ?>
      <p class="section__bold-text a-p steps-section__bold-text">Мы перевозим строительные материалы, металлы, насыпные и пищевые грузы.</p>
      <div class="steps-section__draggable">
        <div class="steps-section__items">
          <div class="steps-section__item a-item">
            <h4 class="h4 steps-section__h">Шаг №1</h4>
            <div class="steps-section__line"></div>
            <p class="steps-section__text">Вы оставляете заявку, где указываете вид груза, сроки перевозки, а также
              станции отправления-назначения.</p>
          </div>
          <div class="steps-section__item a-item">
            <h4 class="h4 steps-section__h">Шаг №2</h4>
            <div class="steps-section__line"></div>
            <p class="steps-section__text">Заключаем договор: согласно утверждённого графика предоставляем вагоны для
              вывоза груза.</p>
          </div>
          <div class="steps-section__item a-item">
            <h4 class="h4 steps-section__h">Шаг №3</h4>
            <div class="steps-section__line"></div>
            <p class="steps-section__text">Отправляем вагоны на станцию назначения и через программное обеспечение
              отслеживаем их в пути следования.</p>
          </div>
        </div>
      </div>
      <div class="steps-section__big-line a-line">
        <div class="steps-section__rail">
          <div class="steps-section__scrollthumb"></div>
        </div>
      </div>
      <div class="container__cols steps-section__cols">
        <div class="container__l-col">
          <p class="section__bold-text a-p steps-section__med-text">В договоре мы закрепляем свои обязанности обеспечить вас подвижным составом согласно предоставленной заявки. </p>
        </div>
        <div class="container__r-col">
        <?php btn('Заявка на перевозку', '', 'default-section__btn c-btn a-btn') ?>
        </div>
      </div>
      <div class="steps-section__after-line a-line"></div>
    </div>
  </section>
  <div class="transition-rails">
    <div class="transition-rails__items">
    <?php for ($i=0; $i < 2; $i++) { 
      ?>
      <div class="transition-rails__item">&nbsp;— <?php echo get_field('первая_строка_заголовка').'&nbsp;'; echo get_field('вторая_строка_заголовка'); ?></div>
    <?php } ?>
    </div>
  </div>
  <?php
    $terms = get_terms(['taxonomy' => 'ads_tax', 'name' => get_the_title() , 'pad_counts' => 1, 'parent' => 0, 'hide_empty' => false, 'post_per_page' => 125 ]);
        foreach ($terms as $term):
          $args = ['post_type' => 'sa', 'posts_per_page' => 20, 'orderby' => 'id', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'ads_tax', 'field' => 'term_id', 'terms' => $term->term_id, 'include_children' => false, ], ], ];
            $posts_with_term = new WP_Query($args);
              if ( $posts_with_term->have_posts() ) {
  ?>
  <section class="section accordeon-section dark-section">
    <div class="container section__container accordeon-section__container">
      <?php h2(translateRusUaEn('Дополнительные услуги', 'Додаткові послуги', 'Additional services')) ?>
      <div class="accordeon-section__items">
        <div class="accordeon-section__line a-line"></div>
        <?php
          $terms = get_terms(['taxonomy' => 'ads_tax', 'name' => get_the_title() , 'pad_counts' => 1, 'parent' => 0, 'hide_empty' => false, 'post_per_page' => 125 ]);
              foreach ($terms as $term):
                $args = ['post_type' => 'sa', 'posts_per_page' => 20, 'orderby' => 'id', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'ads_tax', 'field' => 'term_id', 'terms' => $term->term_id, 'include_children' => false, ], ], ];
                    $posts_with_term = new WP_Query($args);
                      while ($posts_with_term->have_posts()):
                          $posts_with_term->the_post();
                          $counter++;
                          ?>
        <div class="accordeon-section__item">
          <div class="accordeon-section__overlay"></div>
          <div class="container__cols accordeon-section__cols a-item">
            <div class="container__l-col accordeon-section__l-col">
              <div class="h3 accordeon-section__num">0<?php echo $counter ?></div>
            </div>
            <div class="container__r-col accordeon-section__r-col">
              <h4 class="h4 accordeon-section__h4"><?php echo get_field('название_услуги'); ?></h4>
              <div class="accordeon-section__arrow"><?php include get_theme_file_path('partials/svg/arrow.php' ); ?></div>
            </div>
          </div>
          <div class="accordeon-section__text">
          <?php echo get_field('описание_услуги'); ?>
          </div>
          <div class="accordeon-section__line a-line"></div>
        </div>
        <?php
          endwhile;
            wp_reset_postdata();
            endforeach;
        ?>
      </div>
    </div>
  </section>
  <?php             
        }      
      wp_reset_postdata(); 
    endforeach;
    ?>
  <section class="section v-list-section">
    <div class="container section__container v-list-section__container">
    <?php h2('Особенности перевозок', 'v-list-section__h2 half-size-h2') ?>
      <div class="container__cols">
        <div class="container__l-col"></div>
        <div class="container__r-col">
          <div class="v-list-section__items">
            {% for item in items.serviceItems %}
            <div class="v-list-section__item a-item">
              <h4 class="h4 v-list-section__h">{{item.heading}}</h4>
              <div class="v-list-section__line"></div>
              <p class="v-list-section__text a-p">{{item.desc}}</p>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section default-section relative-section">
    <div class="container section__container">
      <?php h2(translateRusUaEn('Другие услуги', 'Інші послуги', 'Other services')) ?>
      <div class="container__cols relative-section__cols">
        <div class="container__l-col">
          <p class="section__bold-text a-p a-sticky">
          <?php echo translateRusUaEn('Предоставляем комплекс услуг по транспортировке грузов и обслуживанию подвижного состава', 'Надаємо комплекс послуг з транспортування вантажів та обсулговуванню рухомого складу', 'We provide a range of services for the transportation of goods and maintenance of rolling stock') ?>
         </p>
        </div>
        <div class="container__r-col">
          <div class="relative-section__items">
          <?php
                global $post;
                $current_category = get_the_category(); 
              $args = array(
                  'cat' => $current_category[0]->cat_ID,
                  'post__not_in'   => array($post->ID),
                  'post_type' => 'services',
                  'posts_per_page' => 20
              );    
              $my_query = new WP_Query( $args ); 
              if ( $my_query->have_posts() ) {
                  while ( $my_query->have_posts() ) {
                      $my_query->the_post();
                      ?>
            <a href="<?php the_permalink();?>" class="relative-section__item">
              <div class="relative-section__line a-line"></div>
              <div class="relative-section__overlay"></div>
              <div class="relative-section__content a-item">
                <h4 class="h4"><?php echo the_title();?></h4>
                <div class="relative-section__arrow">
                <?php include get_theme_file_path('partials/svg/arrow.php' ); ?>
                </div>
              </div>
            </a>
          <?php             
            }            
              }      
            wp_reset_postdata(); 
          ?>
          </div>
          <div class="section__after-line relative-section__after-line a-line"></div>
        </div>
      </div>
    </div>
  </section>
  <?php
    $header = translateRusUaEn('Мы просчитаем стоимость и сроки перевозки вашего груза.', 'Ми прорахуємо вартість та сроки транспортування вашого грузу', 'We will calculate the cost and terms of transportation of your cargo.');

  form($header) ?>
</main>
<?php include get_theme_file_path('partials/components/footer.php' ); ?>

<?php get_footer(); ?>