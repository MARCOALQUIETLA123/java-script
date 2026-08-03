//  DOM REFERENCES 

const cashierInput = document.getElementById("cashier-input");
const catalogTable = document.getElementById("catalog-table");
const cartTable = document.getElementById("cart-table");
const searchInput = document.getElementById("search-input");
const quantityInput = document.getElementById("quantity-input");
const subtotalDisplay = document.getElementById("subtotal-display");
const discountDisplay = document.getElementById("discount-display");
const discountLabelSpan = document.getElementById("discount-label");
const discountTypeInputs = document.querySelectorAll('input[name="discount-type"]');
const discountIdInput = document.getElementById("discount-id-input");
const sukiToggle = document.getElementById("suki-toggle");
const sukiCardInput = document.getElementById("suki-card-input");
const sukiPointsInfo = document.getElementById("suki-points-info");
const totalDisplay = document.getElementById("total-display");
const customerInput = document.getElementById("customer-input");
const paymentInput = document.getElementById("payment-input");
const checkoutBtn = document.getElementById("checkout-btn");
const confirmationMessage = document.getElementById("confirmation-message");
const receiptDiv = document.getElementById("receipt-div");
const receiptModal = document.getElementById("receipt-modal");
const receiptCloseBtn = document.getElementById("receipt-close-btn");
const viewTransactionsBtn = document.getElementById("view-transactions-btn");
const totalSalesBtn = document.getElementById("total-sales-btn");
const bestSellerBtn = document.getElementById("best-seller-btn");
const reportDiv = document.getElementById("report-div");
const transactionsTable = document.getElementById("transactions-table");


//  PRODUCT CATALOG 

const groceryItems = [
  { product_id: 1, product_name: "Dried Mangoes (200g)", product_price: 180 },
  { product_id: 2, product_name: "Banana Chips (200g)", product_price: 120 },
  { product_id: 3, product_name: "Tablea Chocolate (250g)", product_price: 200 },
  { product_id: 4, product_name: "Coconut Oil (500ml)", product_price: 180 },
  { product_id: 5, product_name: "Mango Jam (250g)", product_price: 160 },
  { product_id: 6, product_name: "Peanut Brittle (200g)", product_price: 150 },
  { product_id: 7, product_name: "Cashew Nuts (250g)", product_price: 280 },
  { product_id: 8, product_name: "Philippine Coffee Beans (250g)", product_price: 320 },
  { product_id: 9, product_name: "Native Vinegar (500ml)", product_price: 120 },
  { product_id: 10, product_name: "Philippine Honey (250ml)", product_price: 250 },
  { product_id: 11, product_name: "Coconut Sugar (500g)", product_price: 180 },
  { product_id: 12, product_name: "Rice Crackers (200g)", product_price: 100 },
  { product_id: 13, product_name: "Salted Fish (Danggit, 250g)", product_price: 220 },
  { product_id: 14, product_name: "Longganisa (Frozen, 500g)", product_price: 280 },
  { product_id: 15, product_name: "Tocino (Frozen, 500g)", product_price: 300 },
  { product_id: 16, product_name: "Chicharon (100g)", product_price: 120 },
  { product_id: 17, product_name: "Pandesal Pack (12 pcs)", product_price: 80 },
  { product_id: 18, product_name: "Native Brown Rice (1kg)", product_price: 90 },
  { product_id: 19, product_name: "White Rice (1kg)", product_price: 70 },
  { product_id: 20, product_name: "Corn Coffee (250g)", product_price: 150 },
  { product_id: 21, product_name: "Coconut Water (1L)", product_price: 100 },
  { product_id: 22, product_name: "Calamansi Juice (1L)", product_price: 120 },
  { product_id: 23, product_name: "Guava Jelly (250g)", product_price: 160 },
  { product_id: 24, product_name: "Bagoong (250g)", product_price: 90 },
  { product_id: 25, product_name: "Fish Sauce (Patis, 500ml)", product_price: 110 },
  { product_id: 26, product_name: "Soy Sauce (500ml)", product_price: 95 },
  { product_id: 27, product_name: "Native Salt (250g)", product_price: 50 },
  { product_id: 28, product_name: "Coconut Milk Powder (200g)", product_price: 140 },
  { product_id: 29, product_name: "Instant Noodles (Pack of 6)", product_price: 75 },
  { product_id: 30, product_name: "Native Cheese (Kesong Puti, 250g)", product_price: 180 },
  { product_id: 31, product_name: "Eggs (Dozen)", product_price: 90 },
  { product_id: 32, product_name: "Fresh Tilapia (1kg)", product_price: 160 },
  { product_id: 33, product_name: "Fresh Bangus (Milkfish, 1kg)", product_price: 180 },
  { product_id: 34, product_name: "Fresh Chicken (1kg)", product_price: 200 },
  { product_id: 35, product_name: "Fresh Pork (1kg)", product_price: 280 },
  { product_id: 36, product_name: "Fresh Beef (1kg)", product_price: 350 },
  { product_id: 37, product_name: "Native Vegetables Basket", product_price: 250 },
  { product_id: 38, product_name: "Bananas (1kg)", product_price: 60 },
  { product_id: 39, product_name: "Mangoes (1kg)", product_price: 120 },
  { product_id: 40, product_name: "Papaya (1kg)", product_price: 70 },
  { product_id: 41, product_name: "Pineapple (Whole)", product_price: 90 },
  { product_id: 42, product_name: "Coconut (Whole)", product_price: 50 },
  { product_id: 43, product_name: "Native Peanuts (250g)", product_price: 100 },
  { product_id: 44, product_name: "Camote (Sweet Potato, 1kg)", product_price: 80 },
  { product_id: 45, product_name: "Ube Halaya (250g)", product_price: 180 },
  { product_id: 46, product_name: "Leche Flan (Whole)", product_price: 250 },
  { product_id: 47, product_name: "Bibingka (Whole)", product_price: 200 },
  { product_id: 48, product_name: "Puto (Dozen)", product_price: 120 },
  { product_id: 49, product_name: "Kakanin Sampler Pack", product_price: 300 },
  { product_id: 50, product_name: "Native Chocolate Drink (Sikwate, 250ml)", product_price: 90 }
];

function renderCatalog(items) {
  catalogTable.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Product</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  `;

  items.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.product_id}</td>
      <td>${product.product_name}</td>
      <td>&#8369;${product.product_price.toFixed(2)}</td>
      <td><button onclick="addToCart(${product.product_id})">Add</button></td>
    `;
    catalogTable.appendChild(row);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = groceryItems.filter(product =>
    product.product_name.toLowerCase().includes(query)
  );
  renderCatalog(filtered);
});


//  ADD TO CART FUNCTION 

function addToCart(productId) {
  const product = groceryItems.find(item => item.product_id === productId);
  const quantity = Number(quantityInput.value);

  if (!product || quantity <= 0) return;

  const existingItem = cart.find(item => item.product_id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.subtotal = existingItem.quantity * existingItem.product_price;
  } else {
    cart.push({
      product_id: product.product_id,
      product_name: product.product_name,
      product_price: product.product_price,
      quantity: quantity,
      subtotal: product.product_price * quantity
    });
  }

  quantityInput.value = 1;
  renderCart();
}


//  CART MANAGEMENT 

let cart = [];

function renderCart() {
  cartTable.innerHTML = `
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      <th>Action</th>
    </tr>
  `;

  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.product_name}</td>
      <td>&#8369;${item.product_price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>&#8369;${item.subtotal.toFixed(2)}</td>
      <td><button onclick="removeFromCart(${index})">Remove</button></td>
    `;
    cartTable.appendChild(row);
  });

  updateTotals();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}


//  DISCOUNT SYSTEM 

const discountRates = {
  student: 0.05,
  senior: 0.20,
  pwd: 0.20
};

const discountLabels = {
  none: "",
  student: " (Student, 5%)",
  senior: " (Senior Citizen, 20%)",
  pwd: " (PWD, 20%)",
  bulk: " (10% off over \u20B11000)"
};

function getSelectedDiscountType() {
  const checked = Array.from(discountTypeInputs).find(input => input.checked);
  return checked ? checked.value : "none";
}

discountTypeInputs.forEach(input => {
  input.addEventListener("change", updateTotals);
});


//  SUKI CARD LOYALTY 

const SUKI_POINTS_PER_50_PESOS = 1;
const sukiPoints = {};

function calculateSukiPoints(amount) {
  return Math.floor((amount / 50) * SUKI_POINTS_PER_50_PESOS);
}

sukiToggle.addEventListener("change", () => {
  if (sukiToggle.checked) {
    sukiCardInput.style.display = "block";
    updateSukiPointsPreview(getCartSummary().total);
  } else {
    sukiCardInput.style.display = "none";
    sukiCardInput.value = "";
    sukiPointsInfo.textContent = "";
    sukiPointsInfo.classList.remove("visible");
  }
});

sukiCardInput.addEventListener("input", () => {
  updateSukiPointsPreview(getCartSummary().total);
});

function updateSukiPointsPreview(total) {
  if (!sukiToggle.checked) {
    sukiPointsInfo.textContent = "";
    sukiPointsInfo.classList.remove("visible");
    return;
  }

  sukiPointsInfo.classList.add("visible");
  const cardId = sukiCardInput.value.trim();
  const earned = calculateSukiPoints(total);

  if (!cardId) {
    sukiPointsInfo.textContent = `Enter a Suki Card No. to track points \u2014 this sale will earn ${earned} pt${earned === 1 ? "" : "s"}.`;
  } else {
    const balance = sukiPoints[cardId] || 0;
    sukiPointsInfo.textContent = `Suki Card ${cardId}: ${balance} pt${balance === 1 ? "" : "s"} on file. This sale will earn ${earned} pt${earned === 1 ? "" : "s"}.`;
  }
}


//  TOTAL COMPUTATION 

function getCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.subtotal, 0);
  const discountType = getSelectedDiscountType();

  let discount = 0;
  let discountKey = "none";

  if (discountType !== "none" && discountRates[discountType]) {
    discount = subtotal * discountRates[discountType];
    discountKey = discountType;
  } else if (subtotal > 1000) {
    discount = subtotal * 0.10;
    discountKey = "bulk";
  }

  const total = subtotal - discount;
  return { subtotal, discount, total, discountKey };
}

function updateTotals() {
  const { subtotal, discount, total, discountKey } = getCartSummary();
  subtotalDisplay.textContent = subtotal.toFixed(2);
  discountDisplay.textContent = discount.toFixed(2);
  discountLabelSpan.textContent = discountLabels[discountKey];
  totalDisplay.textContent = total.toFixed(2);
  updateSukiPointsPreview(total);
}


//  CHECKOUT PROCESS 

const transactions = [];
let transactionCounter = 1;

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    confirmationMessage.textContent = "Cart is empty. Add at least one product before checking out.";
    return;
  }

  const { subtotal, discount, total, discountKey } = getCartSummary();
  const amountPaid = Number(paymentInput.value);

  if (!amountPaid || amountPaid < total) {
    confirmationMessage.textContent = "Payment is missing or less than the total due.";
    return;
  }

  const change = amountPaid - total;

  let sukiCardId = "";
  let sukiPointsEarned = 0;
  let sukiPointsBalance = 0;

  if (sukiToggle.checked) {
    sukiCardId = sukiCardInput.value.trim();
    sukiPointsEarned = calculateSukiPoints(total);
    if (sukiCardId) {
      sukiPoints[sukiCardId] = (sukiPoints[sukiCardId] || 0) + sukiPointsEarned;
      sukiPointsBalance = sukiPoints[sukiCardId];
    } else {
      sukiPointsBalance = sukiPointsEarned;
    }
  }

  const cashierName = cashierInput.value.trim() || "\u2014";

  const transaction = {
    transactionId: "TXN" + String(transactionCounter).padStart(3, "0"),
    date: new Date(),
    cashierName: cashierName,
    customerName: customerInput.value.trim() || "Walk-in",
    items: cart.map(item => ({ ...item })),
    subtotal: subtotal,
    discount: discount,
    discountLabel: discountLabels[discountKey].trim(),
    discountIdNumber: discountIdInput.value.trim(),
    sukiCardId: sukiCardId,
    sukiPointsEarned: sukiPointsEarned,
    sukiPointsBalance: sukiPointsBalance,
    total: total,
    amountPaid: amountPaid,
    change: change
  };

  transactions.push(transaction);
  transactionCounter++;

  renderReceipt(transaction);
  openReceiptModal();
  confirmationMessage.textContent = sukiPointsEarned > 0
    ? `Transaction completed. Change: \u20B1${change.toFixed(2)} | Suki points earned: ${sukiPointsEarned} (balance: ${sukiPointsBalance})`
    : `Transaction completed. Change: \u20B1${change.toFixed(2)}`;

  cart = [];
  customerInput.value = "";
  paymentInput.value = "";
  discountIdInput.value = "";
  sukiCardInput.value = "";
  sukiToggle.checked = false;
  sukiCardInput.style.display = "none";
  sukiPointsInfo.textContent = "";
  sukiPointsInfo.classList.remove("visible");
  discountTypeInputs.forEach(input => { input.checked = (input.value === "none"); });
  renderCart();
});


//  RECEIPT GENERATION 

function renderReceipt(transaction) {
  const itemRows = transaction.items.map(item => `
    <tr>
      <td class="r-name">${item.product_name}</td>
      <td class="r-price">x${item.quantity} @ &#8369;${item.product_price.toFixed(2)}</td>
      <td class="r-subtotal">&#8369;${item.subtotal.toFixed(2)}</td>
    </tr>
  `).join("");

  const vatRate = 0.12;
  const vatAmount = transaction.total * vatRate / (1 + vatRate);

  const sukiBlock = transaction.sukiPointsEarned > 0 ? `
    <p>Suki Card${transaction.sukiCardId ? " " + transaction.sukiCardId : ""}: +${transaction.sukiPointsEarned} pts earned</p>
    <p>Suki Points Balance: ${transaction.sukiPointsBalance} pts</p>
  ` : "";

  const discountIdRow = transaction.discountIdNumber
    ? `<p>Discount ID/Card No.: ${transaction.discountIdNumber}</p>`
    : "";

  receiptDiv.innerHTML = `
    <p class="r-store">Babia Store</p>
    <p class="r-address">Zone 4, Barangay Kauswagan</p>
    <p class="r-address">Cagayan de Oro City</p>

    <div class="r-meta">
      <div class="r-meta-row"><span>Receipt No.</span><span>${transaction.transactionId}</span></div>
      <div class="r-meta-row"><span>Date</span><span>${transaction.date.toLocaleDateString()}</span></div>
      <div class="r-meta-row"><span>Time</span><span>${transaction.date.toLocaleTimeString()}</span></div>
      <div class="r-meta-row"><span>Cashier</span><span>${transaction.cashierName}</span></div>
      <div class="r-meta-row"><span>Customer</span><span>${transaction.customerName}</span></div>
    </div>

    <table>
      <tbody>
        ${itemRows}
      </tbody>
    </table>

    <hr class="r-divider">

    <div class="r-total-row">
      <span>TOTAL:</span>
      <span>&#8369;${transaction.total.toFixed(2)}</span>
    </div>

    <p class="r-tax">Incl. 12% VAT: &#8369;${vatAmount.toFixed(2)}</p>

    <div class="r-footer">
      <p>Subtotal: &#8369;${transaction.subtotal.toFixed(2)}</p>
      <p>Discount${transaction.discountLabel ? " " + transaction.discountLabel : ""}: &#8369;${transaction.discount.toFixed(2)}</p>
      ${discountIdRow}
      ${sukiBlock}
      <p>Payment Method: Cash</p>
      <p>Amount Paid: &#8369;${transaction.amountPaid.toFixed(2)}</p>
      <p>Change: &#8369;${transaction.change.toFixed(2)}</p>
      <p class="r-footer-contact">Salamat po! Come again.</p>
    </div>
  `;
}

function openReceiptModal() {
  receiptModal.classList.add("active");
}

function closeReceiptModal() {
  receiptModal.classList.remove("active");
}

receiptCloseBtn.addEventListener("click", closeReceiptModal);

receiptModal.addEventListener("click", (event) => {
  if (event.target === receiptModal) {
    closeReceiptModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && receiptModal.classList.contains("active")) {
    closeReceiptModal();
  }
});


//  REPORTING FEATURES 

viewTransactionsBtn.addEventListener("click", () => {
  transactionsTable.innerHTML = `
    <tr>
      <th>Transaction ID</th>
      <th>Date</th>
      <th>Cashier</th>
      <th>Customer</th>
      <th>Items</th>
      <th>Total</th>
      <th>Paid</th>
      <th>Change</th>
    </tr>
  `;

  transactions.forEach(t => {
    const itemsSummary = t.items.map(item => `${item.product_name} x${item.quantity}`).join(", ");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${t.transactionId}</td>
      <td>${t.date.toLocaleString()}</td>
      <td>${t.cashierName}</td>
      <td>${t.customerName}</td>
      <td>${itemsSummary}</td>
      <td>&#8369;${t.total.toFixed(2)}</td>
      <td>&#8369;${t.amountPaid.toFixed(2)}</td>
      <td>&#8369;${t.change.toFixed(2)}</td>
    `;
    transactionsTable.appendChild(row);
  });
});

totalSalesBtn.addEventListener("click", () => {
  const today = new Date().toDateString();
  const todaysTransactions = transactions.filter(t => t.date.toDateString() === today);

  const totalSales = todaysTransactions.reduce((sum, t) => sum + t.total, 0);
  const count = todaysTransactions.length;

  reportDiv.innerHTML = `<p>Total Sales Today: &#8369;${totalSales.toFixed(2)} (${count} transaction${count === 1 ? "" : "s"})</p>`;
});

bestSellerBtn.addEventListener("click", () => {
  if (transactions.length === 0) {
    reportDiv.innerHTML = `<p>No transactions recorded yet.</p>`;
    return;
  }

  const productCounts = {};

  transactions.forEach(t => {
    t.items.forEach(item => {
      if (!productCounts[item.product_id]) {
        productCounts[item.product_id] = { name: item.product_name, quantity: 0 };
      }
      productCounts[item.product_id].quantity += item.quantity;
    });
  });

  const mostPurchased = Object.values(productCounts).reduce((top, product) =>
    product.quantity > top.quantity ? product : top
  );

  reportDiv.innerHTML = `<p>Most Purchased Product: ${mostPurchased.name} (${mostPurchased.quantity} units sold)</p>`;
});


//  INITIAL RENDER 

renderCatalog(groceryItems);
renderCart();