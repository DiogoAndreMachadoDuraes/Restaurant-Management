<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Restaurante_dao;
use App\Models\Restaurante;


final class Restaurante_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $restaurante_dao=new Restaurante_dao();
      $restaurante=$restaurante_dao->Select();
      $json=json_encode($restaurante);
      $response->getBody()->write($json);
      return $response;
   }
 
   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
        
      $restaurante_dao=new Restaurante_dao();
      $restaurante=new Restaurante();
      $restaurante->setid_restaurante($data['id_restaurante'])
         ->setnome($data['nome'])
         ->setlocalizacao($data['localizacao'])
         ->settelefone($data['telefone'])
         ->setemail($data['email']);
      $restaurante_dao->Update($restaurante);

      $response -> getBody() -> write("Restaurante modificado!");
      return $response;
   }
 
   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $restaurante_dao=new Restaurante_dao();
      $restaurante=new Restaurante();
      $restaurante->setid_restaurante($data['id_restaurante'])
         ->setnome($data['nome'])
         ->setlocalizacao($data['localizacao'])
         ->settelefone($data['telefone'])
         ->setemail($data['email']);
      $restaurante_dao->Insert($restaurante);

      $response -> getBody() -> write("Restaurante inserido!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $restaurante_dao=new Restaurante_dao();
      $restaurante=new Restaurante();
      $restaurante->setid_restaurante($data['id_restaurante']);
      $restaurante_dao->Delete(intval($restaurante));

      $response -> getBody() -> write("Restaurante eliminado!");
      return $response;
   }
} 
?>