<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Fatura_dao;
use App\Models\Fatura;

class Fatura_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $fatura_dao=new Fatura_dao();
      $fatura=$fatura_dao->Select();
      $json=json_encode($fatura);
      $response -> getBody() -> write($json);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $fatura_dao=new Fatura_dao();
      $fatura=new Fatura();
      $fatura->setid_fatura($data['id_fatura'])
         ->settaxa($data['taxa'])
         ->setiva($data['iva'])
         ->setnif_cliente($data['nif_cliente'])
         ->setid_reserva($data['id_reserva']);

      $fatura_dao->Update($fatura);

      $response -> getBody() -> write("Fatura modificada!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $fatura_dao=new Fatura_dao();
      $fatura=new Fatura();
      $fatura->settaxa($data['taxa'])
         ->setiva($data['iva'])
         ->setnif_cliente($data['nif_cliente'])
         ->setid_reserva($data['id_reserva']);
         
      $fatura_dao->Insert($fatura);

      $response -> getBody() -> write("Fatura inserida!");
      return $response;
  }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $fatura_dao=new Fatura_dao();
      $fatura=new Fatura();
      $fatura->setid_fatura(intval($data['id_fatura']));
      $fatura_dao->Delete(intval($fatura));

      $response -> getBody() -> write("Fatura eliminada!");
      return $response;
   }
} 
?>