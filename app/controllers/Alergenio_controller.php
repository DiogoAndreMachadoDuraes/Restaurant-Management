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
      $json=json_encode($alergenio, JSON_UNESCAPED_UNICODE);
      $response->getBody()->write($json);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
   
      $alergenio_dao=new Alergenio_dao();
      $alergenio=new Alergenio();
      $alergenio->setid_alergenio($data['id_alergenio'])
         ->settipo($data['tipo'])
         ->setdescricao($data['descricao'])
         ->setfoto($data['foto'])
         ->setid_extra($data['id_extra'])
         ->setid_produto($data['id_produto']);
      $alergenio_dao->Update($alergenio);
      $response -> getBody() -> write("Allergen modified!");
      return $response;    
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $alergenio_dao=new Alergenio_dao();
      $alergenio=new Alergenio();
      $alergenio->settipo($data['tipo'])
         ->setdescricao($data['descricao'])
         ->setfoto($data['foto'])
         ->setid_extra($data['id_extra'])
         ->setid_produto($data['id_produto']);
      $alergenio_dao->Insert($alergenio);
      $response -> getBody() -> write("Allergen inserted!");
      return $response; 
   }

   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $alergenio_dao=new Alergenio_dao();
      $alergenio=new Alergenio();
      $alergenio->setid_alergenio($data['id_alergenio']);
      $alergenio_dao->Delete($alergenio);
      $response -> getBody() -> write("Allergen deleted!");
      return $response;
   }
} 
?>