<?php

namespace src;

    use Tuupola\Middleware\JwtAuthentication;

    function Jwt_Auth(): JwtAuthentication
    {
        return new JwtAuthentication([
            'secret' => getenv('JWT_SECRET_KEY'),
            'attribute' => 'jwt'
        ]);
    }

?>