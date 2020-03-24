<?php

//criaçao da classe prato

class prato
{                                
  public int $id_prato;
  public string $nomeprato;
  public string $quantidade;
  public string $descricao;
  public double $preco;

   public function alergenio()
   {
     $this->id_prato = $id_prato;
     $this->nomeprato = $nomeprato;
     $this->quantidade = $quantidade;
     $this->descricao = $descricao;
     $this->preco = $preco;
   }

   public function CreatTable()
   {
  
    $sql = "CREATE TABLE Prato ( id_prato  INT(50), nomeprato VARCHAR(50), quantidade VARCHAR(50), descricao VARCHAR(50), preco VARCHAR(50) PRIMARY KEY (id_prato))";
    if ($con->query($sql) === TRUE){
        echo "tabela prato criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
     

     $sql = "SELECT * FROM prato";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['id_prato']."</th>
           <th>".$arr['nomeprato']."</th> 
           <th>".$arr['quantidade']."</th>
           <th>".$arr['descricao']."</th>
           <th>".$arr['preco']."</th>
         </tr>
         </table> ";
         //echo $arr["id_prato"] . ' - ' . $arr["nomeprato"] . ' - ' . $arr["quantidade"] . ' - ' . $arr["descricao"] . ' - ' . $arr["preco"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($id_prato, $nomeprato, $quantidade ,$descricao, $preco)
     {
     

     $sql = "UPDATE prato SET nomeprato=@nomeprato, quantidade=@quantidade, descricao=@descricao, preco=@preco WHERE id_prato=@id_prato ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($id_prato, $nomeprato, $quantidade, $descricao, $preco)
     {

     

     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO prato (id_prato, nomeprato, quantidade, descricao, preco) VALUES (@id_prato, @nomeprato, @quantidade, @descricao, @preco) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($id_prato, $nomeprato, $quantidade, $descricao, $preco)
     {  
     
       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM prato WHERE id_prato=@id_prato AND nomeprato=@nomeprato AND quantidade=@quantidade AND descricao=@descricao AND preco=@preco";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>
