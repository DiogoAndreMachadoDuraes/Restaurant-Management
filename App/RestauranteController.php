<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Restaurante_dao;
use App\Models\RestauranteModel;


final class Restaurante_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
    $restaurante=new Restaurante_dao();
    $restaurante=$restaurante->Select();

    $response = $response->withJson($restaurante);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $restaurante=new Restaurante_dao();
        $restaurante=new Restaurante();
        $restaurante->setId_Restaurante('');
        $restaurante->setNome('');
        $restaurante->setLocalizacao('');
        $restaurante->setTelefone('');
        $restaurante->setEmail('');
        $restaurante=$restaurantedao->Update($restaurante);

        $response = $response->withJson($restaurante);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $restaurante=new Restaurante_dao();
        $restaurante=new Restaurante();
        $restaurante->setId_Restaurante('');
        $restaurante->setNome('');
        $restaurante->setLocalizacao('');
        $restaurante->setTelefone('');
        $restaurante->setEmail('');
        $restaurante=$restaurantedao->Insert($restaurante);

        $response = $response->withJson($restaurante);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $restaurante=new Restaurante_dao();
        $restaurante=new Restaurante();
        $restaurante->setId_Restaurante('');
        $restaurante=$restaurantedao->Delete($restaurante)

        $response = $response->withJson($restaurante);
        return $response;
     }
} 
?>