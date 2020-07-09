<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Produto_dao;
use App\Models\Produto;
use App\Controllers\Exception_controller;

final class Produto_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      try{
      $produto_dao=new Produto_dao();
      $produto=$produto_dao->Select();
      $json=json_encode($produto, JSON_UNESCAPED_UNICODE);
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
        
      $produto_dao=new Produto_dao();
      $produto =new Produto();
      $produto->setid_produto($data['id_produto'])
         ->setnome($data['nome'])
         ->setdescricao($data['descricao'])
         ->setquantidade($data['quantidade'])
         ->setpreco($data['preco'])
         ->setfoto($data['foto']);
      $produto_dao->Update($produto);

      $response -> getBody() -> write("Product modified!");
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

      $produto_dao=new Produto_dao();
      $produto=new Produto();
      $produto->setnome($data['nome'])
      ->setdescricao($data['descricao'])
         ->setquantidade($data['quantidade'])
         ->setpreco($data['preco'])
         ->setfoto($data['foto']);
      $produto_dao->Insert($produto);

      $response -> getBody() -> write("Product inserted!");
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

      $produto_dao=new Produto_dao();
      $produto=new Produto();
      $produto->setid_produto($data['id_produto']);
      $produto_dao->Delete($produto);

      $response -> getBody() -> write("Product deleted!");
      return $response;
   }
   catch(Exception_controller $e){
      $e->Testar_excecoes ($response);
   }
}
} 
?>