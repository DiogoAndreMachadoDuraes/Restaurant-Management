<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Cartao_fidelizacao_dao;
    use App\Models\Cartao_fidelizacao;
    use App\Models\Cliente;
    use App\Models\Compra_menu;

    class Cartao_fidelizacao_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cartao_fidelizacao_dao=new Cartao_fidelizacao_dao();
            $cartao_fidelizacao=new Cartao_fidelizacao();
            $cartao_fidelizacao->setN_compras($data['n_compras']);
            $cartao_fidelizacao_dao->Insert($cartao_fidelizacao);

            $response->getBody()->write("Cartao inserido com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $cartao_fidelizacao_dao=new Cartao_fidelizacao_dao();
            $cartao_fidelizacao=$cartao_fidelizacao_dao->Select();
            $json=json_encode($cartao_fidelizacao);
            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $cartao_fidelizacao_dao=new Cartao_fidelizacao_dao();
            $cartao_fidelizacao=new Cartao_fidelizacao();
            $cartao_fidelizacao->setId($data['id_cartao_fidelizacao'])
                ->setN_compras($data['n_compras']);
            $cartao_fidelizacao_dao->Update($cartao_fidelizacao);

            $response->getBody()->write("Cartao modificado com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cartao_fidelizacao_dao=new Cartao_fidelizacao_dao();
            $cartao_fidelizacao=new Cartao_fidelizacao();
            $cartao_fidelizacao->setId($data['id_cartao_fidelizacao']);
            $cartao_fidelizacao_dao->Delete(intval($cartao_fidelizacao));

            $response->getBody()->write("Cartao eliminado com sucesso!");
            return $response;
        }

        public function ContarMenus() :int
        {
            $compra_menu= new Compramenu();

            if($compra_menu)
            {
                $numero_compras=Cartao_fidelizacao::getN_compras();

                return $numero_compras+1;
            }
        }

        public function RefeicaoGratis() :void
        {
            $numero_compras=Cartao_fidelizacao::getN_compras();
            $nif=Cliente::getNif();

            if($numero_compras==10 && $nif=Cliente::getNif())
            {
                $id_cartao_fidelizacao=Cartao_fidelizacao::getId();
                $id_cartaofk=Cartao_fidelizacao::getId_cartao_fidelizacao();

                while($id_cartao_fidelizacao==$id_cartaofk){
                    $nif=Cliente::getNif();
                    echo("O cliente com o nif:") .$nif. ("com cartao ") .$id_cartao_fidelizacao. ("tem uma refeicao gratis");
                }
            }
        }
    }
?>