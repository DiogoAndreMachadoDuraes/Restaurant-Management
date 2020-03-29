
<?php

    use function src\slimConfiguration;
    use App\Controllers\Ementa_Controller;

    $app->Select('/Funcionario',FuncionarioController::class . 'Select');
    $app->Insert('/Funcionario',FuncionarioController::class . 'Insert');
    $app->Update('/Funcionario',FuncionarioController::class . 'Update');
    $app->Delete('/Funcionario',FuncionarioController::class . 'Delete');

    $app->Select('/Alergenio',AlergenioController::class . 'Select');
    $app->Insert('/Alergenio',AlergenioController::class . 'Insert');
    $app->Update('/Alergenio',AlergenioController::class . 'Update');
    $app->Delete('/Alergenio',AlergenioController::class . 'Delete');

    $app->Select('/Fatura',FaturaController::class . 'Select');
    $app->Insert('/Fatura',FaturaController::class . 'Insert');
    $app->Update('/Fatura',FaturaController::class . 'Update');
    $app->Delete('/Fatura',FaturaController::class . 'Delete');

    $app->Select('/Gestor',GestorController::class . 'Select');
    $app->Insert('/Gestor',GestorController::class . 'Insert');
    $app->Update('/Gestor',GestorController::class . 'Update');
    $app->Delete('/Gestor',GestorController::class . 'Delete');

    $app->Select('/Info_nutricional',Info_nutricionalController::class . 'Select');
    $app->Insert('/Info_nutricional',Info_nutricionalController::class . 'Insert');
    $app->Update('/Info_nutricional',Info_nutricionalController::class . 'Update');
    $app->Delete('/Info_nutricional',Info_nutricionalController::class . 'Delete');

    $app->Select('/Menu',MenuController::class . 'Select');
    $app->Insert('/Menu',MenuController::class . 'Insert');
    $app->Update('/Menu',MenuController::class . 'Update');
    $app->Delete('/Menu',MenuController::class . 'Delete');

    $app->Select('/Prato',PratoController::class . 'Select');
    $app->Insert('/Prato',PratoController::class . 'Insert');
    $app->Update('/Prato',PratoController::class . 'Update');
    $app->Delete('/Prato',PratoController::class . 'Delete');

    $app->Select('/Restaurante',RestauranteController::class . 'Select');
    $app->Insert('/Restaurante',RestauranteController::class . 'Insert');
    $app->Update('/Restaurante',RestauranteController::class . 'Update');
    $app->Delete('/Restaurante',RestauranteController::class . 'Delete');

    $app->Select('/Takeaway',TakeawayController::class . 'Select');
    $app->Insert('/Takeaway',TakeawayController::class . 'Insert');
    $app->Update('/Takeaway',TakeawayController::class . 'Update');
    $app->Delete('/Takeaway',TakeawayController::class . 'Delete');



    $app->run();

?>
