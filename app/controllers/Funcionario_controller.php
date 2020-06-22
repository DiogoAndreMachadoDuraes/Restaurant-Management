<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Funcionario_dao;
use App\Models\Funcionario;
use App\Controllers\Exception_controller;

final class Funcionario_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      try{
      $funcionario_dao=new Funcionario_dao();
      $funcionario=$funcionario_dao->Select();
      $json=json_encode($funcionario, JSON_UNESCAPED_UNICODE);
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
         
      $funcionario_dao=new Funcionario_dao();
      $funcionario=new Funcionario();
      $funcionario->setid_funcionario($data['id_funcionario'])
            ->setid_restaurante($data['id_restaurante'])
            ->setid_utilizador($data['id_utilizador']);
      $funcionario_dao->Update($funcionario);

      $response -> getBody() -> write("Funcionario modificado!");
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

      $funcionario_dao=new Funcionario_dao();
      $funcionario=new Funcionario();
      $funcionario->setid_restaurante($data['id_restaurante'])
            ->setid_utilizador($data['id_utilizador']);
      $funcionario_dao->Insert($funcionario);

      $response -> getBody() -> write("Funcionario inserido!");
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

      $funcionario_dao=new Funcionario_dao();
      $funcionario=new Funcionario();
      $funcionario->setid_funcionario($data['id_funcionario']);
      $funcionario_dao->Delete($funcionario);

      $response -> getBody() -> write("Funcionario eliminado!");
      return $response;
   }
   catch(Exception_controller $e){
      $e->Testar_excecoes ($response);
   }
}
}
?>