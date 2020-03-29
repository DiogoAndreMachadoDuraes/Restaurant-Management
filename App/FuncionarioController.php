<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Funcionario_dao;
use App\Models\FuncionarioModel;


final class Funcionario_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
    $funcionario=new Funcionario_dao();
    $funcionario=$funcionario->Select();

    $response = $response->withJson($funcionario);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $funcionario=new Funcionario_dao();
        $funcionario=new Funcionario();
        $funcionario->setId_Funcionario('');
        $funcionario->setNome('');
        $funcionario->setTelefone('');
        $funcionario->setEmail('');
        $funcionario=$funcionariodao->Update($funcionario);

        $response = $response->withJson($funcionario);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $funcionario=new Funcionario_dao();
        $funcionario=new Funcionario();
        $funcionario->setId_Funcionario('');
        $funcionario->setNome('');
        $funcionario->setTelefone('');
        $funcionario->setEmail('');
        $funcionario=$funcionariodao->Insert($funcionario);

        $response = $response->withJson($funcionario);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $funcionario=new Funcionario_dao();
        $funcionario=new Funcionario();
        $funcionario->setId_Funcionario('');
        $funcionario=$funcionariodao->Delete($funcionario)

        $response = $response->withJson($funcionario);
        return $response;
     }
} 
?>