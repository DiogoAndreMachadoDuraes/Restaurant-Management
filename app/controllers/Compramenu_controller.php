<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Compramenu_dao;
    use App\Models\Compramenu;

    class Compramenu_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compramenusdao=new Compramenu_dao();
            $compramenu=new Compramenu();
            $compramenu->setId($data['id_compramenu'])
                ->setQuantidade($data['quantidade'])
                ->setPreco($data['preco_menu']);
            $compramenusdao->Insert($compramenu);
            $response->getBody()->write("Compra menu criada com sucesso!");

            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $compramenusdao=new Compramenu_dao();
            $compramenus=$compramenusdao->Select();
            $json=json_encode($compramenus);
            $response->getBody->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $compramenusdao=new Compramenu_dao();
            $compramenu=new Compramenu();
            $compramenu->setId($data['id_compramenu'])
                ->setQuantidade($data['quantidade'])
                ->setPreco($data['preco_menu']);
            $compramenusdao->Update($compramenu);

            $response->getbody()->write("Compra menu modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compramenusdao=new Compramenu_dao();
            $compramenu=new Compramenu();
            $compramenu->setId($data['id_compramenu']);
            $compramenusdao->Delete(intval($compramenu));

            $response->getBody()->write("Compra menu eliminada com sucesso!");
            return $response;
        }
    }
?>