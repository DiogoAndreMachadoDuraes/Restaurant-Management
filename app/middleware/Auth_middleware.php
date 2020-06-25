<?php

namespace App\Middleware;

    use Psr\Http\Message\{
        ResponseInterface as Response,
        ServerRequestInterface as Request,
    };

    use Psr\Http\Server\RequestHandlerInterface as RequestHandler;

    final class Auth_middleware
    {
        public function __invoke(Request $request, RequestHandler $handler): Response
        {
            $token = $request->getAttribute('jwt');
            $expired_date = new \DateTime($token['expired_date']);
            $now = new \DateTime();
            if($expired_date < $now ){
                $response=new Response();
                return $response->withStatus(401); 
            }
            $response = $handler->handle($request);
            return $response;
        }
    }
?>