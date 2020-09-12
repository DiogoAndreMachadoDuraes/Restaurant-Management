<?php

namespace App\Controllers;

    use App\Models\Token;
    use App\DAO\Token_dao;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use Firebase\JWT\JWT;

    final class Token_operation_controller
    {
        public $utilizador;
        
        public function setUtilizador($utilizador) {
            $this->utilizador = $utilizador;
        }

        public function Token_operation(Request $request, Response $response, array $args): Response
        {
            $key='hdX2D3M99ZBQBIFy8jdsAwVHpRpupEWtZUh_CpCfPKE';

            $expired_date=(new \DateTime('now', new \DateTimeZone('EUROPE/LISBON')))->modify('+7 days')->format('Y-m-d H:i:s');

            $tokenInside=[
                'id_utilizador' => $this->utilizador->getid_utilizador(),
                'nome' => $this->utilizador->getnome(),
                'email' => $this->utilizador->getemail(),
                'expired_date' => $expired_date
            ]; 
            
            $token=JWT::encode($tokenInside, $key);

            $refresh_token=[
                'email' => $this->utilizador->getemail(),
                'active' => "1",
                'random' => uniqid()
            ];

            $refresh_token=JWT::encode($refresh_token, $key);

            $token_model= new Token();
            $token_model->set_expired_date($expired_date)
                ->set_refresh_token($refresh_token)
                ->set_token($token)
                ->set_id_utilizador($this->utilizador->getid_utilizador())
                ->set_active(1);

            $token_dao= new Token_dao();
            $token_dao->Insert($token_model);

            $response->getBody()->write($token);
            return $response;
        }
    }
?>
