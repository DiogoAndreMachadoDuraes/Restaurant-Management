<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Cliente_dao;
    use App\Models\Cliente;
use Exception;
use InvalidArgumentException;

class Cliente_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cliente_dao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->set_numero_cartao($data['numero_cartao'])
                ->set_numero_compras($data['numero_compras'])
                ->set_id_utilizador($data['id_utilizador']);
            $cliente_dao->Insert($cliente);
            
            $response->getBody()->write("Cliente created!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $cliente_dao=new Cliente_dao();
            $cliente=$cliente_dao->Select();
            $json=json_encode($cliente, JSON_UNESCAPED_UNICODE);

            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cliente_dao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->set_id_cliente($data['id_cliente'])
                ->set_numero_cartao($data['numero_cartao'])
                ->set_numero_compras($data['numero_compras'])
                ->set_id_utilizador($data['id_utilizador']);
            $cliente_dao->Update($cliente);
            $response->getBody()->write ("Cliente updated!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cliente_dao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->set_id_cliente($data['id_cliente']);
            $cliente_dao->Delete($cliente);

            $response->getBody()->write("Cliente deleted!");
            return $response;
        }
        
       public function Updade_purchase(Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cliente_dao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->set_id_cliente($data['numero_cartao'])
                ->set_numero_compras($data['numero_compras']);
            $cliente_dao->Update_purchase($cliente);
            $response->getBody()->write("Cliente made a purchase!");
            return $response;
        }
    }
?>