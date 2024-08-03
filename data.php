<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $temperature = $_POST['temperature'];
    $humidity = $_POST['humidity'];
    $cihazid = $_POST['cihazid'];

    // Verileri bir dosyaya kaydet
    $data = [
        'temperature' => $temperature,
        'humidity' => $humidity,
        'cihazid' => $cihazid,
        'last_update' => time()
    ];
    file_put_contents('phpfiles/data.json', json_encode($data));

    echo "Gelen sicaklik: " . $temperature . " ve Gelen nem: " . $humidity . " CihazID: " . $cihazid;
} else {
    echo "No data received";
}
?>
