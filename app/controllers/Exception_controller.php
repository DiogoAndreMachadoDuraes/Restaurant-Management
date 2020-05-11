<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Exceptions\TestException;

final class ExceptionController
{

    public function test(Request $request, Response $response, array $args)
    {
        try{
            throw new TestException ("Testing. . .");
            return  $response -> getBody() -> write(['sms' => 'ok']);
            
        }   
            catch(TestException $ex) {
            return  $response -> getBody() -> write([
                'error' => TestException::class,
                'status' => 400,
                'code' => '003',
                'userMessage' => 'Just Test.',
                'developerMessage' => $ex -> getMessage()
            ],400);
        }
            catch(\InvalidArgumentException $ex) {
            return  $response -> getBody() -> write([
                'error' => \InvalidArgumentException::class,
                'status' => 400,
                'code' => '002',
                'userMessage' => 'It is necessary send all dates for the login.',
                'developerMessage' => $ex -> getMessage()
            ],400);
        }   catch(\Exception | \Throwable $ex) {
                return  $response -> getBody() -> write([
                    'error' => \Exception::class,
                    'status' => 500,
                    'code' => '001',
                    'userMessage' => 'Error in App.',
                    'developerMessage' => $ex -> getMessage()
                ],500);

        }
    }

}



?>