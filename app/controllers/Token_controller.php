<?php

namespace App\Controllers;

   use Psr\Http\Message\ServerRequestInterface as Request;
   use Psr\Http\Message\ResponseInterface as Response;
   use App\DAO\Token_dao;
   use App\Models\Token;

   final class Token_controller
   {
      public function Insert (Request $request, Response $response, array $args) : Response
      {
         $data=$request->getParsedBody();

         $token_dao=new Token_dao();
         $token=new Token();
         $token->set_token($data['token'])
         ->set_refresh_token($data['refresh_token'])
         ->set_expired_date($data['expired_date'])
         ->set_id_utilizador($data['id_utilizador'])
         ->set_active($data['active']);
         $token_dao->Insert($token);

         $response->getBody()->write("Token created!");
         return $response;
      }

      public function Select (Request $request, Response $response, array $args) : Response
      {
         $token_dao=new Token_dao();
         $token=$token_dao->Select();
         $json=json_encode($token, JSON_UNESCAPED_UNICODE);

         $response->getBody()->write($json);
         return $response;
      }

      public function Update (Request $request, Response $response, array $args) : Response
      {
         $data=$request->getParsedBody();
      
         $token_dao=new Token_dao();
         $token=new Token();
         $token->set_id_token($data['id_token'])
         ->set_token($data['token'])
         ->set_refresh_token($data['refresh_token'])
         ->set_expired_date($data['expired_date'])
         ->set_id_utilizador($data['id_utilizador'])
         ->set_active($data['active']);
         $token_dao->Update($token);

         $response->getBody()->write("Token updated!");
         return $response;
      }

      public function Delete (Request $request, Response $response, array $args) : Response
      {  
         $data=$request->getParsedBody();

         $token_dao=new Token_dao();
         $token=new Token();
         $token->set_id_token($data['id_token']);
         $token_dao->Delete($token);

         $response->getBody()->write("Token deleted!");
         return $response;
      }
   } 
?>