<?php

    use Slim\App;
    use Psr\Http\Message\ServerRequestInterface;
    use App\Exceptions\TestException;
    use Slim\Exception\HttpNotFoundException;
    use Slim\Psr7\Response;

    //use App\Middleware\HttpExceptionMiddleware;
    //use Slim\Middleware\ErrorMiddleware;
    //use App\Middleware\ErrorHandlerMiddleware;
    //use Throwable;     

    return function (App $app){

        $app->addRoutingMiddleware();

        //$app->add(ErrorHandlerMiddleware::class);

        $app->addBodyParsingMiddleware();
    
        $errorMiddleware = $app->addErrorMiddleware(true, true, true);
    
        $errorMiddleware->setErrorHandler(
            HttpNotFoundException::class,
            function (ServerRequestInterface $request, Throwable $exception, bool $displayErrorDetails) {
                $response = new Response();
                $response->getBody()->write('404 NOT FOUND');
                return $response->withStatus(404);
            }
        );
        $errorMiddleware->setErrorHandler(
            HttpMethodNotAllowedException::class,
            function (ServerRequestInterface $request, Throwable $exception, bool $displayErrorDetails) {
                $response = new Response();
                $response->getBody()->write('405 NOT ALLOWED');
                return $response->withStatus(405);
            }
        );
        $errorMiddleware->setErrorHandler(
            TestException::class,
            function (ServerRequestInterface $request, Throwable $exception, bool $displayErrorDetails) {
                $response = new Response();
                $response->getBody()->write('504 Gateway timeout');
                return $response->withStatus(504);
            }
        );
        $errorMiddleware->setErrorHandler(
            HttpInternalServerErrorException::class,
            function (ServerRequestInterface $request, Throwable $exception, bool $displayErrorDetails) {
                $response = new Response();
                $response->getBody()->write('500 Internal Server Error');
                return $response->withStatus(500);
            }
        );

        //$app->add(HttpExceptionMiddleware::class); 
        //$app->add(ErrorMiddleware::class);

    }
?>