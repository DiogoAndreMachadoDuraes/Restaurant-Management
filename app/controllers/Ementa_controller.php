<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Ementa_dao;
    use App\Models\Ementa;

    class Ementa_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();
            
            $ementasdao=new Ementa_dao();
            $ementa=new Ementa();
            $ementa->setId($data['id_ementa']) 
                ->setDescricao($data['descricao']);
            $ementasdao->Insert($ementa);

            $response->getBody()->write("Ementa criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $ementasdao=new Ementa_dao();
            $ementas=$ementasdao->Select();
            $json=json_encode($ementas);
            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $ementasdao=new Ementa_dao();
            $ementa=new Ementa();
            $ementa->setId($data['id_ementa']) 
                ->setDescricao($data['descricao']);
            $ementasdao->Update($ementa);

            $response->getBody()->write("Ementa modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();
            
            $ementasdao=new Ementa_dao();
            $ementa=new Ementa();
            $ementa->setId($data['id_ementa']);
            $ementasdao->Delete(intval($ementa));

            $response->getBody()->write("Ementa eliminada com sucesso!");
            return $response;
        }
    }
?>