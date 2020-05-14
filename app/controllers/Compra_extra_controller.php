<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Compra_extra_dao;
    use App\Models\Compra_extra;

    class Compra_extra_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compra_extra_dao=new Compra_extra_dao();
            $compra_extra=new Compra_extra();
            $compra_extra->setId_compra_extra($data['id_compra_extra'])
                ->setQuantidade($data['quantidade'])
                ->setPreco($data['preco']);
            $compra_extra_dao->Insert($compra_extra);

            $response->getBody()->write("Compra extra criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $compra_extra_dao=new Compra_extra_dao();
            $compraextras=$compra_extra_dao->Select();
            $json=json_encode($compraextras);
            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $compra_extra_dao=new Compra_extra_dao();
            $compra_extra=new Compra_extra();
            $compra_extra->setId_compra_extra($data['id_compra_extra'])
                ->setQuantidade($data['quantidade'])
                ->setPreco($data['preco']);
            $compra_extra_dao->Update($compra_extra);

            $response->getBody()->write("Compra extra modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compra_extra_dao=new Compra_extra_dao();
            $compra_extra=new Compra_extra();
            $compra_extra->setId_compra_extra($data['id_compra_extra']);
            $compra_extra_dao->Delete(intval($compra_extra));

            $response->getBody()->write("Compra extra eliminada com sucesso!");
            return $response;
        }
    }
?>