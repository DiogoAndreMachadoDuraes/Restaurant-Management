<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Take_away_dao;
use App\Models\Take_away;
use App\Controllers\Exception_controller;

final class Take_away_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      try{
      $take_away_dao=new Take_away_dao();
      $take_away=$take_away_dao->Select();
      $json=json_encode($take_away, JSON_UNESCAPED_UNICODE);
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

      $take_away_dao=new Take_away_dao();
      $take_away=new Take_away();
      $take_away->setid_take_away($data['id_take_away'])
         ->settipo_entrega($data['tipo_entrega'])
         ->setpreco($data['preco'])
         ->setestado($data['estado'])
         ->setid_funcionario($data['id_funcionario'])
         ->setid_reserva($data['id_reserva']);
      $take_away_dao->Update($take_away);

      $response->getBody()->write("Take away modified!");
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

      $take_away_dao=new Take_away_dao();
      $take_away=new Take_away();
      $take_away->settipo_entrega($data['tipo_entrega'])
      ->setpreco($data['preco'])
      ->setestado($data['estado'])
      ->setid_funcionario($data['id_funcionario'])
      ->setid_reserva($data['id_reserva']);
      $take_away_dao->Insert($take_away);

      $response->getBody()->write("Take away inserted!");
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

      $take_away_dao=new Take_away_dao();
      $take_away=new Take_away();
      $take_away->setid_take_away($data['id_take_away']);
      $take_away_dao->Delete($take_away);

      $response->getBody()->write("Take away deleted!");
      return $response;
   }
   catch(Exception_controller $e){
      $e->Testar_excecoes ($response);
   }
} 
}
?>