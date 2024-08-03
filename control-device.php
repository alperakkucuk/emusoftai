<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $role = $_POST['role'];
    $state = $_POST['state'];

    // Mevcut durumları yükle
    $rolesStateFile = 'phpfiles/roles-state.json';
    if (file_exists($rolesStateFile)) {
        $rolesState = json_decode(file_get_contents($rolesStateFile), true);
    } else {
        $rolesState = [
            'role1' => 'off',
            'role2' => 'off',
            'role3' => 'off',
            'role4' => 'off'
        ];
    }

    // Yeni durumu güncelle
    $rolesState[$role] = $state;
    file_put_contents($rolesStateFile, json_encode($rolesState));

    echo $role . " " . $state . " olarak ayarlandı.";
} else {
    echo "No data received";
}
?>
