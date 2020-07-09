<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Fatura_dao;
use App\Models\Fatura;
use App\Controllers\Exception_controller;

class Fatura_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      try{
      $fatura_dao=new Fatura_dao();
      $fatura=$fatura_dao->Select();
      $json=json_encode($fatura, JSON_UNESCAPED_UNICODE);
      $response -> getBody() -> write($json);
      return $response;
      }
      catch(Exception_controller $e){
         $e->Testar_excecoes ($response);
      }
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      try{
            $data=$request->getParsedBody();

            $fatura_dao=new Fatura_dao();
            $fatura=new Fatura();
            $fatura->setid_fatura($data['id_fatura'])
               ->setiva($data['iva'])
               ->settaxa($data['taxa'])
               ->setvalor_total($data['valor_total'])
               ->setnif_cliente($data['nif_cliente'])
               ->setid_reserva($data['id_reserva']);

            $fatura_dao->Update($fatura);

            $response -> getBody() -> write("Bil modified!");
            return $response;
         }
            catch(Exception_controller $e){
               $e->Testar_excecoes ($response);
            }
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      try{
            $data=$request->getParsedBody();

            $fatura_dao=new Fatura_dao();
            $fatura=new Fatura();
            $fatura->setiva($data['iva'])
                  ->settaxa($data['taxa'])
                  ->setvalor_total($data['valor_total'])
                  ->setnif_cliente($data['nif_cliente'])
                  ->setid_reserva($data['id_reserva']);
         
            $fatura_dao->Insert($fatura);

            $response -> getBody() -> write("Bill inserted!");
            return $response;
         }
      catch(Exception_controller $e){
             $e->Testar_excecoes ($response);
      }        
}
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {
         try{
            $data=$request->getParsedBody();

            $fatura_dao=new Fatura_dao();
            $fatura=new Fatura();
            $fatura->setid_fatura($data['id_fatura']);
            $fatura_dao->Delete($fatura);

            $response -> getBody() -> write("Bill deleted!");
            return $response;
         }    
         catch(Exception_controller $e){
             $e->Testar_excecoes ($response);
         }
   } 
} 
?>