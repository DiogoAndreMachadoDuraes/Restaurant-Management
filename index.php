<?php

    use Slim\Factory\AppFactory;
    
    require __DIR__ . '/vendor/autoload.php';

    $app= AppFactory::create();
    $app->setBasePath("/Ementas-de-Restauracao/index.php");

    $middleware = require __DIR__ . '/app/middleware/index.php';
    $middleware($app);
    
    $routes = require __DIR__ .  '/app/routes/index.php';
    $routes($app);


    try {
        $app->run();
    }catch (Throwable $exception) {
        http_response_code(400);
        echo sprintf('Error Message: %s', $exception->getMessage());
    }

?>