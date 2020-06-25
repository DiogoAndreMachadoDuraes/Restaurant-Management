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
            
            $ementa_dao=new Ementa_dao();
            $ementa=new Ementa();
            $ementa->set_nome($data['nome'])
                ->set_descricao($data['descricao']);
            $ementa_dao->Insert($ementa);
            
            $response->getBody()->write("Ementa criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $ementa_dao=new Ementa_dao();
            $ementa=$ementa_dao->Select();
            $json=json_encode($ementa, JSON_UNESCAPED_UNICODE);

            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $ementa_dao=new Ementa_dao();
            $ementa=new Ementa();
            $ementa->set_id_ementa($data['id_ementa']) 
                ->set_nome($data['nome'])
                ->set_descricao($data['descricao']);
            $ementa_dao->Update($ementa);

            $response->getBody()->write("Ementa modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $ementa_dao=new Ementa_dao();
            $ementa=new Ementa();
            $ementa->set_id_ementa($data['id_ementa']);
            $ementa_dao->Delete($ementa);

            $response->getBody()->write("Ementa eliminada com sucesso!");
            return $response;
        }
    }
?>