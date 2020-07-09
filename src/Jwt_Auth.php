<?php

namespace src;

    use Tuupola\Middleware\JwtAuthentication;

    final class Jwt_Auth
    {
        static function jwtAuth(): JwtAuthentication
        {
            return new JwtAuthentication([
            'secret' => 'hdX2D3M99ZBQBIFy8jdsAwVHpRpupEWtZUh_CpCfPKE',
            'attribute' => 'jwt'
            ]);
        }
    }