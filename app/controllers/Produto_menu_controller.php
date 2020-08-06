<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Produto_menu_dao;
    use App\Models\Produto_menu;

    class Produto_menu_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $produto_menu_dao=new Produto_menu_dao();
            $produto_menu=new Produto_menu();
            $produto_menu->set_quantidade($data['quantidade'])
                ->set_id_produto($data['id_produto'])
                ->set_id_menu($data['id_menu']);
            $produto_menu_dao->Insert($produto_menu);
            
            $response->getBody()->write("Produto menu created!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $produto_menu_dao=new Produto_menu_dao();
            $produto_menu=$produto_menu_dao->Select();
            $json=json_encode($produto_menu, JSON_UNESCAPED_UNICODE);

            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $produto_menu_dao=new Produto_menu_dao();
            $produto_menu=new Produto_menu();
            $produto_menu->set_id_produto_menu($data['id_produto_menu'])
                ->set_quantidade($data['quantidade'])
                ->set_id_produto($data['id_produto'])
                ->set_id_menu($data['id_menu']);
            $produto_menu_dao->Update($produto_menu);

            $response->getBody()->write("Produto menu updated!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $produto_menu_dao=new Produto_menu_dao();
            $produto_menu=new Produto_menu();
            $produto_menu->set_id_produto_menu($data['id_produto_menu']);
            $produto_menu_dao->Delete($produto_menu);

            $response->getBody()->write("Produto menu deleted!");
            return $response;
        }
    }
?>