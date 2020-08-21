<div class="menu">
  <div class="menu__overlay"></div>
  <div class="container menu__container">
    <div class="menu-items__wrapper">
      <div class="menu__header">
        <div class="menu__header-content">
          <div class="menu__header-content-left">
            <h3 class="h3 menu__h3"><?php echo translateRusUaEn('Меню', 'Меню', 'Menu') ?></h3>
            <div class="lang menu__lang">
              <div class="menu__lang-list dropdown">
                <div class="menu__link dropdown__btn inline">
                <?php echo translateRusUaEn('Ru', 'Ua', 'En') ?> <?php include get_theme_file_path( 'partials/svg/dropdown.php' ); ?>
                </div>
                <div class="dropdown__content menu__dropdown-content">
                  <a hreflang="<?php echo translateRusUaEn('uk', 'en', 'ru') ?>" data-router-disabled href="<?php echo showCurrentLangAtt('url',true);?>" class="menu__link dropdown__link">
                  <?php echo translateRusUaEn('Ua', 'En', 'Ru') ?>
                  </a>
                  <a hreflang="<?php echo translateRusUaEn('en', 'ru', 'uk') ?>" data-router-disabled href="<?php echo showCurrentLangAtt('url',true);?>" class="menu__link dropdown__link">
                  <?php echo translateRusUaEn('En', 'Ru', 'Ua') ?>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="menu__close"><?php include get_theme_file_path( 'partials/svg/close.php' ); ?></div>
        </div>
        <div class="menu__line"></div>
      </div>
      <div class="menu__v-line"></div>
      <ul class="menu__items">
        <li class="menu__item">
          <a href="<?php echo get_nav_link('services') ?>" class="menu__link">
          <?php echo translateRusUaEn('Услуги', 'Послуги', 'Services') ?>
          </a>
        </li>
        <li class="menu__item">
          <a href="<?php echo get_nav_link('about') ?>" class="menu__link">
          <?php echo translateRusUaEn('О нас', 'Про нас', 'About') ?>
          </a>
        </li>
        <li class="menu__item">
          <a href="<?php echo get_nav_link('documents') ?>" class="menu__link">
          <?php echo translateRusUaEn('Документы', 'Документи', 'Documents') ?>
          </a>
        </li>
        <li class="menu__item">
          <a href="<?php echo get_nav_link('partners') ?>" class="menu__link">
          <?php echo translateRusUaEn('Партнёры', 'Партнери', 'Partners') ?>
          </a>
        </li>
        <li class="menu__item">
          <a href="<?php echo get_nav_link('news') ?>" class="menu__link">
          <?php echo translateRusUaEn('Новости', 'Новини', 'News') ?>
          </a>
        </li>
        <li class="menu__item">
          <a href="<?php echo get_nav_link('contacts') ?>" data-transition="contacts" class="menu__link">
          <?php echo translateRusUaEn('Контакты', 'Контакти', 'Contacts') ?>
          </a>
        </li>
      </ul>
      <div class="menu__v-line menu__v-line--after"></div>
    </div>

  </div>
</div>