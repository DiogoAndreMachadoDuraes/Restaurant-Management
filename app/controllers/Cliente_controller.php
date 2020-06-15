<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Cliente_dao;
    use App\Models\Cliente;

    class Cliente_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cliente_dao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->set_numero_cartao($data['numero_cartao'])
                ->set_n_compras($data['n_compras'])
                ->set_id_utilizador($data['id_utilizador']);
            $cliente_dao->Insert($cliente);

            $response->getBody()->write("Cliente criado com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $cliente_dao=new Cliente_dao();
            $cliente=$cliente_dao->Select();
            $json=json_encode($cliente);
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
                ->set_n_compras($data['n_compras'])
                ->set_id_utilizador($data['id_utilizador']);
            $cliente_dao->Update($cliente);

            $response->getBody()->write ("Cliente modificado com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cliente_dao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->set_id_cliente($data['id_cliente']);
            $cliente_dao->Delete(intval($cliente));

            $response->getBody()->write("Cliente eliminado com sucesso!");
            return $response;
        }
        
       public function Updade_n_compras(Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cliente_dao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->set_id_cliente($data['id_cliente'])
                ->set_n_compras($data['n_compras']);
            $cliente_dao->Update_n_compras($cliente);
            $response->getBody()->write("Cliente fez mais uma compra com sucesso!");
            return $response;
        }

        public function Refeicao_gratis($n_compras, $numero_cartao) : void
        {
            $cliente_dao=new Cliente_dao();
            $cliente_dao->Refeicao_gratis();
            if($n_compras==10)
            {
                echo("O cliente com o numero de cartao ") .$numero_cartao. ("tem uma refeicao gratis");
            }
        }
    }
?>