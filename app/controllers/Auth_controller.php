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
            
            $utilizador_dao= new Utilizador_dao();
            $utilizador=$utilizador_dao->SelectByEmail($email);

            if(is_null($utilizador)){
                return $response->withStatus(401);
            } else {
                if(!password_verify($password, $utilizador->getpassword($password))){
                    return $response->withStatus(401);
                }
            }

            $expired_date=(new \DateTime())->modify('+7 days')->format('Y-M-D H:i:s');

            $tokenInside=[
                'id_utilizador' => $utilizador->getid_utilizador(),
                'name' => $utilizador->getnome(),
                'email' => $utilizador->getemail(),
                'expired_at' => $expired_date
            ]; 
            
            $token=JWT::encode($tokenInside, getenv('JWT_SECRET_KEY'));

            $refresh_token=[
                'email' => $utilizador->getemail(),
                'random' => uniqid()
            ];

            $refresh_token=JWT::encode($refresh_token, getenv('JWT_SECRET_KEY'));

            $token= new Token();
            $token->set_expired_date($expired_date)
                ->set_refresh_token($refresh_token)
                ->set_token($token)
                ->set_id_utilizador($utilizador->getid_utilizador());

            $token_dao= new Token_dao();
            $token_dao->Insert($token);

            $response->getBody()->write(([
                "token" => $token,
                "refresh_token" => $refresh_token
            ]));

            return $response;
        }

        public function refresh_token(Request $request, Response $response, array $args): Response
        {
            $data=$request->getParsedBody();
            $refresh_token=$data['refresh_token'];

            $tokenDecoded = JWT::decode($refresh_token, getenv('JWT_SECRET_KEY'), ['HS256']);
            
            $token_dao= new Token_dao();
            $exists=$token_dao->verifyRefreshToken($refresh_token);

            if(!$exists){
                return $response->withStatus(401);
            } 

            $utilizador_dao = new Utilizador_dao();
            $utilizador=$utilizador_dao->SelectByEmail($refresh_token->email);

            if(is_null($utilizador))
                return $response->withStatus(401);

            $expired_date=(new \DateTime())->modify('+7 days')->format('Y-M-D H:i:s');
            
            $tokenInside=[
                'id' => $utilizador->getid_utilizador(),
                'name' => $utilizador->getnome(),
                'email' => $utilizador->getemail(),
                'expired_at' => $expired_date
            ]; 
            
            $token=JWT::encode($tokenInside, getenv('JWT_SECRET_KEY'));

            $refresh_token=[
                'email' => $utilizador->getemail(),
                'random' => uniqid()
            ];

            $refresh_token=JWT::encode($refresh_token, getenv('JWT_SECRET_KEY'));

            $token= new Token();
            $token->set_expired_date($expired_date)
                ->set_refresh_token($refresh_token)
                ->set_token($token)
                ->set_id_Utilizador($utilizador->getid_utilizador());

            $token_dao= new Token_dao();
            $token_dao->Insert($token);

            $response->getBody()->write(([
                "token" => $token,
                "refresh_token" => $refresh_token
            ]));

            return $response;
        }
    }
?>