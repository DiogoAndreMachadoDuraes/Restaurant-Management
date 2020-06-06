<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Produto_extra_dao;
    use App\Models\Produto_extra;

    class Produto_extra_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $produto_extra_dao=new Produto_extra_dao();
            $produto_extra=new Produto_extra();
            $produto_extra->set_id_produto_extra($data['id_produto_extra'])
                ->set_quantidade($data['quantidade']);
            $produto_extra_dao->Insert($produto_extra);

            $response->getBody()->write("Compra produto criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $produto_extra_dao=new Produto_extra_dao();
            $produto_extra=$produto_extra_dao->Select();
            $json=json_encode($produto_extra);
            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $produto_extra_dao=new Produto_extra_dao();
            $produto_extra=new Produto_extra();
            $produto_extra->set_id_produto_extra($data['id_produto_extra'])
                ->set_quantidade($data['quantidade']);
            $produto_extra_dao->Update($produto_extra);

            $response->getBody()->write("Compra produto modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $produto_extra_dao=new Produto_extra_dao();
            $produto_extra=new Produto_extra();
            $produto_extra->set_id_produto_extra($data['id_produto_extra']);
            $produto_extra_dao->Delete(intval($produto_extra));

            $response->getBody()->write("Compra produto eliminada com sucesso!");
            return $response;
        }
    }
?>