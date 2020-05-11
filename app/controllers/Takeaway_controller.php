<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Takeaway_dao;
use App\Models\Takeaway;


final class Takeaway_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $takeaway_dao=new Takeaway_dao();
      $takeaway=$takeaway_dao->Select();
      $json=json_encode($takeaway);
      $response->getBody()->write($json);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $takeaway_dao=new Takeaway_dao();
      $takeaway=new Takeaway();
      $takeaway->setId_take($data['id_take'])
         ->setPreco($data['preco'])
         ->setData($data['data'])
         ->setHora($data['hora'])
         ->setTipoentrega($data['tipoentrega']);
      $takeaway_dao->Update($takeaway);

      $response -> getBody() -> write("Take away modificado!");
      return $response;
   }
 

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $takeaway_dao=new Takeaway_dao();
      $takeaway=new Takeaway();
      $takeaway->setId_take($data['id_take'])
         ->setPreco($data['preco'])
         ->setData($data['data'])
         ->setHora($data['hora'])
         ->setTipoentrega($data['tipoentrega']);
      $takeaway_dao->Insert($takeaway);

      $response -> getBody() -> write("Take away inserido!");
      return $response;
   }
 
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $takeaway_dao=new Takeaway_dao();
      $takeaway=new Takeaway();
      $takeaway->setId_take($data['id_take']);
      $takeaway_dao->Delete(intval($takeaway));

      $response -> getBody() -> write("Take away eliminado!");
      return $response;
   }
} 
?>