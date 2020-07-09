<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Info_nutricional_dao;
use App\Models\Info_nutricional;
use App\Controllers\Exception_controller;

final class Info_nutricional_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      try{
      $info_nutricional_dao=new Info_nutricional_dao();
      $info_nutricional=$info_nutricional_dao->Select();
      $json=json_encode($info_nutricional, JSON_UNESCAPED_UNICODE);
      $response->getBody()->write($json);
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
        
      $info_nutricional_dao=new Info_nutricional_dao();
      $info_nutricional=new Info_nutricional();
      $info_nutricional->setid_info_nutricional($data['id_info_nutricional'])
         ->settipo($data['tipo'])
         ->setquantidade_nutrientes($data['quantidade_nutrientes'])
         ->setdescricao($data['descricao'])
         ->setid_produto($data['id_produto'])
         ->setid_extra($data['id_extra']);
         $info_nutricional_dao->Update($info_nutricional);

      $response -> getBody() -> write("Nutritional Information modified!");
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

      $info_nutricional_dao=new Info_nutricional_dao();
      $info_nutricional=new Info_nutricional();
      $info_nutricional->settipo($data['tipo'])
         ->setquantidade_nutrientes($data['quantidade_nutrientes'])
         ->setdescricao($data['descricao'])
         ->setid_produto($data['id_produto'])
         ->setid_extra($data['id_extra']);
         $info_nutricional_dao->Insert($info_nutricional);

      $response -> getBody() -> write("Nutritional Information inserted!");
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

      $info_nutricional_dao=new Info_nutricional_dao();
      $info_nutricional=new Info_nutricional();
      $info_nutricional->setid_info_nutricional($data['id_info_nutricional']);
      $info_nutricional_dao->Delete($info_nutricional);

      $response -> getBody() -> write("Nutritional Information deleted!");
      return $response;
   }
   catch(Exception_controller $e){
      $e->Testar_excecoes ($response);
   }
}
} 
?>