<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Take_away_dao;
use App\Models\Take_away;

final class Take_away_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $take_away_dao=new Take_away_dao();
      $take_away=$take_away_dao->Select();
      $json=json_encode($take_away);
      $response->getBody()->write($json);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $take_away_dao=new Take_away_dao();
      $take_away=new Take_away();
      $take_away->setid_take_away($data['id_take_away'])
         ->setpreco($data['preco'])
         ->setdata($data['data'])
         ->sethora($data['hora'])
         ->settipo_entrega($data['tipo_entrega']);
      $take_away_dao->Update($take_away);

      $response->getBody()->write("Take away modificado!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $take_away_dao=new Take_away_dao();
      $take_away=new Take_away();
      $take_away->setid_take_away($data['id_take_away'])
         ->setpreco($data['preco'])
         ->setdata($data['data'])
         ->sethora($data['hora'])
         ->settipo_entrega($data['tipo_entrega']);
      $take_away_dao->Insert($take_away);

      $response->getBody()->write("Take away inserido!");
      return $response;
   }

   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $take_away_dao=new Take_away_dao();
      $take_away=new Take_away();
      $take_away->setid_take_away($data['id_take_away']);
      $take_away_dao->Delete(intval($take_away));

      $response->getBody()->write("Take away eliminado!");
      return $response;
   }
} 
?>