<?php
$data = json_decode(file_get_contents("php://input"), true);
$telefone = $data['telefone'];

$file = fopen("numeros_telefone.txt", "a");
fwrite($file, $telefone . PHP_EOL);
fclose($file);

$response = ['message' => 'Número de telefone salvo com sucesso!'];
echo json_encode($response);
?>
