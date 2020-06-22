<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Restaurante_dao;
use App\Models\Restaurante;
use App\Controllers\Exception_controller;


class Restaurante_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      try{
      $restaurante_dao=new Restaurante_dao();
      $restaurante=$restaurante_dao->Select();
      $json=json_encode($restaurante, JSON_UNESCAPED_UNICODE );
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
        
      $restaurante_dao=new Restaurante_dao();
      $restaurante=new Restaurante();
      $restaurante->setid_restaurante($data['id_restaurante'])
      ->setnome($data['nome'])
      ->setrua($data['rua'])
      ->setcodigo_postal($data['codigo_postal'])
      ->setlocalizacao($data['localizacao'])
      ->settelefone($data['telefone'])
      ->setemail($data['email'])
      ->setfoto($data['foto']);
      $restaurante_dao->Update($restaurante);

      $response -> getBody() -> write("Restaurante modificado!");
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

      $restaurante_dao=new Restaurante_dao();
      $restaurante=new Restaurante();
      $restaurante->setnome($data['nome'])
         ->setrua($data['rua'])
         ->setcodigo_postal($data['codigo_postal'])
         ->setlocalizacao($data['localizacao'])
         ->settelefone($data['telefone'])
         ->setemail($data['email'])
         ->setfoto($data['foto']);
      $restaurante_dao->Insert($restaurante);

      $response -> getBody() -> write("Restaurante inserido!");
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

      $restaurante_dao=new Restaurante_dao();
      $restaurante=new Restaurante();
      $restaurante->setid_restaurante($data['id_restaurante']);
      $restaurante_dao->Delete($restaurante);

      $response -> getBody() -> write("Restaurante eliminado!");
      return $response;
   }
   catch(Exception_controller $e){
      $e->Testar_excecoes ($response);
   }
}
} 
?>