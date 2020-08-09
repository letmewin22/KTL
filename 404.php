<?php

get_header();

get_router('error');
?>

<header class="partners-header">

<div class="partners-header__content-wrapper">
  <div class="container partners-header__line-container">
    <div class="partners-header__line transition-line"></div>
  </div>
  <div class="transition-rails partners-header__transition-rails">
    <div class="transition-rails__items">
      <h1 class="h1 partners-header__h1 transition-rails__item">&nbsp;— <?php echo translateRusUaEn('404 Страница не найдена', '404 Сторінка не знайдена', 'Page not found') ?></h1>
      <div class="transition-rails__item">&nbsp;— 404 <?php echo translateRusUaEn('404 Страница не найдена', '404 Сторінка не знайдена', 'Page not found') ?></div>
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
      <p class="partners-header__text error-text transition-other">
      
      <?php $text = translateRusUaEn('Упс...похоже, что вы перешли по неправильной ссылке или страница, которую вы ищете была удалена. Рекомендуем вернуться на главную или написать нам на почту', 'Ойой...схоже, що ви перейшли по помилковому посиланню, або сторінка, котру ви шукаєте була видалена. Рекомендуємо повернутися на головну, або написати нам на пошту', 'Oops ... it looks like you followed the wrong link or the page you are looking for has been removed. We recommend that you return to the main page or write to us by mail') ?>
      <?php  echo $text?> <a href="mailto:ktl.disp@gmail.com">ktl.disp@gmail.com</a>
      </p>
      <a href="<?php echo get_site_url() ?>/ " class="btn default-section__btn error-btn">
            <div class="btn__text-wrapper">
              <?php for ($i = 0; $i < 4; $i++) { 
                ?>
              <span
                class="btn__text"><?php echo translateRusUaEn('Вернуться на главную', 'Повернутися на головну', 'Back to home') ?>
              </span>
              <?php
              } ?>
            </div>
            <div class="btn__overlay"></div>
          </a>
      <div class="partners-header__line transition-other"></div>
    </div>
  </div>
</div>
</header>

<?php get_footer(); ?>