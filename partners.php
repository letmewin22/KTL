<?php
/*
Template Name: Partners
*/
get_header();
?>
<?php get_router('partners'); ?>

<header class="partners-header">

<div class="partners-header__content-wrapper">
  <div class="container partners-header__line-container">
    <div class="partners-header__line transition-line"></div>
  </div>
  <div class="transition-rails partners-header__transition-rails">
    <div class="transition-rails__items">
      <h1 class="h1 partners-header__h1 transition-rails__item">&nbsp;— <?php echo translateRusUaEn('Наши партнёры', 'Наші партнери', 'Our partners'); ?></h1>
      <div class="transition-rails__item">&nbsp;— <?php echo translateRusUaEn('Наши партнёры', 'Наші партнери', 'Our partners'); ?></div>
    </div>
  </div>
  <div class="container partners-header__line-container">
    <div class="partners-header__line transition-line"></div>
  </div>
</div>
<div class="container partners-header__container">
  <div class="container__cols">
    <div class="container__l-col"></div>
    <div class="container__r-col">
      <p class="partners-header__text transition-other"><?php echo get_field('описание'); ?></p>
      <div class="partners-header__line transition-other"></div>
    </div>
  </div>
</div>
</header>
<main>
<section class="section partners-section">
  <div class="container">
    <div class="partners-section__line"></div>
    <div class="partners-section__partners slider partners-slider">
      <div class="container__cols">
        <div class="container__l-col">
          <div class="partners-slider__ui">
            <div class="slider__counter partners-slider__counter">
              0<span class="slider__counter-cur partners-slider__counter-cur">1</span>/0<span class="slider__counter-total partners-slider__counter-total">2</span>
            </div>
            <nav class="slider__nav-item partners-slider__nav">
              <div class="slider__nav-item--left partners-slider__nav-item partners-slider__nav-item--left">
              <?php include get_theme_file_path('partials/svg/arrow.php' ); ?>
              </div>
              <div class="slider__nav-item--right partners-slider__nav-item partners-slider__nav-item--right">
              <?php include get_theme_file_path('partials/svg/arrow.php' ); ?>
              </div>
            </nav>
          </div>
        </div>
        <div class="container__r-col">
          <div class="partners-slider__slides-wrapper">
            <div class="slider__slides partners-slider__slides">
              <div class="slider__slide partners-slider__slide">
                <div class="partners-slider__slide-item disabled">
                  <?php include get_theme_file_path( 'partials/logos/1.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled">
                <?php include get_theme_file_path( 'partials/logos/2.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled big-svg">
                <?php include get_theme_file_path( 'partials/logos/3.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled">
                <?php include get_theme_file_path( 'partials/logos/4.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled big-svg">
                <?php include get_theme_file_path( 'partials/logos/5.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled">
                <?php include get_theme_file_path( 'partials/logos/6.php' ); ?>
                </div>
              </div>
              <div class="slider__slide partners-slider__slide">
                <div class="partners-slider__slide-item disabled">
                <?php include get_theme_file_path( 'partials/logos/7.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled big-svg">
                <?php include get_theme_file_path( 'partials/logos/8.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled big-svg">
                <?php include get_theme_file_path( 'partials/logos/9.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled">
                <?php include get_theme_file_path( 'partials/logos/10.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled big-svg">
                <?php include get_theme_file_path( 'partials/logos/11.php' ); ?>
                </div>
                <div class="partners-slider__slide-item disabled">
                <?php include get_theme_file_path( 'partials/logos/12.php' ); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partners-section__line"></div>
  </div>
</section>
<?php
    $header = translateRusUaEn('Мы просчитаем стоимость и сроки перевозки вашего груза.', 'Ми прорахуємо вартість та сроки транспортування вашого грузу', 'We will calculate the cost and terms of transportation of your cargo.');

  form($header) ?>
</main>

<?php include get_theme_file_path('partials/components/footer.php' ); ?>

<?php get_footer(); ?>