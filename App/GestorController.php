<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Gestor_dao;
use App\Models\GestorModel;


final class Gestor_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
    $gestor=new Gestor_dao();
    $gestor=$gestor->Select();

    $response = $response->withJson($gestor);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $gestor=new Gestor_dao();
        $gestor=new Gestor();
        $gestor->setId_Gestor('');
        $gestor->setNome('');
        $gestor->setTelefone('');
        $gestor->setEmail('');
        $gestor=$gestordao->Update($gestor);

        $response = $response->withJson($gestor);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $gestor=new Gestor_dao();
        $gestor=new Gestor();
        $gestor->setId_Gestor('');
        $gestor->setNome('');
        $gestor->setTelefone('');
        $gestor->setEmail('');
        $gestor=$gestordao->Insert($gestor);

        $response = $response->withJson($gestor);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $gestor=new Gestor_dao();
        $gestor=new Gestor();
        $gestor->setId_Gestor('');
        $gestor=$gestordao->Delete($gestor)

        $response = $response->withJson($gestor);
        return $response;
     }
} 
?>