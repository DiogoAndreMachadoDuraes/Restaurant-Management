<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Administrador_dao;
use App\Models\Administrador;
use App\Controllers\Exception_controller;

class Administrador_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
         try{
            $administrador_dao=new Administrador_dao();
            $administrador=$administrador_dao->Select();
            $json=json_encode($administrador, JSON_UNESCAPED_UNICODE);
            $response->getBody()->write($json);
            return $response;
         }
         catch(Exception_controller $e){
            $e->Testar_excecoes ($response);
         }
   }

   public function Insert (Request $request, Response $response, array $arg) : Response 
   {
       try{
           $data=$request->getParsedBody();

           $administrador_dao=new Administrador_dao();
           $administrador=new Administrador();
           $administrador->setid_utilizador($data['id_utilizador']);
           $administrador_dao->Insert($administrador);

           $response->getBody()->write("Administrador criado com sucesso!");
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
        
            $administrador_dao=new Administrador_dao();
            $administrador=new Administrador();
            $administrador->setid_administrador($data['id_administrador'])
                ->setid_utilizador($data['id_utilizador']);
            $administrador_dao->Update($administrador);

            $response -> getBody() -> write("Administrador modificado!");
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

            $administrador_dao=new Administrador_dao();
            $administrador=new Administrador();
            $administrador->setid_administrador($data['id_administrador']);
            $administrador_dao->Delete($administrador);

            $response -> getBody() -> write("Administrador eliminado!");
            return $response;
         }
      catch(Exception_controller $e){
            $e->Testar_excecoes ($response);
         }
   }
} 
?>