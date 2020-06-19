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

            $extra_dao=new Extra_dao();
            $extra=new Extra();
            $extra->set_nome($data['nome'])
                ->set_tipo($data['tipo'])
                ->set_preco($data['preco'])
                ->set_foto($data['foto']);
            $extra_dao->Insert($extra);

            $response->getBody()->write("Extra criado com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $extra_dao=new Extra_dao();
            $extra=$extra_dao->Select();
            $json=json_encode($extra);
            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $extra_dao=new Extra_dao();
            $extra=new Extra();
            $extra->set_id_extra($data['id_extra'])
                ->set_nome($data['nome'])
                ->set_tipo($data['tipo'])
                ->set_preco($data['preco'])
                ->set_foto($data['foto']);
            $extra_dao->Update($extra);

            $response->getBody()->write("Extra modificado com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $extra_dao=new Extra_dao();
            $extra=new Extra();
            $extra->set_id_extra($data['id_extra']);
            $extra_dao->Delete($extra);

            $response->getBody()->write("Extra eliminado com sucesso!");
            return $response;
        }
    }
?>