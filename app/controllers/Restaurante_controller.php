<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Restaurante_dao;
use App\Models\Restaurante;

class Restaurante_controller
{                                
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $restaurante_dao=new Restaurante_dao();
      $restaurante=$restaurante_dao->Select();
      $json=json_encode($restaurante, JSON_UNESCAPED_UNICODE );
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
         ->setrua($data['rua'])
         ->setcodigo_postal($data['codigo_postal'])
         ->setlocalizacao($data['localizacao'])
         ->settelefone($data['telefone'])
         ->setemail($data['email'])
         ->setfoto($data['foto']);
      $restaurante_dao->Update($restaurante);
      $response -> getBody() -> write("Restaurant modified!");
      return $response;
   }
 
   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $restaurante_dao=new Restaurante_dao();
      $restaurante=new Restaurante();
      $restaurante->setnome($data['nome'])
         ->setrua($data['rua'])
         ->setcodigo_postal($data['codigo_postal'])
         ->setlocalizacao($data['localizacao'])
         ->settelefone($data['telefone'])
         ->setemail($data['email'])
         ->setfoto($data['foto']);
      $restaurante_dao->Insert($restaurante);
      $response -> getBody() -> write("Restaurant inserted!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   { 
      $data=$request->getParsedBody();

      $restaurante_dao=new Restaurante_dao();
      $restaurante=new Restaurante();
      $restaurante->setid_restaurante($data['id_restaurante']);
      $restaurante_dao->Delete($restaurante);
      $response -> getBody() -> write("Restaurant deleted!");
      return $response;
   }
} 
?>