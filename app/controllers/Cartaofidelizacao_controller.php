<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Cartaofidelizacao_dao;
    use App\Models\Cartaofidelizacao;
    use App\Models\Cliente;
    use App\Models\Compramenu;

    class Cartaofidelizacao_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cartaofidelizacaosdao=new Cartaofidelizacao_dao();
            $cartaofidelizacao=new Cartaofidelizacao();
            $cartaofidelizacao->setN_compras($data['n_compras']);
            $cartaofidelizacaosdao->Insert($cartaofidelizacao);

            $response->getBody()->write("Cartao inserido com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $cartaofidelizacaosdao=new Cartaofidelizacao_dao();
            $cartaofidelizacaos=$cartaofidelizacaosdao->Select();
            
            $response->getBody()->write($cartaofidelizacaos);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $cartaofidelizacaosdao=new Cartaofidelizacao_dao();
            $cartaofidelizacao=new Cartaofidelizacao();
            $cartaofidelizacao->setId($data['id_cartao'])
                ->setN_compras($data['n_compras']);
            $cartaofidelizacaosdao->Update($cartaofidelizacao);

            $response->getBody()->write("Cartao modificado com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $cartaofidelizacaosdao=new Cartaofidelizacao_dao();
            $cartaofidelizacao=new Cartaofidelizacao();
            $cartaofidelizacao->setId($data['id_cartao']);
            $cartaofidelizacaosdao->Delete(intval($cartaofidelizacao));

            $response->getBody()->write("Cartao eliminado com sucesso!");
            return $response;
        }

        public function ContarMenus() :int
        {
            $compramenus= new Compramenu();

            if($compramenus)
            {
                $numerocompras=Cartaofidelizacao::getN_compras();

                return $numerocompras+1;
            }
        }

        public function RefeicaoGratis() :void
        {
            $numerocompras=Cartaofidelizacao::getN_compras();
            $nif_cliente=Cartaofidelizacao::getNif();

            if($numerocompras==10 && $nif=Cliente::getNif())
            {
                $id_cartao=Cartaofidelizacao::getId();
                $nome=Cliente::getNome();

                echo("O cliente ") .$nome. ("com cartao ") .$id_cartao. ("tem uma refeicao gratis");
            }
        }
    }
?>