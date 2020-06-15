<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Menu_dao;
use App\Models\Menu;

final class Menu_controller
{                                
   public function Select (Request $request, Response $response, array $args) : Response
   {
      $menu_dao=new Menu_dao();
      $menu=$menu_dao->Select();
      $json=json_encode($menu);
      $response->getBody()->write($json);
      return $response;
   }
 
   public function Update (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();
        
      $menu_dao=new Menu_dao();
      $menu=new Menu();
      $menu->setid_menu($data['id_menu'])
      ->setnome($data['nome'])
      ->setvalor($data['valor'])
      ->setdescricao($data['descricao'])
      ->setfoto($data['foto']);
      $menu_dao->Update($menu);

      $response -> getBody() -> write("Menu modificado!");
      return $response;
   }

   public function Insert (Request $request, Response $response, array $args) : Response
   {
      $data=$request->getParsedBody();

      $menu_dao=new Menu_dao();
      $menu=new Menu();
      $menu->setid_menu($data['id_menu'])
         ->setnome($data['nome'])
         ->setvalor($data['valor'])
         ->setdescricao($data['descricao'])
         ->setfoto($data['foto']);
      $menu_dao->Insert($menu);

      $response -> getBody() -> write("Menu inserido!");
      return $response;
   }
 
   public function Delete (Request $request, Response $response, array $args) : Response
   {  
      $data=$request->getParsedBody();

      $menu_dao=new Menu_dao();
      $menu=new Menu();
      $menu->setid_menu($data['id_menu']);
      $menu_dao->Delete(intval($menu));

      $response -> getBody() -> write("Menu eliminado!");
      return $response;
   }
} 
?>