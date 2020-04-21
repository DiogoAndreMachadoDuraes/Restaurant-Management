<?php

   abstract class ConnectionDB
   {
      protected string $pdo;

      public function __construct()
      {
         $host=getenv('Ementas_Restauracao_HOST');
         $port=getenv('Ementas_Restauracao_PORT');
         $user=getenv('Ementas_Restauracao_USER');
         $pass=getenv('Ementas_Restauracao_PASSWORD');
         $dbname=getenv('Ementas_Restauracao_DBNAME');

         $dsn="mysql:host={$host}; dbname={$dbname}; port={$port}";

         $this->pdo=new \PDO($dsn, $user, $pass);
         $this->pdo->setAttribute(
            \PDO::ATTR_ERRMODE,
            \PDO::ERRMODE_EXCEPTION
         );
      }
   }
?>