<svelte:head>
  <script
    src="https://webforms.closeiocdn.com/webforms.js"
    type="module"
    crossorigin="anonymous"
    defer
  ></script>
</svelte:head>

<script lang="ts">
  import "/styles/global.css";
  import {Tag, Star, ShoppingBasket, Sword, Pencil, Trash } from '@lucide/svelte';

  let showCloseForm = false;
  let closeFormEl: any;

  const imageUrl = "/";

  const types = [
    "Best Sellers",
    "All",
    "Under 150",
    "150-200",
    "200-250",
    "250-300",
    "300+"
  ];

  const colorSuffix: Record<string, string> = {
    red: "R",
    black: "C",
    white: "W"
  };

  function colorCode(number: number, color: string) {
    return `${number}${colorSuffix[color] ?? color.toUpperCase()}`;
  }
  const colors = ["red", "black", "white"] as const;
  const priceList = [
    {name: "Petite Prep Set",            price: 348, colors: colors, number: 3828, image: imageUrl + "petite_prep_set.webp", bestSeller: true, products: ['petite santoku', 'cheese knife'] },
    {name: 'Petite Culinary Companions',  price: 327, colors: colors, number: 3849, image: imageUrl + "culinary_companions.webp", products: ['petite santoku', 'spreader'] },
    {name: '2-pc Santoku Set',            price: 414, colors: colors, number: 1850, image: imageUrl + "2pcsantoku_set.webp", products: ['petite santoku', '7" santoku'] },
    {name: 'Petite Santoku Cooks Combo',  price: 334, colors: colors, number: 3836, image: imageUrl + "santoku_cooks_combo.webp", bestSeller: true, products: ['petite santoku', 'trimmer'] },
    {name: 'Culinary Companions',         price: 347, colors: colors, number: 1849, image: imageUrl + "culinary_companions_full.webp", products: ['7" santoku', 'spreader'] },
    {name: 'Shear Entertainer Set',       price: 333, colors: colors, number: 3908, image: imageUrl + "shear_entertainer_set.webp", products: ['shears', 'cheese knife'] },
    {name: 'Shear Prep Set',              price: 379, colors: colors, number: 3909, image: imageUrl + "shear_prep_set.webp", bestSeller: true , products: ['shears', 'petite santoku'] },
    {name: 'Santoku Shear Utility Set',   price: 319, colors: colors, number: 3852, image: imageUrl + "santoku_shear_utility_set.webp", bestSeller: true, products: ['shears', 'trimmer'] },
    {name: 'Santoku Cooks Combo',         price: 354, colors: colors, number: 1836, image: imageUrl + "santoku_cooks_combo_full.webp", bestSeller: true, products: ['7" santoku', 'trimmer'] },
    {name: 'Petite Prep Set',              price: 373, colors: colors, number: 3829, image: imageUrl + "petite_prep_set.webp", bestSeller: true, products: ['petite santoku', 'cheese knife'] },
    {name: 'Santoku Style Club Mates',    price: 267, colors: colors, number: 3822, image: imageUrl + "santoku_style_club_mates.webp", bestSeller: true, products: ['trimmer', 'spreader'] },
    {name: 'Welcome Home Set',            price: 288, colors: colors, number: 3826, image: imageUrl + "welcome_home_set.webp", bestSeller: true, products: ['trimmer', 'cheese knife'] },
    {name: 'Time Saver Set',              price: 281, colors: colors, number: 3827, image: imageUrl + "time_saver_set.webp", products: ['spreader', 'trimmer'] },
    {name: 'Shear Favorites', price: 312, colors: colors, number: 1851, image: imageUrl + "shear_favorites.webp", products: ['shears', 'spreader'] },
    {name: 'Santoku Style Trimmer', price: 148, colors: colors, number: 6721, image: imageUrl + "santoku_style_trimmer.webp", products: ['trimmer'] },
    {name: 'Traditional Cheese Knife', price: 162, colors: colors, number: 6764, image: imageUrl + "traditional_cheese_knife.webp", products: ['cheese knife'] },
    {name: '5" Santoku', price: 208, colors: colors, number: 6166, image: imageUrl + "5_santoku.webp", products: ['petite santoku'] },
    {name: 'Super Shears', price: 193, colors: colors, number: 677, image: imageUrl + "super_shears.webp", products: ['shears'] },
    {name: '7" Santoku', price: 238, colors: colors, number: 6766, image: imageUrl + "7_santoku.webp", products: ['7" santoku'] },
    {name: '6" Vegetable Knife', price: 218, colors: colors, number: 6135, image: imageUrl + "6_vegetable_knife.webp", products: ['vegetable knife'] },
    {name: 'Kitchen Classics', price: 444, colors: colors, number: 1827, image: imageUrl + "kitchen_classics.webp", products: ['paring knife', 'trimmer', 'chef knife'] },
    {name: 'Santoku Classics', price: 461, colors: colors, number: 1859, image: imageUrl + "santoku_classics.webp", bestSeller: true, products: ['paring knife', 'trimmer', '7" santoku'] },
    {name: 'Wine and Cheese Set', price: 251, colors: colors, number: 2130, image: imageUrl + "wine_cheese_set.webp", products: ['cheese knife', 'wine opener'] },
    {name: '4-PC. TABLE KNIFE SET', price: 314, colors: colors, number: 1865, image: imageUrl + "4pc_table_knife_set.webp", products: ['table knife'] },
    {name: '4-PC. STEAK KNIFE SET', price: 482, colors: colors, number: 2065, image: imageUrl + "4pc_steak_knife_set.webp", products: ['steak knife'] },
    {name: 'CARVING SET', price: 292, colors: colors, number: 1834, image: imageUrl + "carving_set.webp", products: ['carving knife'] },
    {name: 'Hardy Slicer', price: 245, colors: colors, number: 6738, image: imageUrl + "hardy_slicer.webp", products: ['hardy slicer'] },
    {name: '7.5" Vegetable Knife', price: 260, colors: colors, number: 6735, image: imageUrl + "7_vegetable_knife.webp", products: ['vegetable knife'] },
    {name: 'Entertainer Pack', price: 379,  number: 1838, image: imageUrl + "entertainer_pack.webp", products: ['pizza slicer', 'peeler', 'cheese knife', 'ice cream scoop'] },
    {name: 'Dessert Favorites', price: 193, colors: colors, number: 1855, image: imageUrl + "dessert_favorites.webp", bestSeller: true, products: ['turn n serve', 'ice cream scoop'] },
    {name: 'Party Favorites', price: 198, colors: colors, number: 1837, image: imageUrl + "party_favorites.webp", bestSeller: true, products: ['ice cream scoop', 'slice n serve'] },
    {name: 'Spatula Spreader', price: 141, colors: colors, number: 6768, image: imageUrl + "spatula_spreader.webp", bestSeller: true, products: ['spreader'] },
    {name: 'Turn N Serve', price: 120, colors: colors, number: 6755, image: imageUrl + "turn_n_serve.webp", bestSeller: true, products: ['turn n serve'] },
    {name: 'Slice N Serve', price: 125, colors: colors, number: 6754, image: imageUrl + "slice_n_serve.webp", products: ['slice n serve'] },
  ];

  let selectedType = "Best Sellers";
  let searchTerm = "";
  let selectedProducts: string[] = [];
  let productDropdownOpen = false;

  let colorDropdownOpen = false;
  let logoTypeDropdownOpen = false;

  $: allProducts = [...new Set(priceList.flatMap(item => item.products ?? []))].sort();

  let selectedProduct: any = null;
  let editingIndex: number | null = null;

  const engravingOptions = ["Name",  "Phone Number", "Custom"];

  let formData = {
    amount: 1,
    color: "",
    engravingChecked: [] as string[],
    engravingCustomText: "",
    logo: false,
    logoType: "company",
    officeSpecific: false,
    bonus: 0
  };

  let cart: any[] = [];

  function handleSearch(e: Event) {
    searchTerm = (e.target as HTMLInputElement).value;
    if (searchTerm.trim().length > 0) selectedType = "All";
  }

  $: filteredPrices = priceList.filter((item) => {
    const matchesSearch =
      searchTerm.trim().length === 0 ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedType === "All" ||
      (selectedType === "Best Sellers" && item.bestSeller) ||
      (selectedType === "Under 150" && item.price < 150) ||
      (selectedType === "150-200" && item.price >= 150 && item.price <= 200) ||
      (selectedType === "200-250" && item.price > 200 && item.price <= 250) ||
      (selectedType === "250-300" && item.price > 250 && item.price <= 300) ||
      (selectedType === "300+" && item.price > 300);

    const matchesProducts =
      selectedProducts.length === 0 ||
      selectedProducts.every(p => (item.products ?? []).includes(p));

    return matchesCategory && matchesSearch && matchesProducts;
  });

  function openProduct(product: any) {
    selectedProduct = product;
    editingIndex = null;
    colorDropdownOpen = false;
    logoTypeDropdownOpen = false;

    formData = {
      amount: 1,
      color: product.colors ? product.colors[0] : "",
      engravingChecked: [],
      engravingCustomText: "",
      logo: false,
      logoType: "company",
      officeSpecific: false,
      bonus: 0
    };
  }

  function openEdit(index: number) {
    const item = cart[index];
    selectedProduct = priceList.find((p) => p.number === item.number) ?? item;
    editingIndex = index;
    colorDropdownOpen = false;
    logoTypeDropdownOpen = false;

    formData = {
      amount: item.amount,
      color: item.color,
      engravingChecked: item.engravingChecked ?? [],
      engravingCustomText: item.engravingCustomText ?? "",
      logo: item.logo,
      logoType: item.logoType ?? "company",
      officeSpecific: item.officeSpecific ?? false,
      bonus: item.bonus ?? 0
    };
  }

  function removeFromCart(index: number) {
    cart = cart.filter((_, i) => i !== index);
  }

  function calcTotal(basePrice: number, amount: number, bonus: number) {
    return +(basePrice * (amount)).toFixed(2);
  }

  function toggleEngraving(option: string) {
    if (formData.engravingChecked.includes(option)) {
      formData.engravingChecked = formData.engravingChecked.filter(o => o !== option);
    } else {
      formData.engravingChecked = [...formData.engravingChecked, option];
    }
  }

  function addToCart() {
    const entry = {
      ...selectedProduct,
      ...formData,
      total: calcTotal(selectedProduct.price, formData.amount, formData.bonus)
    };

    if (editingIndex !== null) {
      cart = cart.map((item, i) => (i === editingIndex ? entry : item));
    } else {
      cart = [...cart, entry];
    }

    selectedProduct = null;
    editingIndex = null;
  }

  $: grandTotal = cart.reduce((acc, item) => acc + item.total, 0);

  function buildEngravingLine(item: any): string | null {
    const parts: string[] = item.engravingChecked ?? [];
    if (parts.length === 0) return null;
    const labels = parts.map((p: string) => p === "Custom" ? `Custom: ${item.engravingCustomText}` : p);
    return `Engraving: ${labels.join(", ")}`;
  }

  function buildLogoLine(item: any): string {
    if (!item.logo) return "Logo: No";
    const type = item.logoType === "company" ? "Company Logo" : "Custom Logo";
    const office = item.logoType === "company" && item.officeSpecific ? " (Office Specific)" : "";
    return `Logo: Yes — ${type}${office}`;
  }

  function buildQuoteText() {
    return cart
      .map((item) =>
        [
          `${item.name} (#${colorCode(item.number, item.color)})`,
          `Total Qtn: ${item.amount} units`,
          `Color: ${item.color} (${colorCode(item.number, item.color)})`,
          buildEngravingLine(item),
          buildLogoLine(item),
          `Bonus: ${item.bonus ?? 0} units`,
          `Total: $${item.total.toFixed(2)}`
        ].filter(Boolean).join("\r\n\r\n")
      )
      .join("\r\n\r\n— — — — —\r\n\r\n")
  }

  function setCloseFormData() {
    if (closeFormEl) {
      closeFormEl.data_order_form = buildQuoteText();
    }
  }

  async function openCloseForm() {
    const text = buildQuoteText();
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    showCloseForm = true;
  }

  $: if (showCloseForm) {
    setCloseFormData();
  }

  const colorDot: Record<string, string> = {
    red: "#e05555",
    black: "#2a2a2a",
    white: "#e8e8e8"
  };

  const logoTypeLabels: Record<string, string> = {
    company: "Company Logo",
    custom: "Custom Logo"
  };
</script>

<div class="container">
  <!-- LEFT SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-brand">
      <span class="brand-icon"><Sword /></span>
      <span class="brand-label">Products</span>
    </div>

    <div class="filter-section">
      <p class="section-label">FILTER BY ITEM</p>
      <div
        class="product-filter"
      >
        <button
          class="dropdown-toggle"
          class:active={selectedProducts.length > 0}
          on:click={() => (productDropdownOpen = !productDropdownOpen)}
        >
          <span>
            {#if selectedProducts.length === 0}
              Any product
            {:else if selectedProducts.length === 1}
              {selectedProducts[0]}
            {:else}
              {selectedProducts.length} selected
            {/if}
          </span>
          <svg class="chevron" class:open={productDropdownOpen} width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        {#if productDropdownOpen}
          <div class="dropdown-list">
            {#if selectedProducts.length > 0}
              <button class="clear-btn" on:click={() => (selectedProducts = [])}>
                ✕ Clear all
              </button>
              <div class="dropdown-divider"></div>
            {/if}
            {#each allProducts as product}
              <label class="dropdown-item" class:checked={selectedProducts.includes(product)}>
                <span class="custom-checkbox" class:on={selectedProducts.includes(product)}>
                  {#if selectedProducts.includes(product)}✓{/if}
                </span>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product)}
                  on:change={() => {
                    selectedProducts = selectedProducts.includes(product)
                      ? selectedProducts.filter(p => p !== product)
                      : [...selectedProducts, product];
                  }}
                />
                <span class="item-label">{product}</span>
              </label>
            {/each}
          </div>
        {/if}
      </div>

      {#if selectedProducts.length > 0}
        <div class="active-tags">
          {#each selectedProducts as tag}
            <span class="tag">
              {tag}
              <button class="tag-remove" on:click={() => selectedProducts = selectedProducts.filter(p => p !== tag)}>✕</button>
            </span>
          {/each}
        </div>
      {/if}
    </div>

    <!-- CATEGORY FILTER -->
    <div class="filter-section">
      <p class="section-label">PRICE RANGE</p>
      <div class="sidebar-item-grid">
        {#each types as type}
          <button
            class:selected={selectedType === type}
            class="sidebar-item"
            on:click={() => {
              selectedType = type;
              searchTerm = "";
            }}
          >
            {type}
            {#if selectedType === type}
              <span class="selected-dot"></span>
            {/if}
          </button>
        {/each}
      </div>
    </div>
  </aside>

  <!-- MAIN CONTENT -->
  <main class="content">
    <div class="topbar">
      <div class="search-wrap">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <input
          value={searchTerm}
          on:input={handleSearch}
          type="text"
          placeholder="Search products..."
        />
        {#if searchTerm}
          <button class="search-clear" on:click={() => { searchTerm = ""; selectedType = "Best Sellers"; }}>✕</button>
        {/if}
      </div>
      <div class="results-count">
        {filteredPrices.length} result{filteredPrices.length !== 1 ? 's' : ''}
      </div>
    </div>

    <div class="card-grid">
      {#each filteredPrices as item}
        <button class="card" on:click={() => openProduct(item)}>
          {#if item.bestSeller}
            <div class="best-seller-badge"><Star size={12}/> Best Seller</div>
          {/if}
          <div class="image-wrapper">
            <img src={item.image} alt={item.name} />
          </div>
          <div class="card-content">
            <h3>{item.name}</h3>
            {#if item.products && item.products.length > 0}
              <div class="product-tags">
                {#each item.products as p}
                  <span class="product-tag">{p}</span>
                {/each}
              </div>
            {/if}
            <div class="bottom-row">
              <span class="item-num">#{item.number}</span>
              <span class="price">${item.price}</span>
            </div>
          </div>
        </button>
      {/each}
    </div>
  </main>

  <aside class="cart-sidebar">
    <div class="cart-header">
      <h2>Quote</h2>
      {#if cart.length > 0}
        <span class="cart-count">{cart.length}</span>
      {/if}
    </div>

    <div class="cart-items">
      {#if cart.length === 0}
        <div class="empty">
          <ShoppingBasket size={48} />
          <p>No items yet</p>
          <p class="empty-sub">Click a product to add it</p>
        </div>
      {/if}

      {#each cart as item, i}
        <div class="cart-item">
          <div class="cart-item-top">
            <h4>{item.name}</h4>
            <span class="cart-price">${item.total.toFixed(2)}</span>
          </div>
          <div class="cart-item-meta">
            <span class="meta-pill">#{colorCode(item.number, item.color)}</span>
            <span class="meta-pill">Qty {item.amount}</span>
            <span class="meta-pill color-pill">
              <span class="color-dot" style="background:{colorDot[item.color] ?? '#888'}"></span>
              {item.color}
            </span>
          </div>
          {#if item.engravingChecked && item.engravingChecked.length > 0}
            <p class="cart-detail">
              ✍️ {item.engravingChecked.map((e: string) => e === "Custom" ? `"${item.engravingCustomText}"` : e).join(", ")}
            </p>
          {/if}
          {#if item.logo}
            <p class="cart-detail"><Tag size={12}/> {buildLogoLine(item).replace("Logo: Yes — ", "")}</p>
          {/if}
          {#if item.bonus}
            <p class="cart-detail bonus-detail">+{item.bonus} bonus units</p>
          {/if}
          <div class="cart-actions">
            <button class="icon-btn edit-btn" on:click={() => openEdit(i)} title="Edit">
              <Pencil size={12}/> Edit
            </button>
            <button class="icon-btn remove-btn" on:click={() => removeFromCart(i)} title="Remove">
              <Trash size={12}/>
            </button>
          </div>
        </div>
      {/each}
    </div>

    <div class="cart-footer">
      <div class="total-row">
        <span>Grand Total</span>
        <strong>${grandTotal.toFixed(2)}</strong>
      </div>
      <button
        class="submit-btn"
        disabled={cart.length === 0}
        on:click={openCloseForm}
      >
        Submit Quote →
      </button>
    </div>
  </aside>
</div>

{#if showCloseForm}
  <div class="modal-backdrop" on:click={() => (showCloseForm = false)}>
    <div class="modal close-form-modal" on:click|stopPropagation>
      <button class="close-form-btn" on:click={() => (showCloseForm = false)}>✕</button>
      <close-form
        id="form_033RpokajGycTOFFQ4NIuo"
        data-order_form={buildQuoteText()}
      ></close-form>
    </div>
  </div>
{/if}

<!-- PRODUCT MODAL -->
{#if selectedProduct}
  <div class="modal-backdrop" on:click={() => { selectedProduct = null; editingIndex = null; }}>
    <div class="modal" on:click|stopPropagation>
      <div class="modal-header">
        <div>
          <h2>{selectedProduct.name}</h2>
          <p class="modal-subtitle">#{selectedProduct.number} · Base price: <strong>${selectedProduct.price}</strong></p>
        </div>
        <button class="modal-close" on:click={() => { selectedProduct = null; editingIndex = null; }}>✕</button>
      </div>

      <!-- AMOUNT -->
      <div class="form-row">
        <div class="form-group half">
          <label>Quantity</label>
          <div class="number-input-wrap">
            <button class="num-btn" on:click={() => formData.amount = Math.max(1, formData.amount - 1)}>−</button>
            <input type="number" min="1" bind:value={formData.amount} />
            <button class="num-btn" on:click={() => formData.amount = formData.amount + 1}>+</button>
          </div>
        </div>

        <!-- COLOR CUSTOM DROPDOWN -->
        {#if selectedProduct.colors && selectedProduct.colors.length > 0}
          <div class="form-group half">
            <label>Color</label>
            <div
              class="custom-select-wrap"
            >
              <button
                class="custom-select-btn"
                on:click={() => { colorDropdownOpen = !colorDropdownOpen; logoTypeDropdownOpen = false; }}
              >
                <span class="select-value">
                  <span class="color-dot" style="background:{colorDot[formData.color] ?? '#888'}"></span>
                  {formData.color} ({colorCode(selectedProduct.number, formData.color)})
                </span>
                <svg class="chevron" class:open={colorDropdownOpen} width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              {#if colorDropdownOpen}
                <div class="custom-select-list">
                  {#each selectedProduct.colors as color}
                    <button
                      class="custom-select-item"
                      class:selected={formData.color === color}
                      on:click={() => { formData.color = color; colorDropdownOpen = false; }}
                    >
                      <span class="color-dot" style="background:{colorDot[color] ?? '#888'}"></span>
                      {color} ({colorCode(selectedProduct.number, color)})
                      {#if formData.color === color}<span class="check-mark">✓</span>{/if}
                    </button>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/if}
      </div>

      <!-- ENGRAVING -->
      <div class="form-group">
        <label>Engraving</label>
        <div class="checkbox-group">
          {#each engravingOptions as option}
            <label class="check-label" class:active={formData.engravingChecked.includes(option)}>
              <input
                type="checkbox"
                checked={formData.engravingChecked.includes(option)}
                on:change={() => toggleEngraving(option)}
              />
              <span>{option}</span>
            </label>
          {/each}
        </div>
        {#if formData.engravingChecked.includes("Custom")}
          <input
            class="text-input"
            type="text"
            bind:value={formData.engravingCustomText}
            placeholder="Enter custom engraving text..."
          />
        {/if}
      </div>

      <!-- LOGO -->
      <div class="form-group">
        <label>Logo</label>
        <div class="checkbox-group">
          <label class="check-label" class:active={!formData.logo}>
            <input type="radio" name="logo" value={false} bind:group={formData.logo} />
            <span>No Logo</span>
          </label>
          <label class="check-label" class:active={formData.logo}>
            <input type="radio" name="logo" value={true} bind:group={formData.logo} />
            <span>Add Logo</span>
          </label>
        </div>

        {#if formData.logo}
          <div
            class="custom-select-wrap logo-select-wrap"
          >
            <button
              class="custom-select-btn"
              on:click={() => { logoTypeDropdownOpen = !logoTypeDropdownOpen; colorDropdownOpen = false; }}
            >
              <span class="select-value">{logoTypeLabels[formData.logoType]}</span>
              <svg class="chevron" class:open={logoTypeDropdownOpen} width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            {#if logoTypeDropdownOpen}
              <div class="custom-select-list">
                {#each Object.entries(logoTypeLabels) as [val, label]}
                  <button
                    class="custom-select-item"
                    class:selected={formData.logoType === val}
                    on:click={() => { formData.logoType = val; logoTypeDropdownOpen = false; }}
                  >
                    {label}
                    {#if formData.logoType === val}<span class="check-mark">✓</span>{/if}
                  </button>
                {/each}
              </div>
            {/if}
          </div>

          {#if formData.logoType === "company"}
            <label class="check-label office-check" class:active={formData.officeSpecific}>
              <input type="checkbox" bind:checked={formData.officeSpecific} />
              <span>Office Specific</span>
            </label>
          {/if}
        {/if}
      </div>

      <!-- BONUS -->
      <div class="form-group">
        <label>Bonus Units</label>
        <div class="number-input-wrap">
          <button class="num-btn" on:click={() => formData.bonus = Math.max(0, formData.bonus - 1)}>−</button>
          <input type="number" bind:value={formData.bonus} placeholder="0" step="1" min="0" />
          <button class="num-btn" on:click={() => formData.bonus = formData.bonus + 1}>+</button>
        </div>
          <p class="bonus-preview">
            {formData.amount + formData.bonus} total units · Line total ${calcTotal(selectedProduct.price, formData.amount, formData.bonus).toFixed(2)}
          </p>
      </div>

      <div class="modal-actions">
        <button class="secondary" on:click={() => { selectedProduct = null; editingIndex = null; }}>
          Cancel
        </button>
        <button class="primary" on:click={addToCart}>
          {editingIndex !== null ? "Save Changes" : "Add To Quote"}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>

  ::-webkit-scrollbar { width: 3px; height: 3px; }
  ::-webkit-scrollbar-thumb { background: var(--btn-primary); border-radius: 4px; }

  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
    background: var(--bg-primary);
    color: var(--text-color);
  }

  .sidebar {
    width: 240px;
    min-width: 240px;
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-color);
    padding: 1.25rem;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .sidebar-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0 1rem;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 0.5rem;
  }
  .brand-label {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .filter-section {
    margin-bottom: 1rem;
  }

  .section-label {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin: 0 0 0.5rem;
    padding: 0 0.25rem;
  }

  .sidebar-item-grid {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .sidebar-item {
    background: transparent;
    border: none;
    padding: 0.65rem 0.75rem;
    border-radius: 8px;
    color: var(--text-color);
    cursor: pointer;
    text-align: left;
    font-size: 0.9rem;
    transition: background 0.12s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sidebar-item:hover {
    background: var(--bg-tertiary);
  }

  .sidebar-item.selected {
    background: var(--btn-primary);
    color: var(--btn-text-primary);
    font-weight: 600;
  }

  .selected-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--btn-text-primary);
    opacity: 0.7;
  }

  .product-filter {
    position: relative;
  }

  .dropdown-toggle {
    width: 100%;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    padding: 0.7rem 0.85rem;
    border-radius: 10px;
    color: var(--text-color);
    cursor: pointer;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.88rem;
    transition: border-color 0.15s;
    box-sizing: border-box;
  }

  .dropdown-toggle:hover,
  .dropdown-toggle.active {
    border-color: var(--btn-primary);
  }

  .dropdown-toggle.active {
    color: var(--btn-primary);
  }

  .chevron {
    transition: transform 0.18s;
    opacity: 0.6;
    flex-shrink: 0;
  }
  .chevron.open { transform: rotate(180deg); opacity: 1; }

  .dropdown-list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 0.4rem;
    z-index: 200;
    max-height: 240px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    box-shadow: 0 8px 28px rgba(0,0,0,0.35);
  }

  .dropdown-divider {
    height: 1px;
    background: var(--border-color);
    margin: 0.25rem 0;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 0.6rem;
    border-radius: 7px;
    cursor: pointer;
    font-size: 0.83rem;
    color: var(--text-color);
    transition: background 0.1s;
    user-select: none;
  }

  .dropdown-item:hover { background: var(--bg-tertiary); }
  .dropdown-item.checked { color: var(--btn-primary); }
  .dropdown-item input[type="checkbox"] { display: none; }

  .custom-checkbox {
    width: 15px;
    height: 15px;
    border-radius: 4px;
    border: 1.5px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
    flex-shrink: 0;
    transition: background 0.12s, border-color 0.12s;
    color: var(--btn-text-primary);
  }

  .custom-checkbox.on {
    background: var(--btn-primary);
    border-color: var(--btn-primary);
  }

  .item-label { flex: 1; }

  .clear-btn {
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 0.78rem;
    cursor: pointer;
    padding: 0.3rem 0.6rem;
    text-align: left;
    border-radius: 6px;
    transition: color 0.12s;
  }
  .clear-btn:hover { color: var(--btn-primary); }

  .active-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.5rem;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    background: color-mix(in srgb, var(--btn-primary) 15%, transparent);
    border: 1px solid color-mix(in srgb, var(--btn-primary) 40%, transparent);
    color: var(--btn-primary);
    font-size: 0.72rem;
    padding: 0.2rem 0.5rem;
    border-radius: 999px;
  }

  .tag-remove {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-size: 0.65rem;
    padding: 0;
    line-height: 1;
    opacity: 0.7;
  }
  .tag-remove:hover { opacity: 1; }

  /* ─── MAIN CONTENT ─── */
  .content {
    flex: 1;
    padding: 1.5rem 2rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .topbar {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .search-wrap {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    color: var(--text-muted);
    pointer-events: none;
  }

  .search-wrap input {
    width: 100%;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    padding: 0.85rem 2.5rem 0.85rem 2.75rem;
    border-radius: 12px;
    color: var(--text-color);
    box-sizing: border-box;
    outline: none;
    font-size: 0.9rem;
    transition: border-color 0.15s;
  }

  .search-wrap input:focus { border-color: var(--btn-primary); }

  .search-clear {
    position: absolute;
    right: 0.85rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 0.75rem;
    padding: 0.25rem;
  }
  .search-clear:hover { color: var(--text-color); }

  .results-count {
    font-size: 0.82rem;
    color: var(--text-muted);
    white-space: nowrap;
  }

  /* ─── CARDS ─── */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.25rem;
  }

  .card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    color: var(--text-color);
    text-align: left;
    transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
    position: relative;
  }

  .card:hover {
    transform: translateY(-3px);
    border-color: var(--btn-primary);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }

  .best-seller-badge {
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    background: var(--btn-primary);
    color: var(--btn-text-primary);
    font-size: 0.68rem;
    font-weight: 700;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    z-index: 1;
    letter-spacing: 0.03em;
  }

  .image-wrapper {
    height: 140px;
    background: var(--bg-tertiary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  .card-content {
    padding: 0.85rem 1rem 1rem;
  }

  .card-content h3 {
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
    line-height: 1.3;
  }

  .product-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-bottom: 0.6rem;
  }

  .product-tag {
    font-size: 0.68rem;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 999px;
    padding: 0.15rem 0.45rem;
    color: var(--text-muted);
  }

  .bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.25rem;
  }

  .item-num { font-size: 0.78rem; color: var(--text-muted); }

  .price {
    font-weight: 700;
    font-size: 1rem;
    color: var(--btn-primary);
  }

  /* ─── CART ─── */
  .cart-sidebar {
    width: 260px;
    min-width: 260px;
    background: var(--bg-secondary);
    border-left: 1px solid var(--border-color);
    padding: 1.25rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .cart-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border-color);
  }

  .cart-header h2 { margin: 0; font-size: 1.1rem; }

  .cart-count {
    background: var(--btn-primary);
    color: var(--btn-text-primary);
    font-size: 0.72rem;
    font-weight: 700;
    min-width: 20px;
    height: 20px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.35rem;
  }

  .cart-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    overflow-y: auto;
  }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 2rem 0;
    color: var(--text-muted);
  }

  .empty p { margin: 0; font-size: 0.88rem; }
  .empty-sub { font-size: 0.75rem !important; opacity: 0.6; }

  .cart-item {
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: border-color 0.12s;
  }

  .cart-item:hover { border-color: var(--btn-primary); }

  .cart-item-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .cart-item-top h4 {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.3;
    flex: 1;
  }

  .cart-price {
    font-weight: 700;
    color: var(--btn-primary);
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .cart-item-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .meta-pill {
    font-size: 0.72rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 999px;
    padding: 0.15rem 0.5rem;
    color: var(--text-muted);
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  .color-pill { text-transform: capitalize; }

  .color-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    border: 1px solid rgba(255,255,255,0.15);
    display: inline-block;
  }

  .cart-detail {
    margin: 0;
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .bonus-detail { color: var(--btn-secondary) !important; font-weight: 600; }

  .cart-actions {
    display: flex;
    gap: 0.4rem;
    margin-top: 0.1rem;
  }

  .icon-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 7px;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    font-size: 0.75rem;
    color: var(--text-muted);
    line-height: 1;
    transition: border-color 0.12s, background 0.12s, color 0.12s;
  }

  .edit-btn:hover {
    border-color: var(--btn-primary);
    color: var(--btn-primary);
    background: color-mix(in srgb, var(--btn-primary) 10%, transparent);
  }

  .remove-btn:hover {
    border-color: #f87171;
    color: #f87171;
    background: rgba(248, 113, 113, 0.1);
  }

  .cart-footer {
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
    margin-top: 0.5rem;
  }

  .total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }

  .total-row strong { font-size: 1.15rem; color: var(--btn-primary); }

  .submit-btn {
    width: 100%;
    padding: 0.9rem 1rem;
    border: none;
    border-radius: 12px;
    background: var(--btn-primary);
    color: var(--btn-text-primary);
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: filter 0.15s, transform 0.1s;
    letter-spacing: 0.02em;
  }

  .submit-btn:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
  .submit-btn:active:not(:disabled) { transform: translateY(0); }
  .submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    backdrop-filter: blur(6px);
  }

  .modal {
    width: 500px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 1.75rem;
    box-sizing: border-box;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;
  }

  .modal-header h2 { margin: 0 0 0.2rem; font-size: 1.2rem; }
  .modal-subtitle { color: var(--text-muted); font-size: 0.83rem; margin: 0; }

  .modal-close {
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: color 0.12s, border-color 0.12s;
  }
  .modal-close:hover { color: var(--text-color); border-color: var(--text-muted); }

  .form-row {
    display: flex;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.1rem;
  }

  .form-group.half { flex: 1; }

  .form-group > label {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    text-transform: uppercase;
  }

  /* Number input with +/- */
  .number-input-wrap {
    display: flex;
    align-items: center;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
  }

  .num-btn {
    background: none;
    border: none;
    padding: 0.7rem 0.9rem;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 1.1rem;
    line-height: 1;
    transition: background 0.1s, color 0.1s;
    flex-shrink: 0;
  }
  .num-btn:hover { background: var(--bg-secondary); color: var(--text-color); }

  .number-input-wrap input {
    flex: 1;
    background: none;
    border: none;
    text-align: center;
    color: var(--text-color);
    font-size: 0.95rem;
    outline: none;
    min-width: 0;
    padding: 0.7rem 0;
  }

  /* Custom select */
  .custom-select-wrap {
    position: relative;
  }

  .logo-select-wrap { margin-top: 0.4rem; }

  .custom-select-btn {
    width: 100%;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    padding: 0.75rem 0.9rem;
    border-radius: 10px;
    color: var(--text-color);
    cursor: pointer;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    transition: border-color 0.15s;
    box-sizing: border-box;
    gap: 0.5rem;
  }

  .custom-select-btn:hover { border-color: var(--btn-primary); }

  .select-value {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .custom-select-list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 0.4rem;
    z-index: 300;
    box-shadow: 0 8px 28px rgba(0,0,0,0.35);
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .custom-select-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 0.75rem;
    border-radius: 7px;
    cursor: pointer;
    font-size: 0.88rem;
    color: var(--text-color);
    background: none;
    border: none;
    text-align: left;
    transition: background 0.1s;
    width: 100%;
  }

  .custom-select-item:hover { background: var(--bg-tertiary); }
  .custom-select-item.selected { color: var(--btn-primary); font-weight: 600; }

  .check-mark { margin-left: auto; font-size: 0.8rem; }

  /* Checkboxes & radios */
  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .check-label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.45rem 0.75rem;
    cursor: pointer;
    font-size: 0.83rem;
    color: var(--text-muted);
    transition: border-color 0.12s, color 0.12s;
    user-select: none;
  }

  .check-label:hover { border-color: var(--btn-primary); color: var(--text-color); }

  .check-label.active {
    border-color: var(--btn-primary);
    color: var(--btn-primary);
    background: color-mix(in srgb, var(--btn-primary) 12%, var(--bg-tertiary));
  }

  .check-label input[type="checkbox"],
  .check-label input[type="radio"] {
    display: none;
  }

  .text-input {
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    padding: 0.75rem 1rem;
    border-radius: 10px;
    color: var(--text-color);
    outline: none;
    font-size: 0.9rem;
    transition: border-color 0.15s;
    width: 100%;
    box-sizing: border-box;
  }
  .text-input:focus { border-color: var(--btn-primary); }

  .office-check { margin-top: 0.5rem; align-self: flex-start; }

  .bonus-preview {
    font-size: 0.8rem;
    color: var(--btn-secondary, var(--btn-primary));
    margin: 0;
    opacity: 0.85;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
  }

  .primary, .secondary {
    border: none;
    padding: 0.8rem 1.4rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.88rem;
    font-weight: 600;
    transition: filter 0.15s, transform 0.1s;
  }

  .primary { background: var(--btn-primary); color: var(--btn-text-primary); }
  .primary:hover { filter: brightness(1.1); transform: translateY(-1px); }

  .secondary {
    background: var(--bg-tertiary);
    color: var(--text-muted);
    border: 1px solid var(--border-color);
  }
  .secondary:hover { filter: brightness(1.12); }

  /* Close form modal */
  .close-form-modal {
    position: relative;
    width: min(1000px, 95vw);
    max-height: 90vh;
    overflow-y: auto;
    padding-top: 3rem;
  }

  .close-form-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background: var(--bg-tertiary);
    color: var(--text-color);
    cursor: pointer;
    font-size: 0.9rem;
  }

  .close-form-btn:hover { filter: brightness(1.15); }
</style>