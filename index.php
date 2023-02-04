<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><?php echo $pageTitle; ?></title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <div class="logo">
        <h1><?php echo $siteTitle; ?></h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="menu-toggle">
        <i class="fas fa-bars"></i>
      </div>
    </header>

    <main>
      <?php echo $pageContent; ?>
    </main>

    <footer>
      <p>&copy; <?php echo date('Y'); ?> <?php echo $siteTitle; ?></p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
