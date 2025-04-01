<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';

// Validações básicas
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Todos os campos são obrigatórios']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit();
}

if ($_SERVER['REQUEST_URI'] !== '/send-email') {
    http_response_code(403);
    exit('Acesso não autorizado');
}

$to = 'snakeds@gmail.com'; // Seu email aqui
$subject = "Nova mensagem do portfolio - de $name";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$email_content = "Nome: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Mensagem:\n$message";

$success = mail($to, $subject, $email_content, $headers);

if ($success) {
    echo json_encode(['message' => 'Email enviado com sucesso']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao enviar email']);
}
?>
