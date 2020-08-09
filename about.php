<?php
/*
Template Name: About
*/
get_header();
?>
<?php get_router('about'); ?>

<header class="about-header">
  <div class="container about-header__container">
    <div class="about-header__content-wrapper">
      <div class="about-header__train transition-other">
        <?php include get_theme_file_path( 'partials/svg/train.php' ); ?>
      </div>
      <h1 class="about-header__h1"><?php echo get_field('заголовок_на_первом_экране'); ?></h1>
      <div class="about-header__line transition-line"></div>
    </div>
  </div>
  <div class="about-header__arrow"><?php include get_theme_file_path( 'partials/svg/down-arrow.php' ); ?></div>
</header>
<main>
  <div class="section default-section no-margin transition-other">
    <div class="container section__container no-margin__container">
      <div class="container__cols">
        <div class="container__l-col"></div>
        <div class="container__r-col">
          <div class="section__before-line"></div>
          <?php echo get_field('описание_после_первого_экрана'); ?>
          <div class="section__after-line"></div>
        </div>
      </div>
    </div>
  </div>
  <section class="section list-section team">
    <div class="container section__container list-section__container">
      <?php h2(translateRusUaEn('Команда', 'Команда', 'Team')) ?>
      <div class="list-section__list-items team__items">
      <?php   
          $args = array(
            'post_type' => 'team',
            'posts_per_page' => 12,
            'order' => 'ASC'
          );    
          $my_query = new WP_Query( $args ); 
            if ( $my_query->have_posts() ) {
              while ( $my_query->have_posts() ) {
                  $my_query->the_post();
          ?>
        <div class="list-section__list-item a-item">
          <div class="list-section__line"></div>
          <div class="list-section__list-item-content">
            <div class="list-section__left">
              <div class="list-section__img">
                <div class="list-section__img-pic team__img-pic pli" data-bg="<?php echo get_field('фото_участника')['sizes']['large']; ?>"></div>
              </div>
              <div class="list-section__text">
                <h3 class="h3 list-section__h"><?php the_title(); ?></h3>
                <p class="list-section__d a-p"><?php echo get_field('должность_участника'); ?></p>
              </div>
            </div>
          </div>
        </div>
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
  <?php $numbers_items = get_field('blok_cifr');
  if($numbers_items) : ?>
  <section class="section numbers-section dark-section">
    <div class="container section__container numbers-section__container">
    <?php h2(translateRusUaEn('КТЛ в цифрах', 'КТЛ в цифрах', 'KTL in numbers') , 'numbers-section__h2') ?>
      <div class="numbers-section__items">
        <div class="numbers-section__item numbers-section__item--1 numbers-section__item--big a-titem">
          <div class="numbers-section__num"><?php echo $numbers_items['pervyj_jelement']['cifra'] ?></div>
          <div class="numbers-section__details"><?php echo $numbers_items['pervyj_jelement']['opisanie'] ?></div>
        </div>
        <div class="numbers-section__item numbers-section__item--2 a-titem">
          <div class="numbers-section__num"><?php echo $numbers_items['vtoroy_jelement']['cifra'] ?></div>
          <div class="numbers-section__details"><?php echo $numbers_items['vtoroy_jelement']['opisanie'] ?></div>
        </div>
        <div class="numbers-section__item numbers-section__item--3 a-titem">
          <div class="numbers-section__num"><?php echo $numbers_items['tretij_jelement']['cifra'] ?></div>
          <div class="numbers-section__details"><?php echo $numbers_items['tretij_jelement']['opisanie'] ?></div>
        </div>
        <div class="numbers-section__item numbers-section__item--4 numbers-section__item--big a-titem">
          <div class="numbers-section__num"><?php echo $numbers_items['chetvjortyj_jelement']['cifra'] ?></div>
          <div class="numbers-section__details"><?php echo $numbers_items['chetvjortyj_jelement']['opisanie'] ?></div>
        </div>

        <div class="numbers-section__item numbers-section__item--5 a-titem">
          <div class="numbers-section__num"><?php echo $numbers_items['pjatyj_jelement']['cifra'] ?></div>
          <div class="numbers-section__details"><?php echo $numbers_items['pjatyj_jelement']['opisanie'] ?></div>
        </div>
      </div>
    </div>
  </section>
  <?php endif ?>
  <section class="section default-section cooperation-section">
    <div class="container section__container default-section__container cooperation-section__container last">
      <?php h2(translateRusUaEn('Принципы сотрудничества', 'Принципи співпраці', 'Principles of cooperation'),'half-size-h2')
      ?>
      <div class="container__cols">
        <div class="container__l-col">
        <?php btn(translateRusUaEn('Обсудить сотрудничество', 'Обговорити співпрацю', 'Discuss cooperation'), '', 'a-btn c-btn a-sticky default-section__btn') ?>
      </div>
        <div class="container__r-col">
          <?php echo get_field('principy_sotrudnichestva_tekst'); ?>
          <div class="default-section-img a-titem">
          <picture>
              <source
                srcset="<?php echo preg_replace('/\.+jpg|\.png/m', '.webp', get_field('principy_sotrudnichestva_foto')['sizes']['large']);  ?>"
                type="image/webp">
                <img src="<?php echo get_field('principy_sotrudnichestva_foto')['sizes']['large']; ?>" alt="KTL team">
            </picture>
          </div>
          <h3 class="h3 default-section__h3 a-titem"><?php echo get_field('principy_sotrudnichestva_zhirnyj_tekst'); ?></h3>
          <div class="section__after-line a-line"></div>
        </div>
      </div>
    </div>
  </section>
</main>

<?php include get_theme_file_path('partials/components/footer.php' ); ?>

<?php get_footer(); ?>