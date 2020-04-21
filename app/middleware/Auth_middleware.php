<?php

namespace App\Middleware;

    use Psr\Http\Message\{
        ResponseInterface as Response,
        ServerRequestInterface as Request,
    };

    final class Auth_middleware
    {
        public function __invoke(Request $request, Response $response, $next)
        {
            $token = $request->getAttribute('jwt');
            $expireDate = new \DateTime($token['expiredDate']);
            $now = new \DateTime();
            if($expireDate < $now )
                return $response->withStatus(401);
            $response=$next($request, $response);
            return $response;
        }
    }
?>