// Mengambil tinggi navbar agar bisa di-offset saat scroll
const navbarHeight = document.querySelector('nav').offsetHeight;

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Menghentikan aksi default link

        const targetSection = document.querySelector(this.getAttribute('href'));
        const sectionPosition = targetSection.offsetTop - navbarHeight; // Menghitung posisi scroll dengan offset

        // Melakukan scroll dengan offset yang memperhitungkan tinggi navbar
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth' // Menambahkan animasi scroll halus
        });
    });
});

// Fungsi untuk menampilkan pesan form berhasil dikirim
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Reset form setelah submit
    document.getElementById('contactForm').reset();
});
