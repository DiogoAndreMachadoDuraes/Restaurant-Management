<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Fatura_dao;
use App\Models\FaturaModel;


final class Fatura_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
    $fatura=new Fatura_dao();
    $fatura=$fatura->Select();

    $response = $response->withJson($fatura);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $fatura=new Fatura_dao();
        $fatura=new Fatura();
        $fatura->setId_Fatura('');
        $fatura->setIva('');
        $fatura->setTaxa('');
        $fatura=$faturadao->Update($fatura);

        $response = $response->withJson($fatura);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $fatura=new Fatura_dao();
        $fatura=new Fatura();
        $fatura->setId_Fatura('');
        $fatura->setIva('');
        $fatura->setTaxa('');
        $fatura=$fatura->Insert($fatura);

        $response = $response->withJson($fatura);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $fatura=new Fatura_dao();
        $fatura=new Fatura();
        $fatura->setId_Fatura('');
        $fatura=$faturadao->Delete($fatura);

        $response = $response->withJson($fatura);
        return $response;
     }
} 
?>