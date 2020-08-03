<!DOCTYPE html>
<html lang="uk" class="custom loading">

<head>
    <meta charset="utf-8">
    <title>{% if title %}{{ title }}{% else %}Template{% endif %}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#242424">
    <link rel="icon" href="img/metaicons/favicon.ico" type="image/x-icon">
    <meta name="description" content="{% if description %}{{ description }}{% else %}Template{% endif %}">
    <meta property="og:title" content="{% if title %}{{ title }}{% else %}Template{% endif %}">
    <meta property="og:description" content="{% if description %}{{ description }}{% else %}Template{% endif %}">
    <!-- BEGIN styles -->
    <link rel="stylesheet" media="all" href="<?php echo get_template_directory_uri(); ?>/css/app.e1596193207050.css">
    <!-- END styles -->
</head>

