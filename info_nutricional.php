<?php

include_once 'DAL/ConectionDB.php';
//criaçao da classe informacao nutricional

class Info_nutricional
{                                
  public int $id_nutri;
  public string $tipo;
  public string $quantidade_nutrientes;
  public string $descricao;

   public function Info_nutricional()
   {
     $this->id_nutri = $id_nutri;
     $this->tipo = $tipo;
     $this->quantidade_nutrientes = $quantidade_nutrientes;
     $this->descricao = $descricao;
   }

   public function CreateTable()
   {
    $con=ConnectionDB::Connect();


    $sql = "CREATE TABLE Info_nutricional ( id_nutri  INT(50), tipo VARCHAR(50),quantidade_nutrientes VARCHAR(50), descricao VARCHAR(50), PRIMARY KEY (id_nutri))";
    if ($con->query($sql) === TRUE){
        echo "tabela nutricional criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
        $con=ConnectionDB::Connect();

     
     $sql = "SELECT * FROM Info_nutricional";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['id_nutri']."</th>
           <th>".$arr['tipo']."</th> 
           <th>".$arr['quantidade_nutrientes']."</th> 
           <th>".$arr['descricao']."</th>
         </tr>
         </table> ";
         //echo $arr["id_alerge"] . ' - ' . $arr["tipo"] . ' - ' . $arr["quantidade_nutrientes"] . ' - ' . $arr["descricao"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($id_nutri, $tipo, $quantidade_nutrientes, $descricao)
     {
     $con=ConnectionDB::Connect();


     $sql = "UPDATE Info_nutricional SET tipo=@tipo, quantidade_nutrientes=@quantidade_nutrientes, descricao=@descricao WHERE id_nutri=@nutri ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_nutri, $tipo, $quantidade_nutrientes, $descricao)
     {
        $con=ConnectionDB::Connect();


     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO Info_nutricional (id_nutri, tipo, quantidade_nutrientes, descricao) VALUES (@id_nutri, @tipo, @quantidade_nutrientes, @descricao) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_nutri, $tipo, $quantidade_nutrientes, $descricao)
     {  
          $con=ConnectionDB::Connect();

      
       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM Info_nutricional WHERE id_nutri=@id_nutri AND tipo=@tipo AND quantidade_nutrientes=@quantidade_nutrientes AND descricao=@descricao";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
