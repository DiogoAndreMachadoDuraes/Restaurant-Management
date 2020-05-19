<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Refeicao_semanal_dao;
    use App\Models\Refeicao_semanal;
    
    class Refeicao_semanal_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $refeicao_semanal_dao=new Refeicao_semanal_dao();
            $refeicao_semanal=new Refeicao_semanal();
            $refeicao_semanal->setId_refeicao_semanal($data['id_refeicao_semanal'])
                ->setDia($data['dia'])
                ->setHora($data['hora']);
            $refeicao_semanal_dao->Insert($refeicao_semanal);

            $response->getBody()->write("Refeicao Semanal criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $refeicao_semanal_dao=new Refeicao_semanal_dao();
            $refeicaosemanals=$refeicao_semanal_dao->Select();
            $json=json_encode($refeicaosemanals);
            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $refeicao_semanal_dao=new Refeicao_semanal_dao();
            $refeicao_semanal=new Refeicao_semanal();
            $refeicao_semanal->setId_refeicao_semanal($data['id_refeicao_semanal'])
                ->setDia($data['dia'])
                ->setHora($data['hora']);
            $refeicao_semanal_dao->Update($refeicao_semanal);

            $response->getBody()->write("Refeicao Semanal modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();
            
            $refeicao_semanal_dao=new Refeicao_semanal_dao();
            $refeicao_semanal=new Refeicao_semanal();
            $refeicao_semanal->setId_refeicao_semanal($data['id_refeicao_semanal']);
            $refeicao_semanal_dao->Delete(intval($refeicao_semanal));

            $response->getBody()->write("Refeicao Semanal eliminada com sucesso!");
            return $response;
        }
        
    }
?>