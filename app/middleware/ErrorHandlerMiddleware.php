<?php

namespace App\Middleware;

use App\Factory\LoggerFactory;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Log\LoggerInterface;


final class ErrorHandlerMiddleware implements MiddlewareInterface
{
    
    @var LoggerInterface
    
    private $logger;

    
    @param LoggerFactory 
    
    public function __construct( LoggerFactory $loggerFactory)
    {
        $this->Logger = $loggerFactory
            ->addFileHandler('errors.log')
            ->createInstance('error_handler_middleware');
    }

    
    @param ServerRequestInterface 
    @param RequestHandlerInterface 
     
    @return ResponseInterface 
    
    public function process(
        ServerRequestInterface $request, 
        RequestHandlerInterface $handler
    ): ResponseInterface
    {
        $errorTypes = E_ALL;

        set_error_handler(
            function ($errno, $errstr, $errfile, $errline) {
                switch ($errno) {
                    case E_USER_ERROR:
                        $this->logger->error(
                            "Error number [$errno] $errstr on line $errline in file $errfile"
                        );
                        break;
                    case E_USER_WARNING:
                        $this->logger->warning(
                            "Error number [$errno] $errstr on line $errline in file $errfile"
                        );
                        break;
                    default:
                        $this->logger->notice(
                            "Error number [$errno] $errstr on line $errline in file $errfile"
                        );
                        break;
                }

                return true;
            },
            $errorTypes
        );

        return $handler->handle($request);
    }
}