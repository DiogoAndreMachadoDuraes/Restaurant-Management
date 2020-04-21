<?php

    use Slim\Factory\AppFactory;
    use App\Controllers\{
        Auth_controller,
        Cartaofidelizacao_controller,
        Cliente_controller,
        Compraextra_controller,
        Compramenu_controller,
        Ementa_controller,
        Extra_controller,
        RefeicaoSemanal_controller,
        Reserva_controller,
        Usuario_controller,
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
    use App\Middleware\{
        Auth_middleware
        //Middleware
    };
    use function src\Jwt_Auth;

    require __DIR__ . '/../vendor/autoload.php';

    $app = AppFactory::create();

    $app->addRoutingMiddleware();

    $errorMiddleware = $app->addErrorMiddleware(true, true, true);

    $app->post('/register', Usuario_controller::class . ':Insert');

    $app->post('/login', Auth_controller::class. ':login');
    $app->post('/refreshToken', Auth_controller::class . ':refreshToken');

    //$app->get('/test', function() {})
    //    ->add(new Auth_middleware())
    //    ->add(Jwt_Auth());

    $app->group('/usuariologin', function() use($app) {
        //user changes
        $app->put('/usuariochanges', Usuario_controller::class . ':Update');

        //eliminar conta
        $app->delete('/delete', Usuario_controller::class . ':Delete');

    }) ->add(new Auth_middleware())
        ->add(Jwt_Auth());
    
    $app->group('/gestorlogin', function() use($app) {

        $app->get('/Cartaofidelizacao', Cartaofidelizacao_controller::class . ':Select');
        $app->post('/Cartaofidelizacao', Cartaofidelizacao_controller::class . ':Insert');
        $app->put('/Cartaofidelizacao', Cartaofidelizacao_controller::class . ':Update');
        $app->delete('/Cartaofidelizacao', Cartaofidelizacao_controller::class . ':Delete');

        $app->get('/Cliente', Cliente_controller::class . ':Select');
        $app->post('/Cliente', Cliente_controller::class . ':Insert');
        $app->put('/Cliente', Cliente_controller::class . ':Update');
        $app->delete('/Cliente', Cliente_controller::class . ':Delete');

        $app->get('/Compraextra', Compraextra_controller::class . ':Select');
        $app->post('/Compraextra', Compraextra_controller::class . ':Insert');
        $app->put('/Compraextra', Compraextra_controller::class . ':Update');
        $app->delete('/Compraextra', Compraextra_controller::class . ':Delete');

        $app->get('/Compramenu', Compramenu_controller::class . ':Select');
        $app->post('/Compramenu', Compramenu_controller::class . ':Insert');
        $app->put('/Compramenu', Compramenu_controller::class . ':Update');
        $app->delete('/Compramenu', Compramenu_controller::class . ':Delete');

        $app->get('/Ementa', Ementa_controller::class . ':Select');
        $app->post('/Ementa', Ementa_controller::class . ':Insert');
        $app->put('/Ementa', Ementa_controller::class . ':Update');
        $app->delete('/Ementa', Ementa_controller::class . ':Delete');

        $app->get('/Extra', Extra_controller::class . ':Select');
        $app->post('/Extra', Extra_controller::class . ':Insert');
        $app->put('/Extra', Extra_controller::class . ':Update');
        $app->delete('/Extra', Extra_controller::class . ':Delete');

        $app->get('/RefeicaoSemanal', RefeicaoSemanal_controller::class . ':Select');
        $app->post('/RefeicaoSemanal', RefeicaoSemanal_controller::class . ':Insert');
        $app->put('/RefeicaoSemanal', RefeicaoSemanal_controller::class . ':Update');
        $app->delete('/RefeicaoSemanal', RefeicaoSemanal_controller::class . ':Delete');

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

    });

    $app->run();

?>