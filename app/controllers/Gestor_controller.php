<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Gestor_dao;
use App\Models\Gestor;


final class Gestor_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $gestor_dao=new Gestor_dao();
      $gestor=$gestor_dao->Select();

      $response -> getBody() -> write($gestor);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
        
      $gestor_dao=new Gestor_dao();
      $gestor=new Gestor();
      $gestor->setId_Gestor($data['id_gestor'])
      ->setNome($data['nome'])
      ->setTelefone($data['telefone'])
      ->setEmail($data['morada']);
      $gestor_dao->Update($gestor);

      $response -> getBody() -> write("Gestor modificado!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $gestor_dao=new Gestor_dao();
      $gestor=new Gestor();
      $gestor->setId_Gestor($data['id_gestor'])
      ->setNome($data['nome'])
      ->setTelefone($data['telefone'])
      ->setEmail($data['morada']);
      $gestor_dao->Insert($gestor);

      $response -> getBody() -> write("Gestor inserido!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $gestor_dao=new Gestor_dao();
      $gestor=new Gestor();
      $gestor->setId_Gestor($data['id_gestor']);
      $gestor_dao->Delete(intval($gestor));

      $response -> getBody() -> write("Gestor eliminado!");
      return $response;
   }
} 
?>