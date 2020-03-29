<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Prato_dao;
use App\Models\PratoModel;


final class Prato_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
    $prato=new Prato_dao();
    $prato=$prato->Select();

    $response = $response->withJson($prato);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $funcionario=new Prato_dao();
        $funcionario=new Prato();
        $prato->setId_prato('');
        $prato->setNomeprato('');
        $prato->setQuantidade('');
        $prato->setDescricao('');
        $prato->setPreco('');
        
        $prato=$pratodao->Update($prato);

        $response = $response->withJson($prato);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $prato=new Prato_dao();
        $prato=new Prato();
        $prato->setId_prato('');
        $prato->setNomeprato('');
        $prato->setQuantidade('');
        $prato->setDescricao('');
        $prato->setPreco('');
        $prato=$pratodao->Insert($prato);

        $response = $response->withJson($prato);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $prato=new Prato_dao();
        $prato=new Prato();
        $prato->setId_prato('');
        $prato=$pratodao->Delete($prato)

        $response = $response->withJson($prato);
        return $response;
     }
} 
?>