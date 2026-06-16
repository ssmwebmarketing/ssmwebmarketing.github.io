// Mock Blog Post Database
const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Proven SEO Strategies to Rank Higher in 2026",
    excerpt: "Discover the latest Search Engine Optimization tactics that are driving organic traffic, from AI-driven search alignment to structured data optimization.",
    content: `
      <p>Search Engine Optimization (SEO) continues to evolve at a rapid pace. As search engines integrate more AI-driven algorithms, the strategies we use must also adapt. Here are the top 10 SEO strategies that will keep you ahead of the competition.</p>
      <h3>1. Optimize for Search Generative Experience (SGE)</h3>
      <p>AI search overviews are changing how users interact with queries. To rank in AI-generated answers, structure your content with direct questions and comprehensive, authoritative answers.</p>
      <h3>2. Emphasize E-E-A-T</h3>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness are critical. Ensure your content is written by industry experts and cite reputable sources.</p>
      <h3>3. Technical SEO & Core Web Vitals</h3>
      <p>Page loading speeds, responsiveness, and structural security are non-negotiable. Google prioritizes websites that offer a fast and frictionless user experience.</p>
      <p>Implement these tips today and watch your search rankings soar!</p>
    `,
    category: "seo",
    date: "June 14, 2026",
    readTime: "5 min read",
    image: "assets/laptop_mockup.png"
  },
  {
    id: 2,
    title: "How to Build a Powerful Brand Identity from Scratch",
    excerpt: "A strong brand is more than just a logo. Learn the step-by-step process of defining your brand voice, color palettes, values, and visual presence.",
    content: `
      <p>Your brand is your promise to your customer. It tells them what they can expect from your products and services, and it differentiates your offering from your competitors'.</p>
      <h3>Define Your Brand Purpose</h3>
      <p>Before designing logos or choosing colors, understand your 'Why'. What problem are you solving, and who are you solving it for?</p>
      <h3>Visual Design Elements</h3>
      <p>Choose a color palette and typography that reflects your brand's personality. Sleek navy and violet represent security and innovation, while yellow conveys optimism and energy.</p>
      <p>Consistency is key. Apply your branding rules across all social channels, websites, and print materials.</p>
    `,
    category: "branding",
    date: "June 12, 2026",
    readTime: "7 min read",
    image: "assets/laptop_mockup.png"
  },
  {
    id: 3,
    title: "SMM Masterclass: Increasing Social Engagement",
    excerpt: "Struggling to get likes and shares? Check out this complete guide on maximizing engagement across Instagram, Facebook, TikTok, and Twitter.",
    content: `
      <p>Social Media Marketing is not just about posting content; it's about building relationships. Engagement is the metric that proves your audience is active and listening.</p>
      <h3>Short-Form Video is King</h3>
      <p>Reels, TikToks, and YouTube Shorts drive the highest engagement rates. Focus on the first 3 seconds to hook viewers and encourage comments with interactive questions.</p>
      <h3>Use SMM Boosting Wisely</h3>
      <p>Pairing organic growth campaigns with initial social boosting (likes, views) helps bypass restrictive algorithms and creates social proof that attracts organic followers.</p>
      <p>Consistency, timing, and direct engagement with comment replies will build a loyal community.</p>
    `,
    category: "smm",
    date: "June 10, 2026",
    readTime: "4 min read",
    image: "assets/laptop_mockup.png"
  },
  {
    id: 4,
    title: "Why Modern Web Development Requires Glassmorphism",
    excerpt: "Exploring the trend of translucent UI layouts. Learn how backdrop filters, soft glows, and premium CSS variables elevate modern design aesthetics.",
    content: `
      <p>Modern web design is moving away from flat layouts towards interfaces that feel dimensional and alive. Glassmorphism is a major driver of this aesthetic shift.</p>
      <h3>The Glassmorphic Style</h3>
      <p>By combining multi-layered blur, low opacity backgrounds, and thin borders, you can create a feeling of floating panels. It looks incredibly premium and is highly engaging.</p>
      <h3>Performance Considerations</h3>
      <p>Always use CSS backdrop-filters responsibly. Overusing CSS filters on mobile devices can cause rendering lag. Balance aesthetics with fast loading speeds.</p>
    `,
    category: "webdev",
    date: "June 08, 2026",
    readTime: "6 min read",
    image: "assets/laptop_mockup.png"
  }
];

// SMM Pricing Matrix (Rate per 1,000 units in USD)
const SMM_PRICING = {
  instagram: {
    name: "Instagram Boost",
    badge: "badge-ig",
    options: [
      { name: "Followers (100% Real)", rate: 12 },
      { name: "Likes (High Quality)", rate: 6 },
      { name: "Reels Views (Super Fast)", rate: 3 },
      { name: "Story Views", rate: 4 },
      { name: "Reels Likes", rate: 7 }
    ]
  },
  facebook: {
    name: "Facebook Boost",
    badge: "badge-fb",
    options: [
      { name: "Followers / Page Likes", rate: 15 },
      { name: "Post Likes (Active)", rate: 7 },
      { name: "Video Views", rate: 4 },
      { name: "Post Shares", rate: 8 }
    ]
  },
  youtube: {
    name: "YouTube Boost",
    badge: "badge-yt",
    options: [
      { name: "High Retention Views", rate: 9 },
      { name: "Likes", rate: 8 },
      { name: "Subscribers (Non-Drop)", rate: 45 },
      { name: "Watch Time Hours", rate: 35 },
      { name: "Custom Comments", rate: 25 }
    ]
  },
  tiktok: {
    name: "TikTok Boost",
    badge: "badge-tk",
    options: [
      { name: "Followers", rate: 10 },
      { name: "Likes", rate: 5 },
      { name: "Video Views", rate: 1.5 },
      { name: "Shares", rate: 6 },
      { name: "Video Saves", rate: 5 }
    ]
  },
  twitter: {
    name: "Twitter (X) Boost",
    badge: "badge-tw",
    options: [
      { name: "Followers", rate: 18 },
      { name: "Tweet Likes", rate: 9 },
      { name: "Retweets", rate: 12 },
      { name: "Views / Impressions", rate: 2 }
    ]
  },
  other: {
    name: "Other Platforms",
    badge: "badge-ot",
    options: [
      { name: "Telegram Channel Members", rate: 14 },
      { name: "LinkedIn Followers", rate: 28 },
      { name: "Spotify Track Plays", rate: 5 },
      { name: "Pinterest Board Followers", rate: 12 }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    
    // Auto-update active nav link
    const sections = ["home", "services", "smm-packages", "testimonials", "faq", "blog", "contact"];
    let currentActive = "home";
    
    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentActive = secId;
        }
      }
    });
    
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("data-target") === currentActive) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // --- Mobile Navigation Menu ---
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("open");
    });
    
    // Close menu when link is clicked
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          navMenu.classList.remove("active");
          navToggle.classList.remove("open");
          
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth"
          });
        }
      });
    });
  }

  // --- Live Statistics Count-up Animation ---
  const statCards = document.querySelectorAll(".stat-card");
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    statCards.forEach(card => {
      const numEl = card.querySelector(".stat-number");
      const target = parseFloat(card.getAttribute("data-target"));
      const isPercent = target === 99.9;
      const isFraction = target === 24;
      let current = 0;
      
      const duration = 2000; // 2 seconds
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let stepCount = 0;

      const timer = setInterval(() => {
        current += increment;
        stepCount++;

        if (stepCount >= steps) {
          clearInterval(timer);
          current = target;
        }

        // Formatting output
        if (target >= 1000000) {
          numEl.textContent = (current / 1000000).toFixed(1) + "M+";
        } else if (target >= 1000) {
          numEl.textContent = Math.floor(current / 1000).toLocaleString() + "k+";
        } else if (isPercent) {
          numEl.textContent = current.toFixed(1) + "%";
        } else if (isFraction) {
          numEl.textContent = Math.round(current) + "/7";
        } else {
          numEl.textContent = Math.round(current) + "+";
        }
      }, stepTime);
    });
  }

  // --- Scroll Reveal Observers ---
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        // Trigger statistics counting when stats container reveals
        if (entry.target.classList.contains("stats-section")) {
          animateStats();
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach(el => {
    revealObserver.observe(el);
  });

  // --- FAQs Accordion Panel ---
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const answer = item.querySelector(".faq-answer");
      const isActive = item.classList.contains("active");

      // Close all FAQs first
      document.querySelectorAll(".faq-item").forEach(el => {
        el.classList.remove("active");
        el.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Toggle current FAQ
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // --- Blog Feed Setup & Rendering ---
  const blogGrid = document.querySelector(".blog-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const blogSearchInput = document.getElementById("blog-search");
  let currentBlogCategory = "all";
  
  function renderBlogPosts() {
    if (!blogGrid) return;
    
    const query = blogSearchInput ? blogSearchInput.value.toLowerCase().trim() : "";
    blogGrid.innerHTML = "";
    
    // Filter by Category first
    let filteredPosts = currentBlogCategory === "all" 
      ? BLOG_POSTS 
      : BLOG_POSTS.filter(p => p.category === currentBlogCategory);
      
    // Filter by Search query second
    if (query !== "") {
      filteredPosts = filteredPosts.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.excerpt.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query)
      );
    }
    
    if (filteredPosts.length === 0) {
      blogGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 40px; color:var(--color-desc-gray);">
          <svg style="width: 50px; height: 50px; margin-bottom: 15px; color:#a0aec0;" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z"></path>
          </svg>
          <p style="font-weight: 600; font-size: 15px; color: var(--color-dark-gray);">No matching articles found.</p>
          <p style="font-size: 13px; color:#718096; margin-top: 5px;">Try checking spelling or search using another keyword.</p>
        </div>
      `;
      return;
    }

    filteredPosts.forEach(post => {
      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerHTML = `
        <div class="blog-card-img-wrapper">
          <span class="blog-card-tag">${post.category}</span>
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, var(--color-navy-light), var(--color-royal-blue)); display:flex; align-items:center; justify-content:center; color:#fff; font-family:var(--font-heading); font-weight:800; font-size:1.5rem; text-transform:uppercase;">
            ${post.category}
          </div>
        </div>
        <div class="blog-card-content">
          <div class="blog-card-meta">
            <span>📅 ${post.date}</span>
            <span>⏱️ ${post.readTime}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <a class="blog-card-link" onclick="openBlogPost(${post.id})">
            Read More 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      `;
      blogGrid.appendChild(card);
    });
  }

  // Blog filters (Category tabs)
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentBlogCategory = btn.getAttribute("data-filter");
      renderBlogPosts();
    });
  });

  // Blog Search Input listener
  if (blogSearchInput) {
    blogSearchInput.addEventListener("input", renderBlogPosts);
  }

  // Render initial posts
  renderBlogPosts();

  // --- SMM Calculator & Interactive Modal ---
  const orderModal = document.getElementById("order-modal");
  const modalClose = document.querySelector(".modal-close");
  const platformNameTitle = document.getElementById("platform-name");
  const packageSelect = document.getElementById("package-select");
  const quantitySlider = document.getElementById("quantity-slider");
  const quantityValueText = document.getElementById("quantity-value");
  const calculatedPriceText = document.getElementById("calculated-price");
  const submitOrderBtn = document.getElementById("submit-order-btn");
  
  // Screens inside modal
  const orderFormScreen = document.getElementById("order-form-screen");
  const orderReceiptScreen = document.getElementById("order-receipt-screen");
  const closeReceiptBtn = document.getElementById("close-receipt-btn");
  
  let currentPlatform = "instagram";
  
  // Open modal on badge click
  window.openOrderModal = function(platformKey) {
    const platformData = SMM_PRICING[platformKey];
    if (!platformData) return;
    
    currentPlatform = platformKey;
    platformNameTitle.textContent = platformData.name;
    
    // Reset screens to form view
    orderFormScreen.style.display = "block";
    orderReceiptScreen.style.display = "none";
    
    // Load packages dropdown
    packageSelect.innerHTML = "";
    platformData.options.forEach((opt, idx) => {
      const option = document.createElement("option");
      option.value = idx;
      option.textContent = `${opt.name} - $${opt.rate}/1,000`;
      packageSelect.appendChild(option);
    });
    
    // Reset inputs
    quantitySlider.value = 1000;
    quantityValueText.textContent = "1,000";
    document.getElementById("profile-link").value = "";
    
    calculatePrice();
    orderModal.classList.add("active");
  };

  // Close modal
  function closeModal() {
    orderModal.classList.remove("active");
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }
  
  if (closeReceiptBtn) {
    closeReceiptBtn.addEventListener("click", closeModal);
  }
  
  window.addEventListener("click", (e) => {
    if (e.target === orderModal) {
      closeModal();
    }
  });

  // Slider change
  if (quantitySlider) {
    quantitySlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value).toLocaleString();
      quantityValueText.textContent = val;
      calculatePrice();
    });
  }

  // Package dropdown change
  if (packageSelect) {
    packageSelect.addEventListener("change", () => {
      calculatePrice();
    });
  }

  // Calculator logic
  function calculatePrice() {
    if (!packageSelect || !quantitySlider || !calculatedPriceText) return;
    
    const platformData = SMM_PRICING[currentPlatform];
    const selectedOptIdx = parseInt(packageSelect.value);
    const selectedOption = platformData.options[selectedOptIdx];
    const quantity = parseInt(quantitySlider.value);
    
    if (selectedOption) {
      const price = (quantity / 1000) * selectedOption.rate;
      calculatedPriceText.textContent = `$${price.toFixed(2)}`;
    }
  }

  // Order submission
  if (submitOrderBtn) {
    submitOrderBtn.addEventListener("click", () => {
      const platformData = SMM_PRICING[currentPlatform];
      const selectedOption = platformData.options[parseInt(packageSelect.value)];
      const qty = parseInt(quantitySlider.value).toLocaleString();
      const link = document.getElementById("profile-link").value.trim();
      const price = calculatedPriceText.textContent;
      
      if (!link) {
        showToast("Please provide a valid profile or video link!", "error");
        return;
      }
      
      // Load and show Mock Invoice Receipt Screen
      const randomOrderId = "#TRD-" + Math.floor(100000 + Math.random() * 900000);
      document.getElementById("rec-id").textContent = randomOrderId;
      document.getElementById("rec-plat").textContent = platformData.name;
      document.getElementById("rec-pkg").textContent = selectedOption.name.split(" (")[0];
      document.getElementById("rec-qty").textContent = qty;
      document.getElementById("rec-link").textContent = link;
      document.getElementById("rec-price").textContent = price;
      
      orderFormScreen.style.display = "none";
      orderReceiptScreen.style.display = "block";
      
      showToast("Order placed successfully!", "success");
    });
  }

  // --- Single Blog Post Drawer Reader ---
  const blogDrawer = document.getElementById("blog-drawer");
  const drawerCloseBtn = document.querySelector(".drawer-close-btn");
  
  window.openBlogPost = function(postId) {
    const post = BLOG_POSTS.find(p => p.id === postId);
    if (!post || !blogDrawer) return;
    
    const drawerTag = blogDrawer.querySelector(".drawer-tag");
    const drawerTitle = blogDrawer.querySelector(".drawer-title");
    const drawerMeta = blogDrawer.querySelector(".drawer-meta");
    const drawerContent = blogDrawer.querySelector(".drawer-content");
    
    // Populate
    drawerTag.textContent = post.category;
    drawerTitle.textContent = post.title;
    drawerMeta.textContent = `📅 ${post.date}  •  ⏱️ ${post.readTime}  •  By Trendy Digital Team`;
    drawerContent.innerHTML = post.content;
    
    blogDrawer.classList.add("active");
  };

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", () => {
      blogDrawer.classList.remove("active");
    });
  }

  // --- Contact Form Submission ---
  const contactForm = document.getElementById("quote-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const service = document.getElementById("contact-service").value;
      const msg = document.getElementById("contact-message").value.trim();
      
      if (!name || !email || !msg) {
        showToast("Please fill in all required fields.", "error");
        return;
      }
      
      showToast(`Thank you, ${name}! Your request for ${service.toUpperCase()} has been submitted. We will contact you soon.`, "success");
      contactForm.reset();
    });
  }

  // --- Toast Notification System ---
  function showToast(message, type = "success") {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${type === "success" ? "✅" : "⚠️"}</span>
      <p>${message}</p>
    `;
    
    container.appendChild(toast);
    
    // Auto-remove toast after 4.5 seconds
    setTimeout(() => {
      toast.style.animation = "slide-in-toast 0.3s reverse forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4500);
  }
});
