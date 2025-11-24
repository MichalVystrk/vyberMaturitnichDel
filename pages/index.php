<?php
echo '
      <!-- Main Content -->
    <div class="container-main">
        <div class="header-section">
            <h1>Výběr Maturitních Děl</h1>
            <p>Vyberte si literatura na základě zadaných kritérií</p>
        </div>

        <div class="row">
            <div class="col-lg-8">
                <form id="bookForm" method="POST" action="">
                    <!-- Category 1: Světová a česká literatura do konce 18. století -->
                    <div class="category-section">
                        <div class="category-title">
                            <div class="category-icon"></div>
                            Světová a česká literatura do konce 18. století
                        </div>
                        <div class="books-grid" id="category1">
                            <!-- Books will be loaded here -->
                        </div>
                    </div>

                    <!-- Category 2: Světová a česká literatura 19. století -->
                    <div class="category-section">
                        <div class="category-title">
                            <div class="category-icon"></div>
                            Světová a česká literatura 19. století
                        </div>
                        <div class="books-grid" id="category2">
                            <!-- Books will be loaded here -->
                        </div>
                    </div>

                    <!-- Category 3: Světová literatura 20. a 21. století -->
                    <div class="category-section">
                        <div class="category-title">
                            <div class="category-icon"></div>
                            Světová literatura 20. a 21. století
                        </div>
                        <div class="books-grid" id="category3">
                            <!-- Books will be loaded here -->
                        </div>
                    </div>

                    <!-- Category 4: Česká literatura 20. a 21. století -->
                    <div class="category-section">
                        <div class="category-title">
                            <div class="category-icon"></div>
                            Česká literatura 20. a 21. století
                        </div>
                        <div class="books-grid" id="category4">
                            <!-- Books will be loaded here -->
                        </div>
                    </div>

                    <div id="messages"></div>

                    <div class="buttons-section">
                        <button type="submit" class="btn-custom btn-submit" id="submitBtn">Odeslat Výběr</button>
                        <button type="reset" class="btn-custom btn-reset">Zrušit Výběr</button>
                    </div>
                </form>
            </div>

            <!-- Summary Panel -->
            <div class="col-lg-4">
                <div class="selection-summary">
                    <div class="summary-title">📊 Přehled Výběru</div>
                    
                    <div class="summary-item">
                        <span>Celkový počet děl:</span>
                        <strong id="totalCount">0 / 4</strong>
                    </div>
                    
                    <div class="summary-item">
                        <span>Próza:</span>
                        <strong id="prosaCount">0 / 2</strong>
                    </div>
                    
                    <div class="summary-item">
                        <span>Poezie:</span>
                        <strong id="poesieCount">0 / 2</strong>
                    </div>
                    
                    <div class="summary-item">
                        <span>Drama:</span>
                        <strong id="dramaCount">0 / 2</strong>
                    </div>

                    <div class="summary-item">
                        <span>Max. 2 od autora:</span>
                        <span class="status-badge" id="authorStatus" style="background: rgba(34, 197, 94, 0.2); color: #86efac;">✓ OK</span>
                    </div>

                    <div class="genre-stats">
                        <div class="stat-box">
                            <div class="stat-label">Próza</div>
                            <div class="stat-value" id="prosaStat">0</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">Poezie</div>
                            <div class="stat-value" id="poesieStat">0</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">Drama</div>
                            <div class="stat-value" id="dramaStat">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
';


