<section class="section form-section contacts-pop-up-section">
  <div class="container section__container form-section__container contacts-pop-up-section__container custom">
    <div class="contacts-pop-up-section__header">
      <div class="contacts-pop-up-section__header-content">
        <h3 class="h3 contacts-pop-up-section__h3">
        <?php echo translateRusUaEn('Контакты', 'Контакти', 'Contacts') ?>
        </h3>
        <div class="contacts-pop-up-section__close"><?php include get_theme_file_path( 'partials/svg/close.php' ); ?>
        </div>
      </div>
      <div class="contacts-pop-up-section__line contacts-pop-up-section__line"></div>
    </div>
    <div class="container__cols">
      <div class="container__l-col">
        <div class="form-section__contacts">
          <div class="form-section__v-line contacts-pop-up-section__v-line"></div>
          <div class="form-section__contacts-wrapper contacts-pop-up-section__contacts-wrapper">
            <div class="form-section__sticky-wrapper">
              <?php   
                $args = array(
                  'post_type' => 'contacts',
                  'posts_per_page' => 1,
                  'order' => 'ASC'
                );    
                $my_query = new WP_Query( $args ); 
                  if ( $my_query->have_posts() ) {
                    while ( $my_query->have_posts() ) {
                        $my_query->the_post();
                ?>
              <div class="form-section__contact contacts-pop-up-section__contact">
                <h4 class="h4 form-section__contact-h">
                <?php echo translateRusUaEn('Адрес', 'Адреса', 'Adress') ?>
                </h4>
                <a target='_blank' rel='noreferer noopener' href="<?php echo get_field('ссылка_на_гугл_карты'); ?>" class="form-section__contact-link">
                  <?php echo get_field('адрес_компании'); ?>
                </a>
              </div>
              <div class="form-section__contact contacts-pop-up-section__contact">
                <h4 class="h4 form-section__contact-h">
                <?php echo translateRusUaEn('Директор', 'Директор', 'CEO') ?>
                </h4>
                <div class="form-section__contact-link">
                <?php echo get_field('имя_директора'); ?>
                </div>
                <a target='_blank' rel='noreferer noopener' href="tel:<?php echo preg_replace('/\D+/', '', get_field('телефон_директора'));?>" class="form-section__contact-link">
                <?php echo get_field('телефон_директора'); ?> 
                </a>
              </div>
              <div class="form-section__contact contacts-pop-up-section__contact">
                <h4 class="h4 form-section__contact-h">
                <?php echo translateRusUaEn('Телефоны', 'Телефони', 'Phones') ?>
                </h4>
                <a target='_blank' rel='noreferer noopener' href="tel:<?php echo preg_replace('/\D+/', '', get_field('телефон_компании'));?>" class="form-section__contact-link">
                <?php echo get_field('телефон_компании'); ?> 
                </a>
                <a target='_blank' rel='noreferer noopener' href="tel:<?php echo preg_replace('/\D+/', '', get_field('факс_компании'));?>" class="form-section__contact-link">
                <?php echo get_field('факс_компании'); ?> (<?php echo translateRusUaEn('факс', 'факс', 'fax') ?>)
                </a>
              </div>
              <div class="form-section__contact contacts-pop-up-section__contact">
                <h4 class="h4 form-section__contact-h">E-mail</h4>
                <a target='_blank' rel='noreferer noopener' href="mailto:<?php echo get_field('почта_компании'); ?>" class="form-section__contact-link">
                <?php echo get_field('почта_компании'); ?>
                </a>
                <a target='_blank' rel='noreferer noopener' href="mailto:<?php echo get_field('почта_директора'); ?>" class="form-section__contact-link">
                <?php echo get_field('почта_директора'); ?>
                </a>
              </div>
              <?php             
                  }  
                }       
                wp_reset_postdata(); 
              ?>
            </div>
          </div>
        </div>

      </div>
      <div class="container__r-col">
        <div class="form-section__right">
          <div class="form-section__v-line contacts-pop-up-section__v-line"></div>
          <div class="form-section__right-content contacts-pop-up-section__right-content">
            <h2 class="h2 form-section__h2 contacts-pop-up-section__h2">Будем рады ответить на ваши вопросы</h2>
            <div class="form-section__form-wrapper">
              <form data-url="./mail.php" class="form" name="form" novalidate>
                <!-- Hidden Required Fields -->
                <input type="hidden" name="project_name" value="KTL">
                <input type="hidden" name="admin_email" value="hello@emotion-agency.com">
                <input type="hidden" name="form_subject" value="Заявка с окна контактов">
                <!-- END Hidden Required Fields -->
                <div class="form__inputs">
                  <div class="form__input-wrapper">
                    <input type="text" class="form__text-field" maxlength="256" name="name" id="name2">
                    <label for="name2" class="form__label">
                      <span class="form__label-content">Имя</span>
                    </label>
                  </div>
                  <div class="form__input-wrapper">
                    <input type="text" class="form__text-field" maxlength="256" name="company" id="company2">
                    <label for="company2" class="form__label">
                      <span class="form__label-content">Компания</span>
                    </label>
                  </div>
                  <div class="form__input-wrapper">
                    <input type="email" class="form__text-field" maxlength="256" name="email" id="email2">
                    <label for="email2" class="form__label">
                      <span class="form__label-content">E-mail</span>
                    </label>
                  </div>
                  <div class="form__input-wrapper">
                    <input type="tel" class="form__text-field" maxlength="256" name="phone" id="phone2">
                    <label for="phone2" class="form__label">
                      <span class="form__label-content required">Телефон *</span>
                    </label>
                    <span data-value="3" class="form__validate-text">минимум <span class="koef-inp"></span> цифры.
                      Осталось: <span class="koef-outp"></span></span>
                  </div>
                </div>
                <?php btn('Отправить заявку', 'submit', 'btn--white') ?>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>