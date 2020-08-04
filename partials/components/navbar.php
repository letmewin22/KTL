<div class="navbar">
  <div class="container navbar__container">
    <div class="navbar__left">
      <a href="./" aria-label="KTL logo" class="navbar__logo">
        <?php include get_theme_file_path( 'partials/svg/logo.php' ); ?>
      </a>
      <div class="lang navbar__lang">
        <div class="navbar__lang-list dropdown">
          <a data-router-disabled href="<?php echo showCurrentLangAtt('url',false);?>" class="navbar__link dropdown__btn">
          <?php echo translateRusUaEn('Ru', 'Ua', 'En') ?> <?php include get_theme_file_path( 'partials/svg/dropdown.php' ); ?>
          </a>
          <div class="dropdown__content">
            <a data-router-disabled href="<?php echo showCurrentLangAtt('url',true);?>" class="navbar__link dropdown__link">
            <?php echo translateRusUaEn('Ua', 'En', 'Ru') ?>
            </a>
            <a data-router-disabled href="<?php echo showCurrentLangAtt('url',true);?>" class="navbar__link dropdown__link">
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
            <a href="services.html" class="navbar__link dropdown__btn">Услуги <?php include get_theme_file_path( 'partials/svg/dropdown.php' ); ?></a>
            <div class="dropdown__content">
              <a href="./organization-of-transportation.html" class="navbar__link dropdown__link">Организация перевозок</a>
              <a href="#" class="navbar__link dropdown__link">Аренда вагонов</a>
              <a href="./carriage-repairs.html" class="navbar__link dropdown__link">Ремонт вагонов</a>
            </div>
          </li>
          <li class="navbar__list-item">
            <a href="./about.html" class="navbar__link">О нас</a>
          </li>
          <li class="navbar__list-item">
            <a href="./documents.html" class="navbar__link">Документы</a>
          </li>
          <li class="navbar__list-item">
            <a href="./partners.html" class="navbar__link">Партнёры</a>
          </li>
          <li class="navbar__list-item">
            <a href="./news.html" class="navbar__link">Новости</a>
          </li>
          <li class="navbar__list-item">
            <a href="./contacts.html" data-transition="contacts" class="navbar__link">Контакты</a>
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