/* Mi Gabinete Virtual – main.js */

function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.screen-nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('nav-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function renderProductGrid() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const colors = ['#D4C5B0','#B8C4C2','#C4A882','#9CB4B8','#D4B8A0','#B8B0A8','#C8B8A0','#A8C0B0','#D0C0A8','#B0B8C0','#C8A890','#A8B8C8'];
  const names  = ['Jersey Lana','Camisa Oxford','Camiseta Basic','Pantalón Slim','Jersey Punto','Camisa Lino','Camiseta Print','Chaqueta Knit','Abrigo Largo','Jersey Cuello','Camisa Casual','Pantalón Wide'];
  grid.innerHTML = names.map((n, i) => `
    <div class="col">
      <div class="card product-card h-100 border" onclick="goTo('s3')">
        <div class="product-img rounded-top" style="background:linear-gradient(135deg,${colors[i]}88,${colors[(i+3)%12]}88);">
          👕
          ${i===1||i===5 ? '<span class="badge badge-clay position-absolute top-0 end-0 m-2">Oferta</span>' : ''}
        </div>
        <div class="card-body p-2">
          <div class="fw-semibold small">${n}</div>
          <div class="font-head fw-semibold text-clay">${(29+i*7).toFixed(2)} $</div>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProductGrid);
