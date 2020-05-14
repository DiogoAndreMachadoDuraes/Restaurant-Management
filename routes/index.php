<?php

    use Slim\Factory\AppFactory;
    use App\Controllers\{
        Auth_controller,
        Cartao_fidelizacao_controller,
        Cliente_controller,
        Compra_extra_controller,
        Compra_menu_controller,
        Ementa_controller,
        Extra_controller,
        Refeicao_semanal_controller,
        Reserva_controller,
        Utilizador_controller,
        Funcionario_controller,
        Alergenio_controller,
        Gestor_controller,
        Fatura_controller,
        Info_nutricional_controller,
        Menu_controller,
        Prato_controller,
        Restaurante_controller,
        Takeaway_controller
    };
    use App\DAO\{
        Token_dao
    };
    use App\Middleware\{
        Auth_middleware
        //Middleware
    };
    
    use function src\Jwt_Auth;

    require __DIR__ . '/../vendor/autoload.php';

    $app = AppFactory::create();

    $app->setBasePath("/Ementas-de-Restauracao/routes/index.php");

    $app->addRoutingMiddleware();

    $app->addErrorMiddleware(true, true, true);

    /*$settings['error_handler_middleware'] = [
        'display_error_details' => getenv('display_error_details'),
    ];*/

/*
    $app->post('/register', Utilizador_controller::class . ':Insert');

    $app->post('/login', Auth_controller::class. ':login');
    $app->post('/refreshToken', Auth_controller::class . ':refreshToken');
*/
    $app->get('/Reserva', Reserva_controller::class . ':Select');

/*
    $app->group('/clientelogin', function() use($app) {
        $app->put('/clientechanges', Utilizador_controller::class . ':Update');
        $app->delete('/delete', Utilizador_controller::class . ':Delete');

        $app->get('/Reserva', Reserva_controller::class . ':Select');
        $app->post('/Reserva', Reserva_controller::class . ':Insert');
        $app->put('/Reserva', Reserva_controller::class . ':Update');
        $app->delete('/Reserva', Reserva_controller::class . ':Delete');

        $app->get('/Cartao_fidelizacao', Cartao_fidelizacao_controller::class . ':Select');
        $app->get('/Cliente', Cliente_controller::class . ':Select');
        $app->get('/Compra_extra', Compra_extra_controller::class . ':Select');
        $app->get('/Compra_menu', Compra_menu_controller::class . ':Select');
        $app->get('/Ementa', Ementa_controller::class . ':Select');
        $app->get('/Extra', Extra_controller::class . ':Select');
        $app->get('/Refeicao_semanal', Refeicao_semanal_controller::class . ':Select');
        $app->get('/Funcionario',Funcionario_controller::class . 'Select');
        $app->get('/Fatura',Fatura_controller::class . 'Select');
        $app->get('/Alergenio',Alergenio_controller::class . 'Select');
        $app->get('/Info_nutricional',Info_nutricional_controller::class . 'Select');
        $app->get('/Menu',Menu_controller::class . 'Select');
        $app->get('/Prato',Prato_controller::class . 'Select');
        $app->get('/Restaurante',Restaurante_controller::class . 'Select');
        $app->get('/Takeaway',Takeaway_controller::class . 'Select');

    })  ->add(new Auth_middleware())
        ->add(Jwt_Auth());
    
    $app->group('/gestorlogin', function() use($app) {
        $app->get('/Cartao_fidelizacao', Cartao_fidelizacao_controller::class . ':Select');
        $app->post('/Cartao_fidelizacao', Cartao_fidelizacao_controller::class . ':Insert');
        $app->put('/Cartao_fidelizacao', Cartao_fidelizacao_controller::class . ':Update');
        $app->delete('/Cartao_fidelizacao', Cartao_fidelizacao_controller::class . ':Delete');

        $app->get('/Cliente', Cliente_controller::class . ':Select');
        $app->post('/Cliente', Cliente_controller::class . ':Insert');
        $app->put('/Cliente', Cliente_controller::class . ':Update');
        $app->delete('/Cliente', Cliente_controller::class . ':Delete');

        $app->get('/Compra_extra', Compra_extra_controller::class . ':Select');
        $app->post('/Compra_extra', Compra_extra_controller::class . ':Insert');
        $app->put('/Compra_extra', Compra_extra_controller::class . ':Update');
        $app->delete('/Compra_extra', Compra_extra_controller::class . ':Delete');

        $app->get('/Compra_menu', Compra_menu_controller::class . ':Select');
        $app->post('/Compra_menu', Compra_menu_controller::class . ':Insert');
        $app->put('/Compra_menu', Compra_menu_controller::class . ':Update');
        $app->delete('/Compra_menu', Compra_menu_controller::class . ':Delete');

        $app->get('/Ementa', Ementa_controller::class . ':Select');
        $app->post('/Ementa', Ementa_controller::class . ':Insert');
        $app->put('/Ementa', Ementa_controller::class . ':Update');
        $app->delete('/Ementa', Ementa_controller::class . ':Delete');

        $app->get('/Extra', Extra_controller::class . ':Select');
        $app->post('/Extra', Extra_controller::class . ':Insert');
        $app->put('/Extra', Extra_controller::class . ':Update');
        $app->delete('/Extra', Extra_controller::class . ':Delete');

        $app->get('/Refeicao_semanal', Refeicao_semanal_controller::class . ':Select');
        $app->post('/Refeicao_semanal', Refeicao_semanal_controller::class . ':Insert');
        $app->put('/Refeicao_semanal', Refeicao_semanal_controller::class . ':Update');
        $app->delete('/Refeicao_semanal', Refeicao_semanal_controller::class . ':Delete');

        $app->get('/Reserva', Reserva_controller::class . ':Select');
        $app->post('/Reserva', Reserva_controller::class . ':Insert');
        $app->put('/Reserva', Reserva_controller::class . ':Update');
        $app->delete('/Reserva', Reserva_controller::class . ':Delete');

        $app->get('/Funcionario',Funcionario_controller::class . 'Select');
        $app->post('/Funcionario',Funcionario_controller::class . 'Insert');
        $app->put('/Funcionario',Funcionario_controller::class . 'Update');
        $app->delete('/Funcionario',Funcionario_controller::class . 'Delete');

        $app->get('/Alergenio',Alergenio_controller::class . 'Select');
        $app->post('/Alergenio',Alergenio_controller::class . 'Insert');
        $app->put('/Alergenio',Alergenio_controller::class . 'Update');
        $app->delete('/Alergenio',Alergenio_controller::class . 'Delete');

        $app->get('/Fatura',Fatura_controller::class . 'Select');
        $app->post('/Fatura',Fatura_controller::class . 'Insert');
        $app->put('/Fatura',Fatura_controller::class . 'Update');
        $app->delete('/Fatura',Fatura_controller::class . 'Delete');

        $app->get('/Gestor',Gestor_controller::class . 'Select');
        $app->post('/Gestor',Gestor_controller::class . 'Insert');
        $app->put('/Gestor',Gestor_controller::class . 'Update');
        $app->delete('/Gestor',Gestor_controller::class . 'Delete');

        $app->get('/Info_nutricional',Info_nutricional_controller::class . 'Select');
        $app->post('/Info_nutricional',Info_nutricional_controller::class . 'Insert');
        $app->put('/Info_nutricional',Info_nutricional_controller::class . 'Update');
        $app->delete('/Info_nutricional',Info_nutricional_controller::class . 'Delete');

        $app->get('/Menu',Menu_controller::class . 'Select');
        $app->post('/Menu',Menu_controller::class . 'Insert');
        $app->put('/Menu',Menu_controller::class . 'Update');
        $app->delete('/Menu',Menu_controller::class . 'Delete');

        $app->get('/Prato',Prato_controller::class . 'Select');
        $app->post('/Prato',Prato_controller::class . 'Insert');
        $app->put('/Prato',Prato_controller::class . 'Update');
        $app->delete('/Prato',Prato_controller::class . 'Delete');

        $app->get('/Restaurante',Restaurante_controller::class . 'Select');
        $app->post('/Restaurante',Restaurante_controller::class . 'Insert');
        $app->put('/Restaurante',Restaurante_controller::class . 'Update');
        $app->delete('/Restaurante',Restaurante_controller::class . 'Delete');

        $app->get('/Takeaway',Takeaway_controller::class . 'Select');
        $app->post('/Takeaway',Takeaway_controller::class . 'Insert');
        $app->put('/Takeaway',Takeaway_controller::class . 'Update');
        $app->delete('/Takeaway',Takeaway_controller::class . 'Delete');

        $app->post('/Token',Token_dao::class . 'Insert');

        $app->put('/gestorchanges', Utilizador_controller::class . ':Update');
        $app->delete('/delete', Utilizador_controller::class . ':Delete');

    })  ->add(new Auth_middleware())
        ->add(Jwt_Auth());
*/
    $app->run();
?>