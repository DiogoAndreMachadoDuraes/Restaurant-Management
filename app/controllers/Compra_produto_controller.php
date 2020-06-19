<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Compra_produto_dao;
    use App\Models\Compra_produto;

    class Compra_produto_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compra_produto_dao=new Compra_produto_dao();
            $compra_produto=new Compra_produto();
            $compra_produto->set_preco($data['preco'])
                ->set_id_produto($data['id_produto'])
                ->set_id_reserva($data['id_reserva']);
            $compra_produto_dao->Insert($compra_produto);

            $response->getBody()->write("Compra produto criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $compra_produto_dao=new Compra_produto_dao();
            $compra_produto=$compra_produto_dao->Select();
            $json=json_encode($compra_produto);
            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $compra_produto_dao=new Compra_produto_dao();
            $compra_produto=new Compra_produto();
            $compra_produto->set_id_compra_produto($data['id_compra_produto'])
                ->set_preco($data['preco'])
                ->set_id_produto($data['id_produto'])
                ->set_id_reserva($data['id_reserva']);
            $compra_produto_dao->Update($compra_produto);

            $response->getBody()->write("Compra produto modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compra_produto_dao=new Compra_produto_dao();
            $compra_produto=new Compra_produto();
            $compra_produto->set_id_compra_produto($data['id_compra_produto']);
            $compra_produto_dao->Delete($compra_produto);

            $response->getBody()->write("Compra produto eliminada com sucesso!");
            return $response;
        }
    }
?>