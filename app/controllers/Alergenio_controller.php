<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Alergenio_dao;
use App\Models\Alergenio;


final class Alergenio_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $alergenio_dao=new Alergenio_dao();
      $alergenio=$alergenio_dao->Select();

      $response -> getBody() -> write ($alergenio);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
        
      $alergenio_dao=new Alergenio_dao();
      $alergenio=new Alergenio();
      $alergenio->setId_Alerge($data['id_alerge'])
         ->setTipo($data['tipo'])
         ->setDescricao($data['descricao']);
      $alergenio_dao->Update($alergenio);

      $response -> getBody() -> write("Alergenio modificado!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $alergenio_dao=new Alergenio_dao();
      $alergenio=new Alergenio();
      $alergenio->setId_Alerge($data['id_alerge'])
         ->setTipo($data['tipo'])
         ->setDescricao($data['descricao']);
      $alergenio_dao->Insert($alergenio);

      $response -> getBody() -> write("Alergenio inserido!");
      return $response;
   }

   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $alergenio_dao=new Alergenio_dao();
      $alergenio=new Alergenio();
      $alergenio->setId_Alerge($data['id_alerge']);
      $alergenio_dao->Delete(intval($alergenio));

      $response -> getBody() -> write("Alergenio eliminado!");
      return $response;
   }
} 
?>