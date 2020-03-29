<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\DAO\Alergenio_dao;
use App\Models\AlergenioModel;


final class Alergenio_controller
{                                
 
    public function Select (Request $request, Response $response, array $args) : Response
   {
    $alergenio=new Alergenio_dao();
    $alergenio=$alergenio->Select();

    $response = $response->withJson($alergenio);
    return $response;
   }
 
     
 
   public function Update (Request $request, Response $response, array $args) : Response
     {
        
        $alergenio=new Alergenio_dao();
        $alergenio=new Alergenio();
        $alergenio->setId_Alerge('');
        $alergenio->setTipo('');
        $alergenio->setDescricao('');
        $alergenio=$alergeniodao->Update($alergenio);

        $response = $response->withJson($alergenio);
        return $response;
     }
 

     public function Insert (Request $request, Response $response, array $args) : Response
     {

        $alergenio=new Alergenio_dao();
        $alergenio=new Alergenio();
        $alergenio->setId_Alerge('');
        $alergenio->setTipo('');
        $alergenio->setDescricao('');
        $alergenio=$alergeniodao->Insert($alergenio);

        $response = $response->withJson($alergenio);
        return $response;
     }
 
 
       public function Delete (Request $request, Response $response, array $args) : Response
     {  

        $alergenio=new Alergenio_dao();
        $alergenio=new Alergenio();
        $alergenio->setId_Alergenio('');
        $alergenio=$alergeniodao->Delete($alergenio)

        $response = $response->withJson($alergenio);
        return $response;
     }
} 
?>