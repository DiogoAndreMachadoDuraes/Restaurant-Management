<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Usuario_dao;
use App\Models\Usuario;


final class Usuario_controller
{                                
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $usuario_dao=new Usuario_dao();
      $usuario=$usuario_dao->Select();

      $response -> getBody() -> write($usuario);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
      
      $usuario_dao=new Usuario_dao();
      $usuario=new Usuario();
      $usuario->setNif_usuario($data['nif_usuario'])
         ->setNome($data['nome'])
         ->setEmail($data['email'])
         ->setPassword($data['password']);
      $usuario_dao->Update($usuario);

      $response -> getBody() -> write("Usuario modificado!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $usuario_dao=new Usuario_dao();
      $usuario=new Usuario();
      $usuario->setNif_usuario($data['nif_usuario'])
         ->setNome($data['nome'])
         ->setEmail($data['email'])
         ->setPassword($data['password']);
      $usuario_dao->Insert($usuario);

      $response -> getBody() -> write("Usuario inserido!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $usuario_dao=new Usuario_dao();
      $usuario=new Usuario();
      $usuario->setNif_usuario($data['nif_usuario']);
      $usuario_dao->Delete(intval($usuario));

      $response -> getBody() -> write("Usuario eliminado!");
      return $response;
   }
} 
?>