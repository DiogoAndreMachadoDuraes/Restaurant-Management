<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Compraextra_dao;
    use App\Models\Compraextra;

    class Compraextra_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compraextrasdao=new Compraextra_dao();
            $compraextra=new Compraextra();
            $compraextra->setId($data['id_compraextra'])
                ->setQuantidade($data['quantidade'])
                ->setPreco($data['preco_compraextra']);
            $compraextrasdao->Insert($compraextra);

            $response->getBody()->write("Compra extra criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $compraextrasdao=new Compraextra_dao();
            $compraextras=$compraextrasdao->Select();

            $response->getBody()->write($compraextras);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $compraextrasdao=new Compraextra_dao();
            $compraextra=new Compraextra();
            $compraextra->setId($data['id_compraextra'])
                ->setQuantidade($data['quantidade'])
                ->setPreco($data['preco_compraextra']);
            $compraextrasdao->Update($compraextra);

            $response->getBody()->write("Compra extra modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compraextrasdao=new Compraextra_dao();
            $compraextra=new Compraextra();
            $compraextra->setId($data['id_compraextra']);
            $compraextrasdao->Delete(intval($compraextra));

            $response->getBody()->write("Compra extra eliminada com sucesso!");
            return $response;
        }
    }
?>