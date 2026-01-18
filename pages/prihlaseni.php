<?php
echo '<section class="login-section">
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="login-card">
          <div class="login-card-body">

            <div class="login-header">
              <h2 class="login-title">Přihlášení</h2>
              <p class="login-subtitle">Přihlášení je pouze pro adminy stránky</p>
            </div>

            <form method="POST" action="">
              <div class="form-group">
                <label class="form-label" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" class="form-input" placeholder="vase@email.cz" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="typePasswordX">Heslo</label>
                <input type="password" id="typePasswordX" class="form-input" placeholder="••••••••" required />
              </div>

              <div class="form-footer">
                <a class="forgot-link" href="#!">Zapomněli jste heslo?</a>
              </div>

              <button class="btn-login" type="submit">
                <span>Přihlásit se</span>
                <i class="fas fa-arrow-right"></i>
              </button>
            </form>

            <div class="register-section">
              <p>Nemáte účet? <a href="#!" class="register-link">Zaregistrovat se</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>';