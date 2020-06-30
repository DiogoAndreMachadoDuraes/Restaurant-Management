<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Utilizador_dao;
use App\Models\Utilizador;
use App\Controllers\Exception_controller;

final class Utilizador_controller
{                                
   public function Select (Request $request, Response $response, array $args) : Response
   {
      try{
      $utilizador_dao=new Utilizador_dao();
      $utilizador=$utilizador_dao->Select();
      $json=json_encode($utilizador, JSON_UNESCAPED_UNICODE);
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
      
      $utilizador_dao=new Utilizador_dao();
      $utilizador=new Utilizador();
      $utilizador->setid_utilizador($data['id_utilizador'])
         ->setnif($data['nif'])
         ->setnome($data['nome'])
         ->setdata_nascimento($data['data_nascimento'])
         ->setsexo($data['sexo'])
         ->settelefone($data['telefone'])
         ->setmorada($data['morada'])
         ->setfoto($data['foto'])
         ->setemail($data['email'])
         ->setpassword($data['password'])
         ->settipo($data['tipo']);
         
      $utilizador_dao->Update($utilizador);

      $response -> getBody() -> write("Utilizador modificado!");
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

      $utilizador_dao=new Utilizador_dao();
      $utilizador=new Utilizador();
      $utilizador->setnif($data['nif'])
      ->setnome($data['nome'])
      ->setdata_nascimento($data['data_nascimento'])
      ->setsexo($data['sexo'])
      ->settelefone($data['telefone'])
      ->setmorada($data['morada'])
      ->setfoto($data['foto'])
      ->setemail($data['email'])
      ->setpassword($data['password'])
      ->settipo($data['tipo']);
      $utilizador_dao->Insert($utilizador);

      $response -> getBody() -> write("Utilizador inserido!");
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

      $utilizador_dao=new Utilizador_dao();
      $utilizador=new Utilizador();
      $utilizador->setid_utilizador($data['id_utilizador']);
      $utilizador_dao->Delete($utilizador);

      $response -> getBody() -> write("Utilizador eliminado!");
      return $response;
   }
   catch(Exception_controller $e){
      $e->Testar_excecoes ($response);
   }
}
} 
?>