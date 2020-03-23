<!DOCTYPE html>

<html>
<head>

</head>
<body>

<?php

    include_once 'alergenio.php';
    include_once 'prato.php';
    include_once 'info_nutricional.php';
    include_once 'menu.php';
    include_once 'gestor.php';
    include_once 'funcionario.php';
    include_once 'restaurante.php';
    include_once 'fatura.php';
    include_once 'takeaway.php';

    alergenio::Select();
    prato::Select();
    info_nutricional::Select();
    menu::Select();
    gestor::Select();
    funcionario::Select();
    restaurante::Select();
    fatura::Select();
    takeaway::Select();

?>

</body>
</html>