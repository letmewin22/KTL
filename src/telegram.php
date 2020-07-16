<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Имя: ";
  }
}

$project_name = trim($_POST[""]);
 
if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефон: ";
  }
}
if (isset($_POST['email'])) {
  if (!empty($_POST['email'])){
  $email = strip_tags($_POST['email']);
  $emailFieldset = "Почта: ";
  }
}
if (isset($_POST['company'])) {
  if (!empty($_POST['company'])){
  $company = strip_tags($_POST['company']);
  $companyFieldset = "Компания: ";
  }
}
$token = "1122766282:AAGRTG_WQczl5eT2-wreG2CBzOFjwX1brns";
$chat_id = "-453712541";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $emailFieldset => $email,
  $companyFieldset => $company
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  
  echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
header ("Location: /");
}
 
?>