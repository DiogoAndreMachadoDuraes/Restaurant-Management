<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Takeaway_dao;
use App\Models\TakeawayModel;


final class Takeaway_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
    $takeaway=new Takeaway_dao();
    $takeaway=$takeaway->Select();

    $response = $response->withJson($takeaway);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $takeaway=new Takeaway_dao();
        $takeaway=new Takeaway();
        $takeaway->setId_take('');
        $takeaway->setPreco('');
        $takeaway->setData('');
        $takeaway->setHora('');
        $takeaway->setTipodeentrega('');
        $takeaway=$takeawaydao->Update($takeaway);

        $response = $response->withJson($takeaway);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $takeaway=new Takeaway_dao();
        $takeaway=new Takeaway();
        $takeaway->setId_take('');
        $takeaway->setPreco('');
        $takeaway->setData('');
        $takeaway->setHora('');
        $takeaway->setTipodeentrega('');
        $takeaway=$takeawaydao->Insert($takeaway);

        $response = $response->withJson($takeaway);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $takeaway=new Takeaway_dao();
        $takeaway=new Takeaway();
        $takeaway->setId_take('');
        $takeaway=$takeawaydao->Delete($takeaway)

        $response = $response->withJson($takeaway);
        return $response;
     }
} 
?>