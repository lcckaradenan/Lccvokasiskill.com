// ==========================================================
// CART STORAGE
// ==========================================================

const CART_KEY = "lcc_cart";


function formatRupiah(number) {

    return (
        "Rp " +
        Number(number || 0)
            .toLocaleString("id-ID")
    );

}


function getCart() {

    try {

        const cart =
            JSON.parse(
                localStorage.getItem(
                    CART_KEY
                ) || "[]"
            );

        return Array.isArray(cart)
            ? cart
            : [];

    } catch (error) {

        console.error(
            "Cart error:",
            error
        );

        return [];

    }

}


function saveCart(cart) {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

    renderCartBadge();

}


// ==========================================================
// CART BADGE
// ==========================================================

function renderCartBadge() {

    const badge =
        document.getElementById(
            "cartCount"
        );

    if (!badge) return;


    const totalQuantity =
        getCart().reduce(
            (total, item) =>
                total +
                Number(item.qty || 0),
            0
        );


    badge.textContent =
        totalQuantity;


    badge.style.display =
        totalQuantity > 0
            ? "flex"
            : "none";

}


// ==========================================================
// RENDER COURSE
// ==========================================================

function renderCourses(courseList = COURSES) {

    const grid =
        document.getElementById(
            "courseGrid"
        );

    if (!grid) return;


    grid.innerHTML =
        courseList.map(
            course => `

                <article
                    class="course-card"
                    data-course-id="${course.id}"
                >

                    <div
                        class="course-card__img"
                    >

                        <img
                            src="${course.img}"
                            alt="Pelatihan ${course.name}"
                            loading="lazy"
                        >

                        ${
                            course.tag
                                ? `
                                    <span
                                        class="course-card__tag"
                                    >
                                        ${course.tag}
                                    </span>
                                `
                                : ""
                        }

                    </div>


                    <div
                        class="course-card__body"
                    >

                        <h3>
                            ${course.name}
                        </h3>


                        <p>
                            ${course.desc}
                        </p>


                        <div
                            class="course-card__meta"
                        >

                            <span>

                                <i
                                    class="fa-regular fa-clock"
                                ></i>

                                ${course.duration}

                            </span>


                            <span>

                                <i
                                    class="fa-solid fa-signal"
                                ></i>

                                ${course.level}

                            </span>

                        </div>


                        <div
                            class="course-card__footer"
                        >

                            <strong
                                class="course-card__price"
                            >
                                ${formatRupiah(
                                    course.price
                                )}
                            </strong>


                            <button
                                type="button"
                                class="btn btn--primary add-cart-btn"
                                data-add-to-cart="${course.id}"
                            >

                                <i
                                    class="fa-solid fa-cart-plus"
                                ></i>

                                Keranjang

                            </button>

                        </div>

                    </div>

                </article>

            `
        ).join("");


    // ======================================================
    // TOMBOL TAMBAH KE KERANJANG
    // ======================================================

    grid
        .querySelectorAll(
            "[data-add-to-cart]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function (event) {

                        // Jangan sampai klik tombol
                        // dianggap klik kartu
                        event.stopPropagation();

                        const courseId =
                            this.dataset.addToCart;

                        addToCart(
                            courseId
                        );

                    }
                );

            }
        );


    // ======================================================
    // KLIK CARD UNTUK DETAIL
    // ======================================================

    grid
        .querySelectorAll(
            ".course-card"
        )
        .forEach(
            card => {

                card.addEventListener(
                    "click",
                    function (event) {

                        // Jika klik tombol cart,
                        // jangan buka detail
                        if (
                            event.target.closest(
                                "[data-add-to-cart]"
                            )
                        ) {

                            return;

                        }


                        const course =
                            COURSES.find(
                                item =>
                                    item.id ===
                                    this.dataset.courseId
                            );


                        if (course) {

                            openCourseDetail(
                                course
                            );

                        }

                    }
                );

            }
        );

}


// ==========================================================
// ADD TO CART
// ==========================================================

function addToCart(courseId) {

    const course =
        COURSES.find(
            item =>
                item.id === courseId
        );


    if (!course) {

        console.error(
            "Course tidak ditemukan:",
            courseId
        );

        return;

    }


    const cart =
        getCart();


    const existing =
        cart.find(
            item =>
                item.id === courseId
        );


    if (existing) {

        existing.qty =
            Number(existing.qty || 0) + 1;

    } else {

        cart.push({

            id: courseId,

            qty: 1

        });

    }


    saveCart(cart);


    renderCartDrawer();


    showToast(
        `${course.name} ditambahkan ke keranjang`
    );

}


// ==========================================================
// UPDATE JUMLAH
// ==========================================================

function updateQty(
    courseId,
    amount
) {

    let cart =
        getCart();


    cart =
        cart.map(
            item => {

                if (
                    item.id !== courseId
                ) {

                    return item;

                }


                return {

                    ...item,

                    qty: Math.max(
                        1,
                        Number(item.qty || 1) +
                        amount
                    )

                };

            }
        );


    saveCart(cart);

    renderCartDrawer();

}


// ==========================================================
// HAPUS COURSE DARI CART
// ==========================================================

function removeFromCart(
    courseId
) {

    const cart =
        getCart().filter(
            item =>
                item.id !== courseId
        );


    saveCart(cart);

    renderCartDrawer();

}


// ==========================================================
// TOTAL CART
// ==========================================================

function cartTotal() {

    return getCart().reduce(
        (
            total,
            item
        ) => {

            const course =
                COURSES.find(
                    c =>
                        c.id === item.id
                );


            if (!course) {

                return total;

            }


            return (
                total +
                course.price *
                Number(item.qty || 0)
            );

        },
        0
    );

}


// ==========================================================
// RENDER CART DRAWER
// ==========================================================

function renderCartDrawer() {

    const container =
        document.getElementById(
            "cartItems"
        );

    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (!container) return;


    const cart =
        getCart();


    // ======================================================
    // CART KOSONG
    // ======================================================

    if (
        cart.length === 0
    ) {

        container.innerHTML = `

            <div class="cart-empty">

                <i
                    class="fa-solid fa-cart-shopping"
                ></i>

                <p>
                    Keranjang masih kosong.
                </p>

                <small>
                    Yuk pilih pelatihan terlebih dahulu.
                </small>

            </div>

        `;

    } else {

        // ==================================================
        // CART ADA ISI
        // ==================================================

        container.innerHTML =
            cart
                .map(
                    item => {

                        const course =
                            COURSES.find(
                                c =>
                                    c.id ===
                                    item.id
                            );


                        // Jika course sudah tidak
                        // ada di data COURSES
                        if (!course) {

                            return "";

                        }


                        return `

                            <div
                                class="cart-item"
                                data-cart-id="${course.id}"
                            >

                                <img
                                    src="${course.img}"
                                    alt="${course.name}"
                                >


                                <div
                                    class="cart-item__info"
                                >

                                    <h3>
                                        ${course.name}
                                    </h3>


                                    <p>
                                        ${formatRupiah(
                                            course.price
                                        )}
                                    </p>


                                    <div
                                        class="cart-item__actions"
                                    >

                                        <button
                                            type="button"
                                            data-qty-down="${course.id}"
                                        >
                                            −
                                        </button>


                                        <span>
                                            ${item.qty}
                                        </span>


                                        <button
                                            type="button"
                                            data-qty-up="${course.id}"
                                        >
                                            +
                                        </button>


                                        <button
                                            type="button"
                                            class="cart-remove"
                                            data-remove="${course.id}"
                                            aria-label="Hapus ${course.name}"
                                        >

                                            <i
                                                class="fa-solid fa-trash"
                                            ></i>

                                        </button>

                                    </div>

                                </div>

                            </div>

                        `;

                    }
                )
                .join("");


        // ==================================================
        // TOMBOL +
        // ==================================================

        container
            .querySelectorAll(
                "[data-qty-up]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            updateQty(
                                this.dataset.qtyUp,
                                1
                            );

                        }
                    );

                }
            );


        // ==================================================
        // TOMBOL -
        // ==================================================

        container
            .querySelectorAll(
                "[data-qty-down]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            updateQty(
                                this.dataset.qtyDown,
                                -1
                            );

                        }
                    );

                }
            );


        // ==================================================
        // TOMBOL HAPUS
        // ==================================================

        container
            .querySelectorAll(
                "[data-remove]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            removeFromCart(
                                this.dataset.remove
                            );

                        }
                    );

                }
            );

    }


    // ======================================================
    // TOTAL
    // ======================================================

    if (totalElement) {

        totalElement.textContent =
            formatRupiah(
                cartTotal()
            );

    }

}


// ==========================================================
// BUKA CART
// ==========================================================

const cartBtn =
    document.getElementById(
        "cartToggle"
    );

const cartOverlay =
    document.getElementById(
        "cartOverlay"
    );


if (
    cartBtn &&
    cartOverlay
) {

    cartBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            renderCartDrawer();

            cartOverlay.classList.add(
                "is-open"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

}


// ==========================================================
// TUTUP CART
// ==========================================================

const closeCartButton =
    document.getElementById(
        "closeCart"
    );


if (closeCartButton) {

    closeCartButton.addEventListener(
        "click",
        closeCart
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                cartOverlay
            ) {

                closeCart();

            }

        }
    );

}


function closeCart() {

    if (!cartOverlay) return;


    cartOverlay.classList.remove(
        "is-open"
    );


    document.body.style.overflow =
        "";

}


// ==========================================================
// CHECKOUT
// ==========================================================

const checkoutBtn =
    document.getElementById(
        "checkoutBtn"
    );

const checkoutOverlay =
    document.getElementById(
        "checkoutOverlay"
    );


if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        function () {

            const cart =
                getCart();


            if (
                cart.length === 0
            ) {

                showToast(
                    "Keranjang masih kosong."
                );

                return;

            }


            const summary =
                document.getElementById(
                    "checkoutSummary"
                );


            if (summary) {

                summary.innerHTML =
                    cart
                        .map(
                            item => {

                                const course =
                                    COURSES.find(
                                        c =>
                                            c.id ===
                                            item.id
                                    );


                                if (!course) {

                                    return "";

                                }


                                return `

                                    <div
                                        class="checkout-row"
                                    >

                                        <span>
                                            ${course.name}
                                            × ${item.qty}
                                        </span>

                                        <strong>
                                            ${formatRupiah(
                                                course.price *
                                                item.qty
                                            )}
                                        </strong>

                                    </div>

                                `;

                            }
                        )
                        .join("")

                    +

                    `

                        <div
                            class="checkout-row checkout-row--total"
                        >

                            <strong>
                                Total
                            </strong>

                            <strong>
                                ${formatRupiah(
                                    cartTotal()
                                )}
                            </strong>

                        </div>

                    `;

            }


            closeCart();


            if (checkoutOverlay) {

                checkoutOverlay.classList.add(
                    "is-open"
                );

                document.body.style.overflow =
                    "hidden";

            }

        }
    );

}


// ==========================================================
// TUTUP CHECKOUT
// ==========================================================

const closeCheckout =
    document.getElementById(
        "closeCheckout"
    );


if (closeCheckout) {

    closeCheckout.addEventListener(
        "click",
        function () {

            if (checkoutOverlay) {

                checkoutOverlay.classList.remove(
                    "is-open"
                );

            }

            document.body.style.overflow =
                "";

        }
    );

}


if (checkoutOverlay) {

    checkoutOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                checkoutOverlay
            ) {

                checkoutOverlay.classList.remove(
                    "is-open"
                );

                document.body.style.overflow =
                    "";

            }

        }
    );

}


// ==========================================================
// FORM CHECKOUT
// ==========================================================

const checkoutForm =
    document.getElementById(
        "checkoutForm"
    );


if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const cart = getCart();

        if (cart.length === 0) {
            showToast("Keranjang masih kosong.");
            return;
        }

        // Ambil data dari formulir
        const inputs = checkoutForm.querySelectorAll("input");
        const select = checkoutForm.querySelector("select");

        const nama = inputs[0]?.value.trim() || "";
        const alamat = inputs[1]?.value.trim() || "";
        const metode = select?.value || "";

        if (!nama || !alamat || !metode) {
            alert("Mohon lengkapi nama, alamat, dan metode pembayaran.");
            return;
        }

        // Ambil rincian pelatihan dari keranjang
        let total = 0;

        const detailPelatihan = cart.map(item => {
            const course = COURSES.find(c => c.id === item.id);

            if (!course) return null;

            const jumlah = Number(item.qty || 1);
            const subtotal = Number(course.price) * jumlah;

            total += subtotal;

            return `- ${course.name} x ${jumlah}
  ${formatRupiah(subtotal)}`;
        }).filter(Boolean).join("\n");

        // Nomor WhatsApp admin LCC
        const nomorAdmin = "62818949099";

        const pesan = `Halo Admin LCC Karadenan, saya ingin mendaftar pelatihan.

Nama penerima: ${nama}
Alamat: ${alamat}

Pelatihan:
${detailPelatihan}

Total: ${formatRupiah(total)}
Metode pembayaran: ${select.options[select.selectedIndex].text}

Mohon informasi langkah selanjutnya untuk pendaftaran dan pembayaran. Terima kasih.`;

        const urlWhatsApp =
            "https://wa.me/" + nomorAdmin +
            "?text=" + encodeURIComponent(pesan);

        // Buka WhatsApp tanpa mengosongkan keranjang
        window.open(urlWhatsApp, "_blank");
        
        
window.open(urlWhatsApp, "_blank");

// Kosongkan keranjang setelah klik Bayar & Daftar
saveCart([]);
renderCartDrawer();
renderCartBadge();

    });
}

// ==========================================================
// DETAIL COURSE
// ==========================================================

let selectedCourse = null;


function openCourseDetail(
    course
) {

    selectedCourse =
        course;


    const image =
        document.getElementById(
            "detailImage"
        );

    const title =
        document.getElementById(
            "detailTitle"
        );

    const tujuan =
        document.getElementById(
            "detailTujuan"
        );

    const manfaat =
        document.getElementById(
            "detailManfaat"
        );

    const harga =
        document.getElementById(
            "detailHarga"
        );


    if (image) {

        image.src =
            course.img;

        image.alt =
            course.name;

    }


    if (title) {

        title.textContent =
            course.name;

    }


    if (tujuan) {

        tujuan.textContent =
            course.desc;

    }


    if (manfaat) {

        manfaat.textContent =
            "Peserta memperoleh keterampilan praktis yang dapat digunakan untuk pendidikan, pekerjaan, maupun pengembangan usaha.";

    }


    if (harga) {

        harga.textContent =
            formatRupiah(
                course.price
            );

    }


    const detail =
        document.getElementById(
            "courseDetail"
        );


    if (detail) {

        detail.style.display =
            "block";

        detail.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ==========================================================
// TOMBOL ADD CART DI DETAIL
// ==========================================================

const detailCart =
    document.getElementById(
        "detailCart"
    );


if (detailCart) {

    detailCart.addEventListener(
        "click",
        function () {

            if (!selectedCourse) {

                showToast(
                    "Course belum dipilih."
                );

                return;

            }


            addToCart(
                selectedCourse.id
            );

        }
    );

}


// ==========================================================
// TUTUP DETAIL
// ==========================================================

function closeCourseDetail() {

    const detail =
        document.getElementById(
            "courseDetail"
        );


    if (detail) {

        detail.style.display =
            "none";

    }


    selectedCourse =
        null;

}


// ==========================================================
// SEARCH COURSE
// ==========================================================

function filterCourse() {

    const searchInput = document.getElementById("search");

    if (!searchInput) return;

    const keyword = searchInput.value
        .toLowerCase()
        .trim();


    // Jika kolom pencarian kosong,
    // tampilkan semua course
    if (keyword === "") {

        renderCourses(COURSES);

        return;

    }


    // Cari berdasarkan nama, deskripsi, atau ID course
    const filteredCourses = COURSES.filter(course => {

        const name = (course.name || "")
            .toLowerCase();

        const desc = (course.desc || "")
            .toLowerCase();

        const id = (course.id || "")
            .toLowerCase();

        return (
            name.includes(keyword) ||
            desc.includes(keyword) ||
            id.includes(keyword)
        );

    });


    // Tampilkan hasil pencarian
    renderCourses(filteredCourses);

}



// ==========================================================
// TOAST
// ==========================================================

function showToast(
    message
) {

    let toast =
        document.getElementById(
            "cartToast"
        );


    // Buat toast jika belum ada
    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "cartToast";

        toast.className =
            "toast";


        toast.innerHTML = `

            <i
                class="fa-solid fa-circle-check"
            ></i>

            <span></span>

        `;


        document.body.appendChild(
            toast
        );

    }


    const text =
        toast.querySelector(
            "span"
        );


    if (text) {

        text.textContent =
            message;

    }


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toast.timer
    );


    toast.timer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


// ==========================================================
// INIT
// ==========================================================

renderCourses();

renderCartBadge();

renderCartDrawer();