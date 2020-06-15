<?php

namespace App\Controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use App\DAO\Reserva_dao;
    use App\Models\Reserva;

    class Reserva_controller
    {
        public function Insert (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $reserva_dao=new Reserva_dao();
            $reserva=new Reserva();
            $reserva->set_estado($data['estado'])
                ->set_id_cliente($data['id_cliente']);
            $reserva_dao->Insert($reserva);

            $response->getBody()->write("Reserva criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $reserva_dao=new Reserva_dao();
            $reserva=$reserva_dao->Select();
            $json=json_encode($reserva);
            $response->getBody()->write($json);
            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $reserva_dao=new Reserva_dao();
            $reserva=new Reserva();
            $reserva->set_id_reserva($data['id_reserva'])
                ->set_estado($data['estado'])
                ->set_id_cliente($data['id_cliente']);
            $reserva_dao->Update($reserva);

            $response->getBody()->write("Reserva modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $reserva_dao=new Reserva_dao();
            $reserva=new Reserva();
            $reserva->set_id_reserva($data['id_reserva']);
            $reserva_dao->Delete(intval($reserva));

            $response->getBody()->write("Reserva eliminada com sucesso!");
            return $response;
        }
    }
?>