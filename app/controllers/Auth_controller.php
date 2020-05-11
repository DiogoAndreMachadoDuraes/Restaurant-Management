<?php

namespace App\Controllers;

    use App\Models\Token;
    use App\DAO\Token_dao;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Utilizador_dao;
    use Firebase\JWT\JWT;

    final class Auth_controller
    {
        public function login(Request $request, Response $response, array $args): Response
        {
            $data=$request->getParsedBody();
            
            $email=$data['email'];
            $password=$data['password'];
            
            $utilizadordao= new Utilizador_dao();
            $utilizador=$utilizadordao->SelectByEmail($email);

            if(is_null($utilizador)){
                return $response->withStatus(401);
            } else {
                if(!password_verify($password, $utilizador->getPassword($password))){
                    return $response->withStatus(401);
                }
            }

            $expireDate=(new \DateTime())->modify('+7 days')->format('Y-M-D H:i:s');

            $tokenInside=[
                'id' => $utilizador->getId_utilizador(),
                'name' => $utilizador->getNome(),
                'email' => $utilizador->getEmail(),
                'expired_at' => $expireDate
            ]; 
            
            $token=JWT::encode($tokenInside, getenv('JWT_SECRET_KEY'));

            $refreshToken=[
                'email' => $utilizador->getEmail(),
                'random' => uniqid()
            ];

            $refreshToken=JWT::encode($refreshToken, getenv('JWT_SECRET_KEY'));

            $token= new Token();
            $token->setExpiredDate($expireDate)
                ->setRefreshToken($refreshToken)
                ->setToken($token)
                ->setId_Utilizador($utilizador->getId_utilizador());

            $tokendao= new Token_dao();
            $tokendao->Insert($token);

            $response->getBody()->write(([
                "token" => $token,
                "refreshToken" => $refreshToken
            ]));

            return $response;
        }

        public function refreshToken(Request $request, Response $response, array $args): Response
        {
            $data=$request->getParsedBody();
            $refreshToken=$data['refreshToken'];

            $tokenDecoded = JWT::decode($refreshToken, getenv('JWT_SECRET_KEY'), ['HS256']);
            
            $tokendao= new Token_dao();
            $exists=$tokendao->verifyRefreshToken($refreshToken);

            if(!$exists){
                return $response->withStatus(401);
            } 

            $utilizadordao = new Utilizador_dao();
            $utilizador=$utilizadordao->SelectByEmail($refreshToken->email);

            if(is_null($utilizador))
                return $response->withStatus(401);

            $expireDate=(new \DateTime())->modify('+7 days')->format('Y-M-D H:i:s');
            
            $tokenInside=[
                'id' => $utilizador->getId_utilizador(),
                'name' => $utilizador->getNome(),
                'email' => $utilizador->getEmail(),
                'expired_at' => $expireDate
            ]; 
            
            $token=JWT::encode($tokenInside, getenv('JWT_SECRET_KEY'));

            $refreshToken=[
                'email' => $utilizador->getEmail(),
                'random' => uniqid()
            ];

            $refreshToken=JWT::encode($refreshToken, getenv('JWT_SECRET_KEY'));

            $token= new Token();
            $token->setExpiredDate($expireDate)
                ->setRefreshToken($refreshToken)
                ->setToken($token)
                ->setId_Utilizador($utilizador->getId_utilizador());

            $tokendao= new Token_dao();
            $tokendao->Insert($token);

            $response->getBody()->write(([
                "token" => $token,
                "refreshToken" => $refreshToken
            ]));

            return $response;
        }
    }
?>