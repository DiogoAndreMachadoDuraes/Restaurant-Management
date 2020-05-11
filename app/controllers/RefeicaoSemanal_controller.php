<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\RefeicaoSemanal_dao;
    use App\Models\RefeicaoSemanal;
    
    class RefeicaoSemanal_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $refeicaosemanalsdao=new RefeicaoSemanal_dao();
            $refeicaosemanal=new RefeicaoSemanal();
            $refeicaosemanal->setId($data['id_reserva'])
                ->setDia($data['dia'])
                ->setHora($data['hora']);
            $refeicaosemanalsdao->Insert($refeicaosemanal);

            $response->getBody()->write("Refeicao Semanal criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $refeicaosemanalsdao=new RefeicaoSemanal_dao();
            $refeicaosemanals=$refeicaosemanalsdao->Select();
            $response->getBody()->write($refeicaosemanals);
            $json=json_encode($refeicaosemanals);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $refeicaosemanalsdao=new RefeicaoSemanal_dao();
            $refeicaosemanal=new RefeicaoSemanal();
            $refeicaosemanal->setId($data['id_reserva'])
                ->setDia($data['dia'])
                ->setHora($data['hora']);
            $refeicaosemanalsdao->Update($refeicaosemanal);

            $response->getBody()->write("Refeicao Semanal modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();
            
            $refeicaosemanalsdao=new RefeicaoSemanal_dao();
            $refeicaosemanal=new RefeicaoSemanal();
            $refeicaosemanal->setId($data['id_reserva']);
            $refeicaosemanalsdao->Delete(intval($refeicaosemanal));

            $response->getBody()->write("Refeicao Semanal eliminada com sucesso!");
            return $response;
        }
    }
?>