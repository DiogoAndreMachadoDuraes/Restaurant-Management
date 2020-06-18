<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Produto_dao;
use App\Models\Produto;

final class Produto_controller
{                                
 
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $produto_dao=new Produto_dao();
      $produto=$produto_dao->Select();
      $json=json_encode($produto);
      $response->getBody()->write($json);
      return $response;
   }

   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
        
      $produto_dao=new Produto_dao();
      $produto =new Produto();
      $produto->setid_produto($data['id_produto'])
         ->setnome($data['nome'])
         ->setquantidade($data['quantidade'])
         ->setdescricao($data['descricao'])
         ->setpreco($data['preco'])
         ->setfoto($data['foto']);
      $produto_dao->Update($produto);

      $response -> getBody() -> write("Produto modificado!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $produto_dao=new Produto_dao();
      $produto=new Produto();
      $produto->setnome($data['nome'])
         ->setquantidade($data['quantidade'])
         ->setdescricao($data['descricao'])
         ->setpreco($data['preco'])
         ->setfoto($data['foto']);
      $produto_dao->Insert($produto);

      $response -> getBody() -> write("Produto inserido!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $produto_dao=new Produto_dao();
      $produto=new Produto();
      $produto->setid_produto($data['id_produto']);
      $produto_dao->Delete(intval($produto));

      $response -> getBody() -> write("Produto eliminado!");
      return $response;
   }
} 
?>