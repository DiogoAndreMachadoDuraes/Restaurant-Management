<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Info_nutricional_dao;
use App\Models\Info_nutricional;


final class Info_nutricional_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $info_nutricional_dao=new Info_nutricional_dao();
      $info_nutricional=$info_nutricional_dao->Select();

      $response -> getBody() -> write($info_nutricional);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
        
      $info_nutricional_dao=new Info_nutricional_dao();
      $info_nutricional=new Info_nutricional();
      $info_nutricional->setId_Nutri($data['id_info_nutricional'])
         ->setTipo($data['tipo'])
         ->setQuantidade_nutrientes($data['quantidade'])
         ->setDescricao($data['descricao']);
         $info_nutricional_dao->Update($info_nutricional);

      $response -> getBody() -> write("Informacao nutricional modificada!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $info_nutricional_dao=new Info_nutricional_dao();
      $info_nutricional=new Info_nutricional();
      $info_nutricional->setId_Nutri($data['id_info_nutricional'])
         ->setTipo($data['tipo'])
         ->setQuantidade_nutrientes($data['quantidade'])
         ->setDescricao($data['descricao']);
         $info_nutricional_dao->Insert($info_nutricional);

      $response -> getBody() -> write("Informacao Nutricional inserida!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $info_nutricional_dao=new Info_nutricional_dao();
      $info_nutricional=new Info_nutricional();
      $info_nutricional->setId_Nutri($data['id_info_nutricional']);
      $info_nutricional_dao->Delete(intval($info_nutricional));

      $response -> getBody() -> write("Informacao nutricional eliminada!");
      return $response;
   }
} 
?>