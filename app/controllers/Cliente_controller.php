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
                    ->set_n_compras($data['n_compras']);
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
                ->set_n_compras($data['n_compras']);
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
        
        /*public function Contar_menus() :int
        {
            $compra_menu= new Compramenu();

            if($compra_menu)
            {
                $numero_compras=getN_compras();

                return $numero_compras+1;
            }
        }

        public function Refeicao_gratis() :void
        {
            $numero_compras=getN_compras();
            $nif=Utilizador::getnif();

            if($numero_compras==10 && $nif=Cliente::getNif())
            {
                $id_cartao_fidelizacao=Cartao_fidelizacao::getId();
                $id_cartaofk=Cartao_fidelizacao::getId_cartao_fidelizacao();

                while($id_cartao_fidelizacao==$id_cartaofk){
                    $nif=Cliente::getNif();
                    echo("O cliente com o nif:") .$nif. ("com cartao ") .$id_cartao_fidelizacao. ("tem uma refeicao gratis");
                }
            }
        }*/
    }
?>