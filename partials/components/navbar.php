<div class="navbar">
  <div class="container navbar__container">
    <div class="navbar__left">
      <a href="./" aria-label="KTL logo" class="navbar__logo">
        <?php include get_theme_file_path( 'partials/svg/logo.php' ); ?>
      </a>
      <div class="lang navbar__lang">
        <div class="navbar__lang-list dropdown">
          <a hreflang="<?php echo translateRusUaEn('ru', 'uk', 'en') ?>" data-router-disabled href="<?php echo showCurrentLangAtt('url',false);?>" class="navbar__link dropdown__btn">
          <?php echo translateRusUaEn('Ru', 'Ua', 'En') ?> <?php include get_theme_file_path( 'partials/svg/dropdown.php' ); ?>
          </a>
          <div class="dropdown__content">
            <a hreflang="<?php echo translateRusUaEn('uk', 'en', 'ru') ?>" data-router-disabled href="<?php echo showCurrentLangAtt('url',true);?>" class="navbar__link dropdown__link">
            <?php echo translateRusUaEn('Ua', 'En', 'Ru') ?>
            </a>
            <a hreflang="<?php echo translateRusUaEn('en', 'ru', 'uk') ?>" data-router-disabled href="<?php echo showCurrentLangAtt('url',true);?>" class="navbar__link dropdown__link">
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
            <a href="services.html" class="navbar__link dropdown__btn">
            <?php echo translateRusUaEn('Услуги', 'Послуги', 'Services') ?> 
            <?php include get_theme_file_path( 'partials/svg/dropdown.php' ); ?>
            </a>
            <div class="dropdown__content">
              <a href="./organization-of-transportation.html" class="navbar__link dropdown__link">
              <?php echo translateRusUaEn('Организация перевозок', 'Організація перевезень', 'Organization of transportation') ?> 
              
              </a>
              <a href="#" class="navbar__link dropdown__link">
              <?php echo translateRusUaEn('Аренда вагонов', 'Оренда вагонів', 'Railway wagons rental') ?> 
              </a>
              <a href="./carriage-repairs.html" class="navbar__link dropdown__link">
              <?php echo translateRusUaEn('Ремонт вагонов', 'Ремонт вагонів', 'Railway wagons repair') ?> 
              </a>
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