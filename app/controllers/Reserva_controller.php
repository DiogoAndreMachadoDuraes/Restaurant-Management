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

            $reservasdao=new Reserva_dao();
            $reserva=new Reserva();
            $reserva->setId($data['id_reserva'])
                ->setPagamento($data['pagamento']);
            $reservasdao->Insert($reserva);

            $response->getBody()->write("Reserva criada com sucesso!");
            return $response;
        }

        public function Select (Request $request, Response $response, array $arg) : Response 
        {
            $reservasdao=new Reserva_dao();
            $reservas=$reservasdao->Select();
            $response->getBody()->write($reservas);

            return $response;
        }
        
        public function Update (Request $request, Response $response, array $arg) : Response 
        {   
            $data=$request->getParsedBody();

            $reservasdao=new Reserva_dao();
            $reserva=new Reserva();
            $reserva->setId($data['id_reserva'])
                ->setPagamento($data['pagamento']);
            $reservasdao->Update($reserva);

            $response->getBody()->write("Reserva modificada com sucesso!");
            return $response;
        }
        
        public function Delete (Request $request, Response $response, array $arg) : Response 
        {
            $data=$request->getParsedBody();

            $reservasdao=new Reserva_dao();
            $reserva=new Reserva();
            $reserva->setId($data['id_reserva']);
            $reservasdao->Delete(intval($reserva));

            $response->getBody()->write("Reserva eliminada com sucesso!");
            return $response;
        }
    }
?>