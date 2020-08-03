<div class="menu">
  <div class="menu__overlay"></div>
  <div class="container menu__container">
    <div class="menu-items__wrapper">
      <div class="menu__header">
        <div class="menu__header-content">
          <div class="menu__header-content-left">
            <h3 class="h3 menu__h3">Меню</h3>
            <div class="lang menu__lang">
              <div class="menu__lang-list dropdown">
                <a href="#" class="menu__link dropdown__btn">Ru {% include "partials/svg/_dropdown.html" %}</a>
                <div class="dropdown__content menu__dropdown-content">
                  <a href="#" class="menu__link dropdown__link">Ua</a>
                  <a href="#" class="menu__link dropdown__link">En</a>
                </div>
              </div>
            </div>
          </div>
          <div class="menu__close">{% include "partials/svg/_close.html" %}</div>
        </div>
        <div class="menu__line"></div>
      </div>
      <div class="menu__v-line"></div>
      <ul class="menu__items">
        <li class="menu__item">
          <a href="services.html" class="menu__link">Услуги</a>
        </li>
        <li class="menu__item">
          <a href="./about.html" class="menu__link">О нас</a>
        </li>
        <li class="menu__item">
          <a href="./documents.html" class="menu__link">Документы</a>
        </li>
        <li class="menu__item">
          <a href="./partners.html" class="menu__link">Партнёры</a>
        </li>
        <li class="menu__item">
          <a href="./news.html" class="menu__link">Новости</a>
        </li>
        <li class="menu__item">
          <a href="./contacts.html" data-transition="contacts" class="menu__link">Контакты</a>
        </li>
      </ul>
      <div class="menu__v-line menu__v-line--after"></div>
    </div>

  </div>
</div>