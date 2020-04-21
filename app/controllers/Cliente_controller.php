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

            $clientesdao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->setNif($data['nif'])
                ->setNome($data['nome'])
                ->setTelefone($data['telefone'])
                ->setEmail($data['email'])
                ->setMorada($data['morada']);
            $clientesdao->Insert($cliente);

            $response->getBody()->write("Cliente criado com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $clientesdao=new Cliente_dao();
            $clientes=$clientesdao->Select();
        
            $response->getBody()->write($clientes);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $clientesdao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->setNif($data['nif'])
                ->setNome($data['nome'])
                ->setTelefone($data['telefone'])
                ->setEmail($data['email'])
                ->setMorada($data['morada']);
            $clientesdao->Update($cliente);

            $response->getBody()->write ("Cliente modificado com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $clientesdao=new Cliente_dao();
            $cliente=new Cliente();
            $cliente->setNif($data['nif']);
            $clientesdao->Delete(intval($cliente));

            $response->getBody()->write("Cliente eliminado com sucesso!");
            return $response;
        }
    }
?>