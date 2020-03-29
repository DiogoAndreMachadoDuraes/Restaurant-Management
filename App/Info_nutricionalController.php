<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Info_nutricional_dao;
use App\Models\Info_nutricionalModel;


final class Info_nutricional_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
      $info_nutricional=new Info_nutricional_dao();
      $info_nutricional=$info_nutricional->Select();

    $response = $response->withJson($info_nutricional);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $info_nutricional=new Info_nutricional_dao();
        $info_nutricional=new Info_nutricional();
        $info_nutricional->setId_Nutri('');
        $info_nutricional->setTipo('');
        $info_nutricional->setQuantidade_nutrientes('');
        $info_nutricional->setDescricao('');
        $info_nutricional=$info_nutricionaldao->Update($info_nutricional);

        $response = $response->withJson($info_nutricional);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $funcionario=new Info_nutricional_dao();
        $funcionario=new Info_nutricional();
        $info_nutricional->setId_Nutri('');
        $info_nutricional->setTipo('');
        $info_nutricional->setQuantidade_nutrientes('');
        $info_nutricional->setDescricao('');
        $info_nutricional=$info_nutricionaldao->Insert($info_nutricional);

        $response = $response->withJson($info_nutricional);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $info_nutricional=new Info_nutricional_dao();
        $info_nutricional=new Info_nutricional();
        $info_nutricional->setId_Nutri('');
        $info_nutricional=$info_nutricionaldao->Delete($info_nutricional)

        $response = $response->withJson($info_nutricional);
        return $response;
     }
} 
?>