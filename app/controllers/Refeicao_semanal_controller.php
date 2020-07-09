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
            $refeicao_semanal->set_dia_semana($data['dia_semana'])
                ->set_data($data['data'])
                ->set_hora($data['hora'])
                ->set_id_restaurante($data['id_restaurante'])
                ->set_id_ementa($data['id_ementa']);
            $refeicao_semanal_dao->Insert($refeicao_semanal);
            $response->getBody()->write("Refeicao Semanal created!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $refeicao_semanal_dao=new Refeicao_semanal_dao();
            $refeicao_semanal=$refeicao_semanal_dao->Select();
            $json=json_encode($refeicao_semanal, JSON_UNESCAPED_UNICODE);

            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $refeicao_semanal_dao=new Refeicao_semanal_dao();
            $refeicao_semanal=new Refeicao_semanal();
            $refeicao_semanal->set_id_refeicao_semanal($data['id_refeicao_semanal'])
                ->set_dia_semana($data['dia_semana'])
                ->set_data($data['data'])
                ->set_hora($data['hora'])
                ->set_id_restaurante($data['id_restaurante'])
                ->set_id_ementa($data['id_ementa']);
            $refeicao_semanal_dao->Update($refeicao_semanal);
            $response->getBody()->write("Refeicao Semanal updated!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();
            
            $refeicao_semanal_dao=new Refeicao_semanal_dao();
            $refeicao_semanal=new Refeicao_semanal();
            $refeicao_semanal->set_id_refeicao_semanal($data['id_refeicao_semanal']);
            $refeicao_semanal_dao->Delete($refeicao_semanal);

            $response->getBody()->write("Refeicao Semanal deleted!");
            return $response;
        }
    }
?>