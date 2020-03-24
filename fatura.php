<?php

include_once 'DAL/ConectionDB.php';
//criaçao da classe fatura

class fatura
{                                
  public int $id_fatura;
  public string $iva;
  public string $taxa;

   public function fatura()
   {
     $this->id_fatura = $id_fatura;
     $this->iva = $iva;
     $this->taxa = $taxa;
   }

   public function CreateTable()
   {
   $con=ConnectionDB::Connect();
     
    $sql = "CREATE TABLE Fatura ( id_fatura INT(50), iva VARCHAR(50), taxa VARCHAR(50), PRIMARY KEY (id_fatura))";
    if ($con->query($sql) === TRUE){
        echo "tabela fatura criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
       $con=ConnectionDB::Connect();
      
     $sql = "SELECT * FROM fatura";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['id_fatura']."</th>
           <th>".$arr['iva']."</th> 
           <th>".$arr['taxa']."</th>
         </tr>
         </table> ";
         //echo $arr["id_fatura"] . ' - ' . $arr["iva"] . ' - ' . $arr["taxa"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($id_fatura, $iva, $taxa)
     {
$con=ConnectionDB::Connect();

     $sql = "UPDATE fatura SET iva=@iva, taxa=@taxa WHERE id_fatura=@id_fatura ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_fatura, $iva, $taxa)
     {
       $con=ConnectionDB::Connect();

     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO fatura (id_fatura, iva, taxa) VALUES (@id_fatura, @iva, @taxa) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_fatura, $iva, $taxa)
     { 
$con=ConnectionDB::Connect();
         
       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM fatura WHERE id_fatura=@id_fatura AND iva=@iva AND taxa=@taxa";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
