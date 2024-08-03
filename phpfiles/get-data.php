<?php
if (file_exists('data.json')) {
    $data = json_decode(file_get_contents('data.json'), true);
    echo "Temperature: " . $data['temperature'] . ", Humidity: " . $data['humidity'] . ", CihazID: " . $data['cihazid'];
} else {
    echo "No data available";
}
?>
