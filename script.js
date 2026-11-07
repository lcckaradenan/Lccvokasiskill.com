// ======================================================
// MY ACCOUNT
// ======================================================

function tampilkanAkun() {

    const user = JSON.parse(
        localStorage.getItem("userRegister")
    );

    if (!user) return;

    const idAkun = document.getElementById("idAkun");
    const namaAkun = document.getElementById("namaAkun");
    const emailAkun = document.getElementById("emailAkun");
    const tanggal = document.getElementById("tanggal");

    if (idAkun) {
        idAkun.textContent = user.id || "";
    }

    if (namaAkun) {
        namaAkun.textContent = user.nama || "";
    }

    if (emailAkun) {
        emailAkun.textContent = user.email || "";
    }

    if (tanggal) {
        tanggal.textContent = user.tanggal || "";
    }
}



/* ======================================================
   REGISTER
   ====================================================== */

const form = document.getElementById("registerForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const namaInput = document.getElementById("nama");
        const emailInput = document.getElementById("email");
        const teleponInput = document.getElementById("telepon");

        const data = {
            id:
                "LCC-" +
                Math.floor(Math.random() * 100000),

            nama: namaInput
                ? namaInput.value.trim()
                : "",

            email: emailInput
                ? emailInput.value.trim()
                : "",

            hp: teleponInput
                ? teleponInput.value.trim()
                : "",

            tanggal: new Date().toLocaleDateString("id-ID")
        };

        // Simpan data akun seperti fungsi lama
        localStorage.setItem(
            "userRegister",
            JSON.stringify(data)
        );

        // Tampilkan data akun seperti fungsi lama
        tampilkanAkun();

        // ==========================================
        // INTEGRASI GOOGLE FORM DAN WHATSAPP
        // ==========================================

        const linkGoogleForm =
            "https://forms.gle/FAoFhBoe41icws8M7";

        // Nomor sesuai yang diberikan.
        // Pastikan nomor WhatsApp Admin lengkap.
        const nomorWA = "62818949099";

        const pesanWA =
            "Halo Admin LCC Karadenan.\n\n" +
            "Isi Google Form sebelum mendaftar.\n\n" +
            "Silakan isi formulir melalui link berikut:\n" +
            linkGoogleForm +
            "\n\n" +
            "Nama: " + data.nama + "\n" +
            "Email: " + data.email + "\n" +
            "Nomor HP: " + data.hp + "\n\n" +
            "Terima kasih.";

        const linkWA =
            "https://wa.me/" +
            nomorWA +
            "?text=" +
            encodeURIComponent(pesanWA);

        // Buka WhatsApp dengan pesan otomatis
        window.open(linkWA, "_blank");

        // Reset form seperti fungsi lama
        form.reset();

        // Scroll ke Account seperti fungsi lama
        const account = document.getElementById("account");

        if (account) {
            account.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}



// ======================================================
// TAMPILKAN DATA SAAT HALAMAN DIBUKA
// ======================================================

window.addEventListener(
    "load",
    tampilkanAkun
);


// ======================================================
// RESET ACCOUNT
// ======================================================

function resetAccount() {

    localStorage.removeItem(
        "userRegister"
    );

    const idAkun = document.getElementById("idAkun");
    const namaAkun = document.getElementById("namaAkun");
    const emailAkun = document.getElementById("emailAkun");
    const tanggal = document.getElementById("tanggal");

    if (idAkun) {
        idAkun.textContent = "";
    }

    if (namaAkun) {
        namaAkun.textContent = "";
    }

    if (emailAkun) {
        emailAkun.textContent = "";
    }

    if (tanggal) {
        tanggal.textContent = "";
    }

}


// ======================================================
// SEARCH COURSE
// ======================================================

function filterCourse() {

    const search =
        document.getElementById("search");

    const keyword =
        search
            ? search.value
                .toLowerCase()
                .trim()
            : "";

    document
        .querySelectorAll(
            "#courseGrid .course-card"
        )
        .forEach(card => {

            const text =
                card.innerText
                    .toLowerCase();

            card.style.display =
                text.includes(keyword)
                    ? ""
                    : "none";

        });

}


// ======================================================
// LIGHTBOX GAMBAR
// ======================================================

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImg =
    document.getElementById(
        "lightbox-img"
    );

const closeBtn =
    document.querySelector(
        ".close"
    );


// Hanya aktif jika elemen lightbox tersedia
if (
    lightbox &&
    lightboxImg
) {

    document
        .querySelectorAll(
            ".card img"
        )
        .forEach(img => {

            img.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    lightbox.style.display =
                        "flex";

                    lightboxImg.src =
                        this.src;

                }
            );

        });

}


function closeImage() {

    if (!lightbox) return;

    lightbox.style.display =
        "none";

}


if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        closeImage
    );

}


if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (e) {

            if (
                e.target ===
                lightbox
            ) {

                closeImage();

            }

        }
    );

}


// ======================================================
// FOOTER YEAR
// ======================================================

const year =
    document.getElementById(
        "year"
    );

if (year) {

    year.textContent =
        new Date().getFullYear();

}


// ======================================================
// TESTIMONI ANIMATION
// ======================================================

const testimonialCards =
    document.querySelectorAll(
        ".testimonial-card"
    );

if (
    testimonialCards.length &&
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            }
        );

    testimonialCards.forEach(
        card => {

            card.style.opacity =
                "0";

            card.style.transform =
                "translateY(50px)";

            card.style.transition =
                "0.8s";

            observer.observe(
                card
            );

        }
    );

}


// ======================================================
// HAMBURGER MENU
// ======================================================

const hamburger =
    document.getElementById(
        "hamburger-menu"
    );

const navbar =
    document.querySelector(
        ".navbar-nav"
    );

if (
    hamburger &&
    navbar
) {

    hamburger.addEventListener(
        "click",
        function (e) {

            e.stopPropagation();

            navbar.classList.toggle(
                "active"
            );

        }
    );


    // Tutup sidebar saat klik di luar
    document.addEventListener(
        "click",
        function (e) {

            if (
                !navbar.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {

                navbar.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ======================================================
// DROPDOWN PAGES
// ======================================================

const dropdown =
    document.querySelector(
        ".dropdown"
    );

if (dropdown) {

    dropdown.addEventListener(
        "click",
        function (e) {

            // Jika klik link di dalam dropdown,
            // biarkan link berjalan normal.
            if (
                e.target.closest(
                    ".dropdown-menu a, .dropdown-menu button"
                )
            ) {

                return;

            }

            // Khusus mobile
            if (
                window.innerWidth <= 768
            ) {

                e.preventDefault();

                this.classList.toggle(
                    "active"
                );

            }

        }
    );

}


/* ==========================================
   KLIK PAGES UNTUK BUKA / TUTUP SUBMENU
   ========================================== */
document.querySelectorAll('.navbar-nav .dropdown > a')
.forEach(function(pagesLink) {

    pagesLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const dropdown = this.parentElement;
        const sedangTerbuka = dropdown.classList.contains('open');

        // Tutup dropdown lainnya
        document.querySelectorAll(
            '.navbar-nav .dropdown.open'
        ).forEach(function(item) {
            item.classList.remove('open');
        });

        // Klik Pages untuk buka atau tutup
        if (!sedangTerbuka) {
            dropdown.classList.add('open');
        }

        
    });

});


// ======================================================
// SWIPE SIDEBAR
// ======================================================

const hamburgerSidebar =
    document.getElementById(
        "hamburger-menu"
    );

const navbarSidebar =
    document.querySelector(
        ".navbar-nav"
    );

if (
    hamburgerSidebar &&
    navbarSidebar
) {

    let touchStartX = 0;
    let touchEndX = 0;


    navbarSidebar.addEventListener(
        "touchstart",
        function (e) {

            touchStartX =
                e.changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );


    navbarSidebar.addEventListener(
        "touchend",
        function (e) {

            touchEndX =
                e.changedTouches[0]
                    .screenX;

            const jarakGeser =
                touchEndX -
                touchStartX;

            // Geser kanan ke kiri
            if (
                jarakGeser < -60
            ) {

                navbarSidebar.classList.remove(
                    "active"
                );

            }

        },
        {
            passive: true
        }
    );

}


const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (passwordInput && togglePassword) {
    togglePassword.addEventListener("click", function () {
        const isHidden = passwordInput.type === "password";

        passwordInput.type = isHidden ? "text" : "password";

        togglePassword.classList.toggle("fa-eye", !isHidden);
        togglePassword.classList.toggle("fa-eye-slash", isHidden);

        togglePassword.title = isHidden
            ? "Sembunyikan password"
            : "Lihat password";
    });
}