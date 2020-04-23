<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Utilizador_dao;
use App\Models\Utilizador;

final class Utilizador_controller
{                                
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $utilizador_dao=new Utilizador_dao();
      $utilizador=$utilizador_dao->Select();

      $response -> getBody() -> write($utilizador);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
      
      $utilizador_dao=new Utilizador_dao();
      $utilizador=new Utilizador();
      $utilizador->setId_utilizador($data['id_utilizador'])
         ->setNome($data['nome'])
         ->setTelefone($data['telefone'])
         ->setEmail($data['email'])
         ->setMorada($data['morada'])
         ->setPassword($data['password'])
         ->setTipo($data['tipo']);
      $utilizador_dao->Update($utilizador);

      $response -> getBody() -> write("Utilizador modificado!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $utilizador_dao=new Utilizador_dao();
      $utilizador=new Utilizador();
      $utilizador->setId_utilizador($data['id_utilizador'])
         ->setNome($data['nome'])
         ->setTelefone($data['telefone'])
         ->setEmail($data['email'])
         ->setMorada($data['morada'])
         ->setPassword($data['password'])
         ->setTipo($data['tipo']);
      $utilizador_dao->Insert($utilizador);

      $response -> getBody() -> write("Utilizador inserido!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $utilizador_dao=new Utilizador_dao();
      $utilizador=new Utilizador();
      $utilizador->setId_utilizador($data['id_utilizador']);
      $utilizador_dao->Delete(intval($utilizador));

      $response -> getBody() -> write("Utilizador eliminado!");
      return $response;
   }
} 
?>