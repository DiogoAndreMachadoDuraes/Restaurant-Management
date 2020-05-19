<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Compra_menu_dao;
    use App\Models\Compra_menu;

    class Compramenu_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compra_menu_dao=new Compra_menu_dao();
            $compra_menu=new Compra_menu();
            $compra_menu->set_quantidade($data['quantidade'])
                ->set_preco($data['preco']);
            $compra_menu_dao->Insert($compra_menu);
            $response->getBody()->write("Compra menu criada com sucesso!");

            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $compra_menu_dao=new Compra_menu_dao();
            $compra_menu=$compra_menu_dao->Select();
            $json=json_encode($compra_menu);
            $response->getBody->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $compra_menu_dao=new Compra_menu_dao();
            $compra_menu=new Compra_menu();
            $compra_menu->set_id_compra_menu($data['id_compra_menu'])
                ->set_quantidade($data['quantidade'])
                ->set_preco($data['preco']);
            $compra_menu_dao->Update($compra_menu);

            $response->getbody()->write("Compra menu modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $compra_menu_dao=new Compra_menu_dao();
            $compra_menu=new Compra_menu();
            $compra_menu->set_id_compra_menu($data['id_compra_menu']);
            $compra_menu_dao->Delete(intval($compra_menu));

            $response->getBody()->write("Compra menu eliminada com sucesso!");
            return $response;
        }
    }
?>