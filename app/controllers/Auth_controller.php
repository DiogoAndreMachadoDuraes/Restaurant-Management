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
            
            $utilizador_dao= new Utilizador_dao();
            $utilizador=$utilizador_dao->SelectByEmail($email);

            if(is_null($utilizador)){
                echo 'Utilizador not found!';
                return $response->withStatus(401);
            } 

            if($password!=$utilizador->getpassword()){ 
                echo 'Invalid password!';
                return $response->withStatus(401);
            }

            $token_operation=new Token_operation_controller();
            $token_operation->setUtilizador($utilizador);
            $token_operation->Token_operation($request, $response, $args);

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
                echo 'Refresh Token not found!';
                return $response->withStatus(401);
            }

            if($token_decoded->active==="0"){
                echo 'Refresh Token not active!';
                return $response->withStatus(401);
            }

            $token_model= new Token();
            $token_model->set_refresh_token($refresh_token)
                ->set_active(0);
            $token_dao->Update_active($token_model);
            $token_dao->Delete($token_model);

            $utilizador_dao = new Utilizador_dao();
            $utilizador=$utilizador_dao->SelectByEmail($token_decoded->email);

            if(is_null($utilizador)){
                echo 'Utilizador not found!';
                return $response->withStatus(401);
            }

            $token_operation=new Token_operation_controller();
            $token_operation->setUtilizador($utilizador);
            $token_operation->Token_operation($request, $response, $args);
            
            return $response;
        }
    }
?>