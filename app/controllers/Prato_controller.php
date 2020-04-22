<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Prato_dao;
use App\Models\Prato;


final class Prato_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $prato_dao=new Prato_dao();
      $prato=$prato_dao->Select();

      $response -> getBody() -> write($prato);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
        
      $prato_dao=new Prato_dao();
      $prato =new Prato();
      $prato->setId_prato($data['id_prato'])
         ->setNomeprato($data['nomeprato'])
         ->setQuantidade($data['quantidade'])
         ->setDescricao($data['descricao'])
         ->setPreco($data['preco']);
      $prato_dao->Update($prato);

      $response -> getBody() -> write("Prato modificado!");
      return $response;
   }
 

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $prato_dao=new Prato_dao();
      $prato=new Prato();
      $prato->setId_prato($data['id_prato'])
         ->setNomeprato($data['nomeprato'])
         ->setQuantidade($data['quantidade'])
         ->setDescricao($data['descricao'])
         ->setPreco($data['preco']);
      $prato_dao->Insert($prato);

      $response -> getBody() -> write("Prato inserido!");
      return $response;
   }
 
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $prato_dao=new Prato_dao();
      $prato=new Prato();
      $prato->setId_prato($data['id_prato']);
      $prato_dao->Delete(intval($prato));

      $response -> getBody() -> write("Prato eliminado!");
      return $response;
   }
} 
?>