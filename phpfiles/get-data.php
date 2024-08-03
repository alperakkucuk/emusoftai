<?php
if (file_exists('phpfiles/data.json')) {
    $data = json_decode(file_get_contents('phpfiles/data.json'), true);
    echo "Temperature: " . $data['temperature'] . ", Humidity: " . $data['humidity'] . ", CihazID: " . $data['cihazid'];
} else {
    echo "No data available";
}
?>
