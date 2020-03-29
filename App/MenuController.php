<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Menu_dao;
use App\Models\MenuModel;


final class Menu_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
    $menu=new Menu_dao();
    $menu=$menu->Select();

    $response = $response->withJson($menu);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $menu=new Menu_dao();
        $menu=new Menu();
        $menu->setNumero_menu('');
        $menu->setValormenu('');
        $menu->setDescricao('');
        $menu=$menudao->Update($menu);

        $response = $response->withJson($menu);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $menu=new Menu_dao();
        $menu=new Menu();
        $menu->setNumero_menu('');
        $menu->setValormenu('');
        $menu->setDescricao('');
        $menu=$menudao->Insert($menu);

        $response = $response->withJson($menu);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $menu=new Menu_dao();
        $menu=new Menu();
        $menu->setNumero_menu('');
        $menu=$menudao->Delete($menu)

        $response = $response->withJson($menu);
        return $response;
     }
} 
?>