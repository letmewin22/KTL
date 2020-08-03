<?php
/*
Template Name: Service
*/
get_header();
?>
<?php router('service'); ?>

<header class="main-header">
  <div class="container main-header__container">
    <div class="main-header__content">
      <div class="main-header__top">
        <span class="main-header__scroller">
          <span class='transition-span'>Kargo</span></span>
        <h1 data-move="main-header__m-h1-wrapper,1,560" class="main-header__h1 scroller-parallax transition-text">
          Грузовые ЖД-перевозки. Быстро. Надёжно. Без сложностей.</h1>
      </div>
      <div class="main-header__bottom">
        <span class="main-header__scroller">
          <span class='transition-span'>TransLogistic</span></span></div>
    </div>
    <div class="main-header__line-wrapper">
      <div class="main-header__train transition-other">
        <?php include get_theme_file_path( 'partials/svg/train.php' ); ?>
      </div>
      <div class="main-header__line transition-line"></div>
      <div class="main-header__line transition-line"></div>
      <div class="main-header__line transition-line"></div>
    </div>
    <div class="main-header__m-h1-wrapper"></div>
  </div>
  <div class="main-header__arrow"><?php include get_theme_file_path( 'partials/svg/down-arrow.php' ); ?></div>
</header>
<main>
  <section class="section default-section">
    <div class="container section__container default-section__container">
      <?php h2('Мы перевозим любые грузы ЖД-транспортом', 'half-size-h2') ?>
      <div class="container__cols">
        <div class="container__l-col">
          <a href="./about.html" class="btn a-btn a-sticky default-section__btn">
            <div class="btn__text-wrapper">
              <?php for ($i = 0; $i < 4; $i++) { 
                ?>
              <span class="btn__text">Больше о компании</span>
              <?php
              } ?>
            </div>
            <div class="btn__overlay"></div>
          </a>
        </div>
        <div class="container__r-col">
          <p class="section__text a-p">КАРГОТРАНСЛОДЖИСТИК — компания-экспедитор в сфере грузовых железнодорожных
            перевозок. Предоставляем полный комплекс услуг с информационным сопровождением: от организации перевозок до
            ремонта и продажи вагонов.</p>
          <p class="section__text a-p">Помогаем компаниям быстро, надёжно и без проблем доставить груз из точки А в
            точку Б. Сопровождаем любой процесс, связанный с грузовыми ЖД-перевозками.</p>
          <div class="section__after-line a-line"></div>
        </div>
      </div>
    </div>
  </section>
  <div class="full-screen-img">
    <div class="full-screen-img__img-wrapper">
      <div class="full-screen-img__img pli" data-bg="<?php echo get_template_directory_uri();?>/img/1.jpg"></div>
    </div>
  </div>
  <section class="section list-section">
    <div class="container section__container list-section__container">
      <h2 class="h2 a-h2">Услуги</h2>
      <div class="list-section__list-items">
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
        <a href="<?php the_permalink() ?>" class="list-section__list-item a-item">
          <div class="list-section__line"></div>
          <div class="list-section__overlay"></div>
          <div class="list-section__list-item-content">
            <div class="list-section__left">
              <div class="list-section__img">
                <div class="list-section__img-pic pli" data-bg="<?php echo get_field('изображение')['sizes']['large']; ?>"></div>
              </div>
              <div class="list-section__text">
                <h3 class="h3 list-section__h"><?php the_title(); ?></h3>
                <p class="list-section__d a-p"><?php echo get_field('описание_услуги'); ?></p>
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
  <div class="transition-rails">
    <div class="transition-rails__items">
      <div class="transition-rails__item">&nbsp;— KargoTransLogistic</div>
      <div class="transition-rails__item">&nbsp;— KargoTransLogistic</div>
    </div>
  </div>
  <section class="section v-list-section dark-section">
    <div class="container section__container v-list-section__container">
      <?php h2('Преимущества', 'v-list-section__h2-arrow') ?>
      <div class="container__cols">
        <div class="container__l-col">
          <p class="section__bold-text a-p a-sticky">Мы берём на себя ответственность доставить ваш груз точно в срок.
            Работаем круглосуточно, 365 дней в году.</p>
        </div>
        <div class="container__r-col">
          <div class="v-list-section__items">
            <div class="v-list-section__item a-item">
              <h4 class="h4 v-list-section__h">Быстро</h4>
              <div class="v-list-section__line"></div>
              <p class="v-list-section__text a-p">Грузовые ЖД-перевозки — самый быстрый способ перевезти большое
                количество груза сухопутным путём.</p>
            </div>
            <div class="v-list-section__item a-item">
              <h4 class="h4 v-list-section__h">Выгодно</h4>
              <div class="v-list-section__line"></div>
              <p class="v-list-section__text a-p">При перевозках на средние и дальние расстояния, железнодорожные
                перевозки дешевле автомобильных.</p>
            </div>
            <div class="v-list-section__item a-item">
              <h4 class="h4 v-list-section__h">Удобно</h4>
              <div class="v-list-section__line"></div>
              <p class="v-list-section__text a-p">Все услуги в одном месте: от полного сопровождения любого этапа
                организации перевозок до отслеживания груза.</p>
            </div>
            <div class="v-list-section__item a-item">
              <h4 class="h4 v-list-section__h">Безопасно</h4>
              <div class="v-list-section__line"></div>
              <p class="v-list-section__text a-p">Ваш груз в безопасности: мы используем программное обеспечение, чтобы
                отслеживать, где находится груз.</p>
            </div>
            <div class="v-list-section__item a-item">
              <h4 class="h4 v-list-section__h">Понятно</h4>
              <div class="v-list-section__line"></div>
              <p class="v-list-section__text a-p">Вам не нужно разбираться в сложной документации и договариваться с
                железной дорогой — мы уже всё подготовили.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section default-section review-section">
    <div class="container section__container">
      <?php h2('Наши партнёры — промышленные предприятия, торговые компании и другие виды бизнеса.') ?>
      <div class="container__cols">
        <div class="container__l-col">
          <p class="section__bold-text a-p a-sticky">Гарантия вывоза груза — залог успеха долгосрочных партнерских
            отношений.</p>
        </div>
        <div class="container__r-col">
          <a href="#" class="default-section__review review">
            <div class="review__overlay"></div>
            <div class="review__top">
              <div class="review__left">
                <div class="review__logo a-p">
                  <img class="pli" src="<?php echo get_template_directory_uri();?>/img/clients/1.png"
                    alt="clients__logo">
                </div>
                <div class="review__info">
                  <h3 class="h3 review__name a-p">Ринат Ахметов</h3>
                  <div class="review__company a-p">ООО МЕТИНВЕСТ</div>
                </div>
              </div>
              <div class="review__right"><?php include get_theme_file_path('partials/svg/arrow.php' ); ?></div>
            </div>
            <div class="review__bottom">
              <div class="review__quote a-p">«Перевозка грузов железнодорожным транспортом — это один из наиболее
                эффективных, безопасных и экономически выгодных видов перевозок грузов для сухопутного сообщения».</div>
            </div>
          </a>
          <div class="section__after-line a-line"></div>
        </div>
      </div>
    </div>
  </section>
  <?php include get_theme_file_path('partials/components/form.php' ); ?>
</main>
<?php include get_theme_file_path('partials/components/footer.php' ); ?>

<?php get_footer(); ?>