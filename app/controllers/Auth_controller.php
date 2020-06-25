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
        public function Login(Request $request, Response $response, array $args): Response
        {
            $data=$request->getParsedBody();
            
            $email=$data['email'];
            $password=$data['password'];

            $key='hdX2D3M99ZBQBIFy8jdsAwVHpRpupEWtZUh_CpCfPKE';
            
            $utilizador_dao= new Utilizador_dao();
            $utilizador=$utilizador_dao->SelectByEmail($email);

            if(is_null($utilizador)){
                echo 'Utilizador não encontrado!';
                return $response->withStatus(401);
            }

            if($password!=$utilizador->getpassword()){ 
                echo 'Palavra-passe inválida!';
                return $response->withStatus(401);
            }

            $expired_date=(new \DateTime('now', new \DateTimeZone('EUROPE/LISBON')))->modify('+7 days')->format('Y-m-d H:i:s');

            $tokenInside=[
                'id_utilizador' => $utilizador->getid_utilizador(),
                'nome' => $utilizador->getnome(),
                'email' => $utilizador->getemail(),
                'expired_date' => $expired_date
            ]; 
            
            $token=JWT::encode($tokenInside, $key);

            $refresh_token=[
                'email' => $utilizador->getemail(),
                'active' => "1",
                'random' => uniqid()
            ];

            $refresh_token=JWT::encode($refresh_token, $key);

            $token_model= new Token();
            $token_model->set_expired_date($expired_date)
                ->set_refresh_token($refresh_token)
                ->set_token($token)
                ->set_id_utilizador($utilizador->getid_utilizador())
                ->set_active(1);

            $token_dao= new Token_dao();
            $token_dao->Insert($token_model);

            $response->getBody()->write("Token: ");
            $response->getBody()->write($token);
            $response->getBody()->write("<br>");
            $response->getBody()->write("Refresh_token: ");
            $response->getBody()->write($refresh_token);

            return $response;
        }

        public function Refresh_token(Request $request, Response $response, array $args): Response
        {
            $data=$request->getParsedBody();
            $refresh_token=$data['refresh_token'];

            $key='hdX2D3M99ZBQBIFy8jdsAwVHpRpupEWtZUh_CpCfPKE';

            $token_decoded = JWT::decode($refresh_token, $key, ['HS256']);
            
            $token_dao= new Token_dao();
            $exists=$token_dao->Verify_refresh_token($refresh_token);

            if(!$exists){
                echo 'Refresh Token não encontrado!';
                return $response->withStatus(401);
            }

            if($token_decoded->active==="0"){
                echo 'Refresh Token não ativo!';
                return $response->withStatus(401);
            }

            $token_model= new Token();
            $token_model->set_refresh_token($refresh_token)
                ->set_active(0);
            $token_dao->Update_active($token_model);

            $utilizador_dao = new Utilizador_dao();
            $utilizador=$utilizador_dao->SelectByEmail($token_decoded->email);

            if(is_null($utilizador))
                return $response->withStatus(401);
            
            $expired_date=(new \DateTime('now', new \DateTimeZone('EUROPE/LISBON')))->modify('+7 days')->format('Y-m-d H:i:s');
            
            $tokenInside=[
                'id_utilizador' => $utilizador->getid_utilizador(),
                'nome' => $utilizador->getnome(),
                'email' => $utilizador->getemail(),
                'expired_date' => $expired_date
            ]; 
            
            $token=JWT::encode($tokenInside, $key);
            var_dump($token);
            $refresh_token=[
                'email' => $utilizador->getemail(),
                'active' => "1",
                'random' => uniqid()
            ];

            $refresh_token=JWT::encode($refresh_token, $key);

            $token_model= new Token();
            $token_model->set_expired_date($expired_date)
                ->set_refresh_token($refresh_token)
                ->set_token($token)
                ->set_id_utilizador($utilizador->getid_utilizador())
                ->set_active(1);

            $token_dao= new Token_dao();
            $token_dao->Insert($token_model);

            $response->getBody()->write("Token: ");
            $response->getBody()->write($token);
            $response->getBody()->write("<br>");
            $response->getBody()->write("Refresh_token: ");
            $response->getBody()->write($refresh_token);

            return $response;
        }
    }
?>