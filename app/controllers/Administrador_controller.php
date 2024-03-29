<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Administrador_dao;
use App\Models\Administrador;

class Administrador_controller
{                                
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $administrador_dao=new Administrador_dao();
      $administrador=$administrador_dao->Select();
      $json=json_encode($administrador, JSON_UNESCAPED_UNICODE);
      $response->getBody()->write($json);
      return $response;
   }

   public function Insert (Request $request, Response $response, array $arg) : Response 
   {
      $data=$request->getParsedBody();

      $administrador_dao=new Administrador_dao();
      $administrador=new Administrador();
      $administrador->setid_utilizador($data['id_utilizador']);
      $administrador_dao->Insert($administrador);
      $response->getBody()->write("Administrator inserted!");
      return $response;  
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
   
      $administrador_dao=new Administrador_dao();
      $administrador=new Administrador();
      $administrador->setid_administrador($data['id_administrador'])
            ->setid_utilizador($data['id_utilizador']);
      $administrador_dao->Update($administrador);
      $response -> getBody() -> write("Administrator modified!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $administrador_dao=new Administrador_dao();
      $administrador=new Administrador();
      $administrador->setid_administrador($data['id_administrador']);
      $administrador_dao->Delete($administrador);
      $response -> getBody() -> write("Administrator deleted!");
      return $response;
   }
} 
?>