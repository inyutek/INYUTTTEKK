<?php
/**
 * Main template file for Inyutek Figma Theme (Full with Icons)
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="iny-header">
  <div class="container header-inner">
    <div class="logo">INYUTEK</div>
    <nav class="nav-menu">
      <a href="#services">Services</a>
      <a href="#case-studies">Case Studies</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<main>

  <section class="hero" id="top">
    <div class="container hero-inner">
      <h1 class="hero-title">
        PRECISION<br>
        PERFORMANCE<br>
        PROMOTION<br>
        IMPACT
      </h1>

      <p class="hero-desc">
        We help small and medium sized business and early stage startups scale with modern website,
        brand clarity and performance driven digital strategy.
      </p>

      <div class="hero-buttons">
        <a href="#contact" class="hero-btn primary">Schedule a call</a>
        <a href="#services" class="hero-btn outline">View Services</a>
      </div>
    </div>
  </section>

  <section class="services" id="services">
    <h1 class="services-heading">THINGS WE DO</h1>
    <div class="services-divider"></div>

    <div class="services-grid container">
      <div class="service-card">
        <div class="service-card-inner">
          <img class="service-icon" src="<?php echo get_template_directory_uri(); ?>/icons/logos_web-dev.svg" class="service-icon webdev" alt="Web development icon">
          <h3>WEB DEVELOPMENT &amp; DESIGN</h3>
          <p>Building high-performance, conversion-focused websites and intuitive user interfaces (UI/UX).</p>
        </div>
      </div>

      <div class="service-card">
        <div class="service-card-inner">
          <img class="service-icon" src="<?php echo get_template_directory_uri(); ?>/icons/mdi_ads.svg" class="service-icon ads" alt="Social media marketing icon">
          <h3>SOCIAL MEDIA MARKETING</h3>
          <p>Developing engaging content strategies and managing campaigns to drive audience growth and conversion.</p>
        </div>
      </div>

      <div class="service-card">
        <div class="service-card-inner">
          <img class="service-icon" src="<?php echo get_template_directory_uri(); ?>/icons/et_strategy.svg" class="service-icon strategy" alt="Branding and strategy icon">
          <h3>BRANDING &amp; STRATEGY</h3>
          <p>Defining your core message, visual identity, and strategic roadmap for long-term market authority.</p>
        </div>
      </div>

      <div class="service-card">
        <div class="service-card-inner">
          <img class="service-icon" src="<?php echo get_template_directory_uri(); ?>/icons/game-icons_stump-regrowth.svg" class="service-icon sales" alt="Sales support icon">
          <h3>SALES SUPPORT</h3>
          <p>Implementing systems, processes, and content that empower your sales team to close deals efficiently.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="why" id="case-studies">
    <div class="container why-inner">
      <div class="why-left">
        <h2>WHY CHOOSE US</h2>
        <p>We combine precision, clarity, and modern digital execution to create measurable growth for ambitious brands.</p>
        <a href="#case-studies" class="case-link">Read our Case Studies →</a>
      </div>

      <div class="why-right">
        <div class="stat-box">
          <h3>35+</h3>
          <span>WEBSITES LAUNCHED</span>
        </div>
        <div class="stat-box">
          <h3>10+</h3>
          <span>INDUSTRIES SERVED</span>
        </div>
        <div class="stat-box wide">
          <h3>98%</h3>
          <span>CLIENT SATISFACTION SCORE</span>
        </div>
      </div>
    </div>
  </section>

  <section class="cta" id="contact">
    <div class="cta-inner">
      <span class="cta-small">START YOUR TRANSFORMATION</span>
      <h2 class="cta-title">SCHEDULE A FREE CONSULTATION CALL</h2>
      <a href="mailto:hello@inyutek.com" class="cta-btn">Book a Call →</a>
    </div>
  </section>

</main>

<footer class="footer">
  <div class="container footer-top">
    <div class="footer-col">
      <h3>INYUTEK</h3>
      <p>Precision, clarity, and modern execution for ambitious brands. We build digital infrastructures that scale.</p>
      <a href="mailto:hello@inyutek.com" class="footer-email">hello@inyutek.com</a>
    </div>

    <div class="footer-col">
      <h4>Company</h4>
      <a href="#top">About Us</a>
      <a href="#top">Our Process</a>
      <a href="#top">Careers</a>
      <a href="#contact">Contact</a>
    </div>

    <div class="footer-col">
      <h4>Services</h4>
      <a href="#services">Web Development</a>
      <a href="#services">Brand Strategy</a>
      <a href="#services">Social Marketing</a>
      <a href="#services">Sales Enablement</a>
    </div>

    <div class="footer-col">
      <h4>Legal</h4>
      <a href="#top">Privacy Policy</a>
      <a href="#top">Terms of Service</a>
      <a href="#top">Cookie Policy</a>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2025 Inyutek Consulting LLP. All rights reserved.</p>
    <div class="social">
      <a href="#top">Linkedin</a>
      <a href="#top">Twitter</a>
      <a href="#top">Instagram</a>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
