<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Extra_dao;
    use App\Models\Extra;

    class Extra_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $extrasdao=new Extra_dao();
            $extra=new Extra();
            $extra->setId($data['id_reserva'])
                ->setNome($data['nome'])
                ->setTipo($data['tipo']);
            $extrasdao->Insert($extra);

            $response->getBody()->write("Extra criado com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $extrasdao=new Extra_dao();
            $extras=$extrasdao->Select();
            $response->getBody()->write($extras);
            $json=json_encode($extras);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $extrasdao=new Extra_dao();
            $extra=new Extra();
            $extra->setId($data['id_reserva'])
                ->setNome($data['nome'])
                ->setTipo($data['tipo']);
            $extrasdao->Update($extra);

            $response->getBody()->write("Extra modificado com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $extrasdao=new Extra_dao();
            $extra=new Extra();
            $extra->setId($data['id_reserva']);
            $extrasdao->Delete(intval($extra));

            $response->getBody()->write("Extra eliminado com sucesso!");
            return $response;
        }
    }
?>