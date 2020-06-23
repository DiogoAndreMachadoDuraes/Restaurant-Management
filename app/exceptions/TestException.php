<?php

    namespace App\Exceptions;

    use Slim\Exception\HttpException;

    class TestException extends HttpException
    {
        protected $code = 504;
        protected $message = 'Gateway Timeout.';
        protected $title = '504 Gateway Timeout';
        protected $description = 'Timed out before receiving response from the upstream server.';
}
?>