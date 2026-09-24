/* ===================== AdorVix Growth Console =====================
   All data lives in this browser's localStorage. There is no server —
   this is a static site (safe to host on GitHub Pages) meant for a
   small agency team to manage clients and generate invoices.
   NOTE: the login gate is a convenience lock, not bank-grade security.
   Anyone with access to the browser/device or the localStorage data
   could bypass it. Don't store anything highly sensitive here.
===================================================================== */

const INVOICE_LOGO_SRC = "data:image/jpeg;base64,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";

const LS = {
  auth: 'adorvix_auth',
  clients: 'adorvix_clients',
  invoices: 'adorvix_invoices',
  settings: 'adorvix_settings',
  session: 'adorvix_session',
  seq: 'adorvix_invoice_seq',
  clientSeq: 'adorvix_client_seq'
};

/* ---------- tiny helpers ---------- */
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function fmt(n){ return Number(n||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function dmy(iso){ if(!iso) return ''; const [y,m,d]=iso.split('-'); return `${m}/${d}/${y}`; }

async function sha256(str){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

function loadJSON(key, fallback){
  try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch(e){ return fallback; }
}
function saveJSON(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

/* ---------- number to words (Bangladeshi lakh/crore system) ---------- */
function numberToWords(num){
  num = Math.floor(Number(num)||0);
  if(num === 0) return 'Zero';
  const ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
    'Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  const tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
  function two(n){ if(n<20) return ones[n]; return tens[Math.floor(n/10)] + (n%10 ? ' '+ones[n%10] : ''); }
  function three(n){
    let s='';
    if(n>=100){ s += ones[Math.floor(n/100)] + ' Hundred'; n%=100; if(n) s+=' '; }
    if(n>0) s += two(n);
    return s;
  }
  let crore = Math.floor(num/10000000); num%=10000000;
  let lakh = Math.floor(num/100000); num%=100000;
  let thousand = Math.floor(num/1000); num%=1000;
  let rest = num;
  let parts=[];
  if(crore) parts.push(three(crore)+' Crore');
  if(lakh) parts.push(three(lakh)+' Lakh');
  if(thousand) parts.push(three(thousand)+' Thousand');
  if(rest) parts.push(three(rest));
  return parts.join(' ');
}

/* ---------- defaults / seed ---------- */
function ensureDefaults(){
  if(!localStorage.getItem(LS.auth)){
    sha256('adorvix123').then(hash=>{
      saveJSON(LS.auth, {username:'admin', passHash: hash});
    });
  }
  if(!localStorage.getItem(LS.settings)){
    saveJSON(LS.settings, {
      companyName: 'AdorVix',
      tagline: 'Your Digital Growth Partner',
      email: 'infoadorvix@gmail.com',
      phone: '+880 1517-862004',
      fxRate: 128.00,
      gatewayFee: 1.85
    });
  }
  if(!localStorage.getItem(LS.clients)) saveJSON(LS.clients, []);
  if(!localStorage.getItem(LS.invoices)) saveJSON(LS.invoices, []);
  if(!localStorage.getItem(LS.seq)) localStorage.setItem(LS.seq, '1000');
  if(!localStorage.getItem(LS.clientSeq)) localStorage.setItem(LS.clientSeq, '0');
  migrateClientCodes();
}

function nextClientCode(){
  let seq = parseInt(localStorage.getItem(LS.clientSeq) || '0', 10) + 1;
  localStorage.setItem(LS.clientSeq, String(seq));
  return `CL-${String(seq).padStart(4,'0')}`;
}
/* Backfills a serial client code for anyone added before this feature existed,
   in the order they were originally created (array order). */
function migrateClientCodes(){
  const clients = loadJSON(LS.clients, []);
  let changed = false;
  clients.forEach(c=>{
    if(!c.clientCode){
      c.clientCode = nextClientCode();
      changed = true;
    }
  });
  if(changed) saveJSON(LS.clients, clients);
}

/* ---------- auth ---------- */
async function handleLogin(){
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  const auth = loadJSON(LS.auth, {});
  const hash = await sha256(p);
  const errEl = document.getElementById('loginErr');
  if(u === auth.username && hash === auth.passHash){
    sessionStorage.setItem(LS.session, '1');
    errEl.style.display = 'none';
    boot();
  } else {
    errEl.style.display = 'block';
  }
}
function handleLogout(){
  sessionStorage.removeItem(LS.session);
  document.getElementById('app').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginPass').value = '';
}
document.addEventListener('keydown', function(e){
  if(e.key === 'Enter' && document.getElementById('loginScreen').style.display !== 'none'){
    if(document.activeElement.id === 'loginUser' || document.activeElement.id === 'loginPass') handleLogin();
  }
});

/* ---------- view routing ---------- */
function showView(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-view="${name}"]`);
  if(navBtn) navBtn.classList.add('active');
  if(name==='dashboard') renderDashboard();
  if(name==='clients') renderClients();
  if(name==='invoices') renderInvoices();
  if(name==='analytics') renderAnalytics();
  if(name==='settings') loadSettingsForm();
}

/* ---------- dashboard ---------- */
function renderDashboard(){
  const clients = loadJSON(LS.clients, []);
  const invoices = loadJSON(LS.invoices, []);
  document.getElementById('statClients').textContent = clients.length;
  document.getElementById('statInvoices').textContent = invoices.length;
  const revenue = invoices.filter(i=>i.status==='paid').reduce((s,i)=>s+i.total,0);
  const outstanding = invoices.filter(i=>i.status==='unpaid').reduce((s,i)=>s+i.total,0);
  document.getElementById('statRevenue').textContent = '৳' + fmt(revenue);
  document.getElementById('statOutstanding').textContent = '৳' + fmt(outstanding);

  const statusLabel = {draft:'Draft', unpaid:'Unpaid', paid:'Paid'};
  const recent = [...invoices].sort((a,b)=> (b.createdAt||0) - (a.createdAt||0)).slice(0,6);
  const body = document.getElementById('recentInvoicesBody');
  if(recent.length===0){
    body.innerHTML = `<tr><td colspan="5" class="empty">No invoices yet.</td></tr>`;
  } else {
    body.innerHTML = recent.map(inv=>{
      const client = clients.find(c=>c.id===inv.clientId);
      const status = inv.status || 'unpaid';
      return `<tr>
        <td>${inv.invoiceId}</td>
        <td>${client ? client.name : '—'}</td>
        <td>${dmy(inv.date)}</td>
        <td>৳${fmt(inv.total)}</td>
        <td><span class="badge ${status}">${statusLabel[status]}</span></td>
      </tr>`;
    }).join('');
  }
}

/* ---------- clients ---------- */
function renderClients(){
  const clients = loadJSON(LS.clients, []);
  const q = (document.getElementById('clientSearch').value||'').toLowerCase();
  const filtered = clients.filter(c => (c.name+c.billedEntity+c.email).toLowerCase().includes(q));
  const body = document.getElementById('clientsBody');
  document.getElementById('clientsEmpty').style.display = filtered.length ? 'none' : 'block';
  body.innerHTML = filtered.map(c=>`
    <tr>
      <td><span class="client-code">${escapeHtml(c.clientCode||'—')}</span></td>
      <td><b>${escapeHtml(c.name)}</b></td>
      <td>${escapeHtml(c.billedEntity||'—')}</td>
      <td>${escapeHtml(c.email||'—')}</td>
      <td>${escapeHtml(c.phone||'—')}</td>
      <td>${(c.services||[]).map(s=>`<span class="tagpill">${escapeHtml(s)}</span>`).join('')}</td>
      <td class="row-actions">
        <button class="btn btn-outline" onclick="openClientModal('${c.id}')">Edit</button>
        <button class="btn btn-danger" onclick="deleteClient('${c.id}')">Delete</button>
      </td>
    </tr>
  `).join('');
}
function escapeHtml(s){ return String(s??'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

let returnToInvoiceFormAfterClient = false;
/* ---------- input suggestions (datalists), remembers what's been typed before ---------- */
function refreshSuggestionLists(){
  const invoices = loadJSON(LS.invoices, []);
  const clients = loadJSON(LS.clients, []);

  const projectNames = [...new Set(invoices.map(i=>i.projectName).filter(Boolean))];
  const billedEntities = [...new Set(clients.map(c=>c.billedEntity).filter(Boolean))];
  const serviceDescs = [...new Set(invoices.flatMap(i=>(i.services||[]).map(s=>s.desc)).filter(Boolean))];

  const fill = (id, values) => {
    const el = document.getElementById(id);
    if(el) el.innerHTML = values.map(v=>`<option value="${escapeHtml(v)}"></option>`).join('');
  };
  fill('dl-projectNames', projectNames);
  fill('dl-billedEntities', billedEntities);
  fill('dl-serviceDesc', serviceDescs);
}

function openClientModal(id, fromInvoice){
  returnToInvoiceFormAfterClient = !!fromInvoice;
  refreshSuggestionLists();
  document.getElementById('clientModalBg').classList.add('active');
  if(id){
    const c = loadJSON(LS.clients, []).find(c=>c.id===id);
    document.getElementById('clientModalTitle').textContent = 'Edit Client';
    document.getElementById('clientId').value = c.id;
    document.getElementById('clientName').value = c.name||'';
    document.getElementById('clientBilledEntity').value = c.billedEntity||'';
    document.getElementById('clientEmail').value = c.email||'';
    document.getElementById('clientPhone').value = c.phone||'';
    document.getElementById('clientAddress').value = c.address||'';
    document.getElementById('clientServices').value = (c.services||[]).join(', ');
  } else {
    document.getElementById('clientModalTitle').textContent = 'Add Client';
    ['clientId','clientName','clientBilledEntity','clientEmail','clientPhone','clientAddress','clientServices']
      .forEach(id=>document.getElementById(id).value='');
  }
}
function closeClientModal(){ document.getElementById('clientModalBg').classList.remove('active'); }
function saveClient(){
  const name = document.getElementById('clientName').value.trim();
  if(!name){ alert('Client name is required.'); return; }
  const clients = loadJSON(LS.clients, []);
  const id = document.getElementById('clientId').value;
  const data = {
    id: id || uid(),
    clientCode: id ? (clients.find(c=>c.id===id)?.clientCode || nextClientCode()) : nextClientCode(),
    name,
    billedEntity: document.getElementById('clientBilledEntity').value.trim(),
    email: document.getElementById('clientEmail').value.trim(),
    phone: document.getElementById('clientPhone').value.trim(),
    address: document.getElementById('clientAddress').value.trim(),
    services: document.getElementById('clientServices').value.split(',').map(s=>s.trim()).filter(Boolean)
  };
  if(id){
    const idx = clients.findIndex(c=>c.id===id);
    clients[idx] = data;
  } else {
    clients.push(data);
  }
  saveJSON(LS.clients, clients);
  closeClientModal();
  renderClients();
  if(returnToInvoiceFormAfterClient){
    populateClientDropdown();
    document.getElementById('invClientSelect').value = data.id;
    onInvoiceClientChange();
  }
}
function deleteClient(id){
  if(!confirm('Delete this client? Existing invoices for them will remain but show as unlinked.')) return;
  let clients = loadJSON(LS.clients, []);
  clients = clients.filter(c=>c.id!==id);
  saveJSON(LS.clients, clients);
  renderClients();
}

/* ---------- invoices: list ---------- */
function renderInvoices(){
  const invoices = loadJSON(LS.invoices, []);
  const clients = loadJSON(LS.clients, []);
  const q = (document.getElementById('invoiceSearch').value||'').toLowerCase();
  const filtered = invoices.filter(inv=>{
    const client = clients.find(c=>c.id===inv.clientId);
    const hay = (inv.invoiceId + ' ' + (client?client.name:'') + ' ' + (inv.projectName||'')).toLowerCase();
    return hay.includes(q);
  }).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
  const body = document.getElementById('invoicesBody');
  document.getElementById('invoicesEmpty').style.display = filtered.length ? 'none' : 'block';
  const statusLabel = {draft:'Draft', unpaid:'Unpaid', paid:'Paid'};
  body.innerHTML = filtered.map(inv=>{
    const client = clients.find(c=>c.id===inv.clientId);
    const status = inv.status || 'unpaid';
    return `<tr>
      <td>${inv.invoiceId}</td>
      <td>${client?escapeHtml(client.name):'<i>Deleted client</i>'}</td>
      <td>${escapeHtml(inv.projectName||'—')}</td>
      <td>${dmy(inv.date)}</td>
      <td>${status==='paid' && inv.paidDate ? dmy(inv.paidDate) : '—'}</td>
      <td>৳${fmt(inv.total)}</td>
      <td>
        <select class="status-select-sm" onchange="updateInvoiceStatus('${inv.id}', this.value)">
          <option value="draft" ${status==='draft'?'selected':''}>Draft</option>
          <option value="unpaid" ${status==='unpaid'?'selected':''}>Unpaid</option>
          <option value="paid" ${status==='paid'?'selected':''}>Paid</option>
        </select>
      </td>
      <td class="row-actions">
        <button class="btn btn-outline" onclick="viewInvoice('${inv.id}')">View</button>
        <button class="btn btn-outline" onclick="downloadInvoicePDF('${inv.id}')">Download PDF</button>
        <button class="btn btn-outline" onclick="emailInvoice('${inv.id}')">Email</button>
        <button class="btn btn-outline" onclick="editInvoice('${inv.id}')">Edit</button>
        <button class="btn btn-danger" onclick="deleteInvoice('${inv.id}')">Delete</button>
      </td>
    </tr>`;
  }).join('');
}
function updateInvoiceStatus(id, newStatus){
  const invoices = loadJSON(LS.invoices, []);
  const idx = invoices.findIndex(i=>i.id===id);
  if(idx>-1){
    invoices[idx].status = newStatus;
    if(newStatus==='paid' && !invoices[idx].paidDate){
      invoices[idx].paidDate = todayISO();
    }
    saveJSON(LS.invoices, invoices);
    renderInvoices();
  }
}
function deleteInvoice(id){
  if(!confirm('Delete this invoice? This cannot be undone.')) return;
  let invoices = loadJSON(LS.invoices, []);
  invoices = invoices.filter(i=>i.id!==id);
  saveJSON(LS.invoices, invoices);
  renderInvoices();
}

/* ---------- invoice form ---------- */
let editingInvoiceId = null;
function populateClientDropdown(){
  const clients = loadJSON(LS.clients, []);
  const sel = document.getElementById('invClientSelect');
  sel.innerHTML = '<option value="">— Select a client —</option>' +
    clients.map(c=>`<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
}
function onInvoiceClientChange(){ /* reserved for future auto-fill from client profile */ }

function onInvoiceStatusChange(){
  const status = document.getElementById('invStatus').value;
  const field = document.getElementById('invPaidDateField');
  const paidDateInput = document.getElementById('invPaidDate');
  if(status==='paid'){
    field.style.display = '';
    if(!paidDateInput.value) paidDateInput.value = todayISO();
  } else {
    field.style.display = 'none';
  }
}

function nextInvoiceId(){
  const d = new Date();
  const ymd = d.toISOString().slice(0,10).replace(/-/g,'');
  let seq = parseInt(localStorage.getItem(LS.seq) || '1000', 10) + 1;
  localStorage.setItem(LS.seq, String(seq));
  return `ADX-${ymd}-${seq}`;
}

function openInvoiceForm(){
  editingInvoiceId = null;
  const settings = loadJSON(LS.settings, {});
  showView('invoiceForm');
  refreshSuggestionLists();
  document.getElementById('invFormTitle').textContent = 'New Invoice';
  populateClientDropdown();
  document.getElementById('invClientSelect').value = '';
  document.getElementById('invDate').value = todayISO();
  document.getElementById('invId').value = nextInvoiceId();
  document.getElementById('invProjectName').value = '';
  document.getElementById('invFrom').value = todayISO();
  document.getElementById('invTo').value = todayISO();
  document.getElementById('invFxRate').value = settings.fxRate || 128;
  document.getElementById('invGatewayFee').value = settings.gatewayFee || 1.85;
  document.getElementById('invOtherCharges').value = 0;
  document.getElementById('invStatus').value = 'draft';
  document.getElementById('invPaidDate').value = '';
  onInvoiceStatusChange();
  document.getElementById('svcRows').innerHTML = '';
  addServiceRow();
  recalcInvoice();
}

function addServiceRow(desc, qty, rate){
  const tbody = document.getElementById('svcRows');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><input type="text" class="svc-desc" list="dl-serviceDesc" placeholder="e.g. Meta &amp; Instagram Campaign (15 Days)" value="${escapeHtml(desc||'')}"></td>
    <td><input type="number" step="1" class="svc-qty" value="${qty!=null?qty:1}" oninput="recalcInvoice()"></td>
    <td><input type="number" step="0.01" class="svc-rate" value="${rate!=null?rate:0}" oninput="recalcInvoice()"></td>
    <td class="svc-total">$0.00</td>
    <td><button class="svc-remove" onclick="removeServiceRow(this)">&times;</button></td>
  `;
  tbody.appendChild(row);
  recalcInvoice();
}
function removeServiceRow(btn){
  btn.closest('tr').remove();
  recalcInvoice();
}
function recalcInvoice(){
  const rows = document.querySelectorAll('#svcRows tr');
  let subUsd = 0;
  rows.forEach(row=>{
    const qty = parseFloat(row.querySelector('.svc-qty').value)||0;
    const rate = parseFloat(row.querySelector('.svc-rate').value)||0;
    const total = qty*rate;
    row.querySelector('.svc-total').textContent = '$'+fmt(total);
    subUsd += total;
  });
  const fx = parseFloat(document.getElementById('invFxRate').value)||0;
  const feePct = parseFloat(document.getElementById('invGatewayFee').value)||0;
  const other = parseFloat(document.getElementById('invOtherCharges').value)||0;
  const subBdt = subUsd * fx;
  const fee = subBdt * (feePct/100);
  const total = subBdt + fee + other;

  document.getElementById('calcSubUsd').textContent = '$'+fmt(subUsd);
  document.getElementById('calcSubBdt').textContent = '৳'+fmt(subBdt);
  document.getElementById('calcFee').textContent = '৳'+fmt(fee);
  document.getElementById('calcOther').textContent = '৳'+fmt(other);
  document.getElementById('calcTotal').textContent = '৳'+fmt(total);
  document.getElementById('calcWords').textContent = 'Amount in words: ' + numberToWords(total) + ' Taka Only';

  return {subUsd, subBdt, fee, other, total, feePct, fx};
}

function editInvoice(id){
  const inv = loadJSON(LS.invoices, []).find(i=>i.id===id);
  if(!inv) return;
  editingInvoiceId = id;
  showView('invoiceForm');
  refreshSuggestionLists();
  document.getElementById('invFormTitle').textContent = 'Edit Invoice';
  populateClientDropdown();
  document.getElementById('invClientSelect').value = inv.clientId||'';
  document.getElementById('invDate').value = inv.date;
  document.getElementById('invId').value = inv.invoiceId;
  document.getElementById('invProjectName').value = inv.projectName||'';
  document.getElementById('invFrom').value = inv.campaignFrom;
  document.getElementById('invTo').value = inv.campaignTo;
  document.getElementById('invFxRate').value = inv.fxRate;
  document.getElementById('invGatewayFee').value = inv.gatewayFeePct;
  document.getElementById('invOtherCharges').value = inv.otherCharges;
  document.getElementById('invStatus').value = inv.status || 'unpaid';
  document.getElementById('invPaidDate').value = inv.paidDate || '';
  onInvoiceStatusChange();
  document.getElementById('svcRows').innerHTML = '';
  inv.services.forEach(s=>addServiceRow(s.desc, s.qty, s.rate));
  recalcInvoice();
}

function saveInvoice(){
  const clientId = document.getElementById('invClientSelect').value;
  if(!clientId){ alert('Please select a client.'); return; }
  const rows = document.querySelectorAll('#svcRows tr');
  const services = Array.from(rows).map(row=>({
    desc: row.querySelector('.svc-desc').value.trim() || 'Service',
    qty: parseFloat(row.querySelector('.svc-qty').value)||0,
    rate: parseFloat(row.querySelector('.svc-rate').value)||0
  })).filter(s=>s.qty>0 || s.rate>0);
  if(services.length===0){ alert('Add at least one service line.'); return; }

  const calc = recalcInvoice();
  const invoices = loadJSON(LS.invoices, []);
  const status = document.getElementById('invStatus').value;
  const paidDateVal = document.getElementById('invPaidDate').value;
  const data = {
    id: editingInvoiceId || uid(),
    invoiceId: document.getElementById('invId').value,
    clientId,
    date: document.getElementById('invDate').value,
    projectName: document.getElementById('invProjectName').value.trim(),
    campaignFrom: document.getElementById('invFrom').value,
    campaignTo: document.getElementById('invTo').value,
    services,
    fxRate: calc.fx,
    gatewayFeePct: calc.feePct,
    otherCharges: calc.other,
    subtotalUsd: calc.subUsd,
    subtotalBdt: calc.subBdt,
    gatewayFeeAmt: calc.fee,
    total: calc.total,
    status,
    paidDate: status==='paid' ? (paidDateVal || todayISO()) : (paidDateVal || ''),
    createdAt: editingInvoiceId ? (invoices.find(i=>i.id===editingInvoiceId)?.createdAt || Date.now()) : Date.now()
  };
  if(editingInvoiceId){
    const idx = invoices.findIndex(i=>i.id===editingInvoiceId);
    invoices[idx] = data;
  } else {
    invoices.push(data);
  }
  saveJSON(LS.invoices, invoices);
  viewInvoice(data.id);
}

/* ---------- invoice sheet: shared builder (used by on-screen preview + PDF export) ---------- */
function buildInvoiceSheetHTML(inv, client, settings, logoSrc, idSuffix){
  const rowsHtml = inv.services.map(s=>`
    <tr>
      <td>${escapeHtml(s.desc)}</td>
      <td>${s.qty}</td>
      <td>$${fmt(s.rate)}</td>
      <td>$${fmt(s.qty*s.rate)}</td>
    </tr>
  `).join('');

  const status = inv.status || 'unpaid';
  const statusLabel = {draft:'DRAFT', unpaid:'UNPAID', paid:'PAID'}[status];
  const statusClass = {draft:'st-draft', unpaid:'st-unpaid', paid:'st-paid'}[status];
  const projectLine = inv.projectName ? `<p><b>Project:</b> ${escapeHtml(inv.projectName)}</p>` : '<p><b>Project:</b> —</p>';
  const clientCodeLine = client?.clientCode ? ` <span class="client-code">(Client ID: ${client.clientCode})</span>` : '';

  const seal = status==='paid'
    ? `<div class="inv-seal seal-paid"><div class="seal-word">PAID</div><div class="seal-date">${inv.paidDate?dmy(inv.paidDate):''}</div></div>`
    : status==='draft'
      ? `<div class="inv-seal seal-draft"><div class="seal-word">DRAFT</div></div>`
      : '';

  return `
    <div class="inv-topbar"></div>
    <div class="inv-head">
      <div class="inv-panel co-box">
        <div class="co-logo">
          <img src="${logoSrc}">
          <div>
            <div class="co-name">${escapeHtml(settings.companyName||'AdorVix')}</div>
            <div class="co-tag">${escapeHtml((settings.tagline||'').toUpperCase())}</div>
            <div class="co-contact">${escapeHtml(settings.email||'')}${settings.phone?' | '+escapeHtml(settings.phone):''}</div>
          </div>
        </div>
      </div>
      <div class="inv-panel id-box">
        <div class="id-row"><span>Invoice ID</span><b>${inv.invoiceId}</b></div>
        <div class="id-row"><span>Invoice Date</span><b>${dmy(inv.date)}</b></div>
        <div class="id-row"><span>Status</span><b class="${statusClass}">${statusLabel}</b></div>
        <div class="inv-barcode"><svg id="barcode-${idSuffix}"></svg></div>
      </div>
    </div>
    <div class="inv-two-col">
      <div class="inv-panel block">
        <h4>Billed To</h4>
        <p><b>${client?escapeHtml(client.name):'Deleted client'}</b>${clientCodeLine}</p>
        <p>Email: ${client?escapeHtml(client.email||'—'):'—'}</p>
        <p>Phone: ${client?escapeHtml(client.phone||'—'):'—'}</p>
        <p>Billed Entity: ${client?escapeHtml(client.billedEntity||'—'):'—'}</p>
        <p>${(client?.services||[]).map(s=>`<span class="tagpill">${escapeHtml(s)}</span>`).join('')}</p>
      </div>
      <div class="inv-panel block" style="min-width:220px;">
        <h4>Campaign Details</h4>
        ${projectLine}
        <p><b>Duration:</b> ${dmy(inv.campaignFrom)} &nbsp;→&nbsp; ${dmy(inv.campaignTo)}</p>
      </div>
    </div>
    <table class="inv-table">
      <thead><tr><th>Service Description</th><th>Qty/Days</th><th>Rate (USD)</th><th>Total (USD)</th></tr></thead>
      <tbody>${rowsHtml}</tbody>
    </table>
    <div class="inv-totals">
      <table>
        <tr><td>Subtotal (BDT)</td><td>৳${fmt(inv.subtotalBdt)}</td></tr>
        <tr><td>Gateway Fee (${fmt(inv.gatewayFeePct)}%)</td><td>৳${fmt(inv.gatewayFeeAmt)}</td></tr>
        <tr><td>Other Charges</td><td>৳${fmt(inv.otherCharges)}</td></tr>
        <tr class="grand"><td>Total (BDT)</td><td>৳${fmt(inv.total)}</td></tr>
      </table>
    </div>
    <div class="inv-words">Amount in Words: ${numberToWords(inv.total)} Taka Only</div>
    <div class="inv-panel inv-terms">
      <h4>Service Terms &amp; Execution Scope</h4>
      <p>Ad budget and platform spend are exclusive of agency management fees and paid directly via client card or a pre-funded account. Social and organic growth results depend on audience targeting, creative resonance, and platform algorithms and are not guaranteed. SEO and Google Business Profile optimization are evaluated over a minimum 30–60 day performance window. Campaign adjustments require 24–48 hours notice.</p>
    </div>
    <div class="inv-sign">
      <div>AdorVix Representative</div>
      <div>Authorized Client Signature</div>
      <div class="inv-verify">
        ${seal}
        <div id="qrcode-${idSuffix}"></div>
        <span>Scan to verify invoice</span>
      </div>
    </div>
  `;
}

/* Renders the barcode + QR code into a container that already has the
   builder's HTML inserted. idSuffix must match what was passed to the builder. */
function renderInvoiceExtras(rootEl, inv, idSuffix){
  const status = inv.status || 'unpaid';
  try{
    const barcodeEl = rootEl.querySelector(`#barcode-${idSuffix}`);
    if(barcodeEl && typeof JsBarcode !== 'undefined'){
      JsBarcode(barcodeEl, inv.invoiceId, {
        format:'CODE128', displayValue:true, fontSize:11, height:34, margin:0, width:1.4
      });
    }
  }catch(e){ console.warn('Barcode render failed', e); }
  try{
    const qrEl = rootEl.querySelector(`#qrcode-${idSuffix}`);
    if(qrEl && typeof QRCode !== 'undefined'){
      qrEl.innerHTML = '';
      const qrText = `AdorVix Invoice ${inv.invoiceId}${inv.projectName? ' | Project: '+inv.projectName:''} | Total: BDT ${fmt(inv.total)} | Status: ${status.toUpperCase()}`;
      new QRCode(qrEl, { text: qrText, width: 76, height: 76, correctLevel: QRCode.CorrectLevel.M });
    }
  }catch(e){ console.warn('QR render failed', e); }
}

/* ---------- invoice preview ---------- */
let currentPreviewInvoiceId = null;
function viewInvoice(id){
  const inv = loadJSON(LS.invoices, []).find(i=>i.id===id);
  if(!inv) return;
  const client = loadJSON(LS.clients, []).find(c=>c.id===inv.clientId);
  const settings = loadJSON(LS.settings, {});
  const logoSrc = INVOICE_LOGO_SRC;
  const status = inv.status || 'unpaid';

  currentPreviewInvoiceId = id;
  const sheet = document.getElementById('invoicePreviewSheet');
  sheet.innerHTML = buildInvoiceSheetHTML(inv, client, settings, logoSrc, 'preview');
  renderInvoiceExtras(sheet, inv, 'preview');

  document.getElementById('previewStatusSelect').innerHTML = `
    <option value="draft" ${status==='draft'?'selected':''}>Draft</option>
    <option value="unpaid" ${status==='unpaid'?'selected':''}>Unpaid</option>
    <option value="paid" ${status==='paid'?'selected':''}>Paid</option>
  `;
  document.getElementById('previewStatusSelect').dataset.invId = inv.id;

  const paidDateWrap = document.getElementById('previewPaidDateWrap');
  const paidDateInput = document.getElementById('previewPaidDate');
  if(status==='paid'){
    paidDateWrap.style.display = 'flex';
    paidDateInput.value = inv.paidDate || todayISO();
  } else {
    paidDateWrap.style.display = 'none';
  }

  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-invoicePreview').classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
}
function togglePreviewStatus(){
  const sel = document.getElementById('previewStatusSelect');
  const id = sel.dataset.invId;
  const invoices = loadJSON(LS.invoices, []);
  const idx = invoices.findIndex(i=>i.id===id);
  if(idx>-1){
    invoices[idx].status = sel.value;
    if(sel.value==='paid' && !invoices[idx].paidDate) invoices[idx].paidDate = todayISO();
    saveJSON(LS.invoices, invoices);
    viewInvoice(id); // re-render so the PAID/DRAFT stamp, dates, and QR text stay in sync
  }
}
function updatePreviewPaidDate(){
  const id = document.getElementById('previewStatusSelect').dataset.invId;
  const val = document.getElementById('previewPaidDate').value;
  const invoices = loadJSON(LS.invoices, []);
  const idx = invoices.findIndex(i=>i.id===id);
  if(idx>-1){
    invoices[idx].paidDate = val;
    saveJSON(LS.invoices, invoices);
    viewInvoice(id);
  }
}

/* ---------- PDF export (real downloadable file, no browser print dialog) ---------- */
function _pdfOptionsFor(invoiceId){
  return {
    margin: 14,
    filename: `${invoiceId}.pdf`,
    image: { type:'jpeg', quality:0.98 },
    html2canvas: { scale:2, useCORS:true, backgroundColor:'#ffffff' },
    jsPDF: { unit:'pt', format:'a4', orientation:'portrait' },
    pagebreak: { mode: ['css','avoid-all','legacy'], avoid: ['tr','.inv-sign','.inv-terms','.inv-totals'] }
  };
}
function downloadCurrentPreviewPDF(){
  if(!currentPreviewInvoiceId) return;
  downloadInvoicePDF(currentPreviewInvoiceId);
}
function downloadInvoicePDF(id, onDone){
  const inv = loadJSON(LS.invoices, []).find(i=>i.id===id);
  if(!inv) return;
  if(typeof html2pdf === 'undefined'){
    alert('The PDF library did not load (check your internet connection) — please try again.');
    return;
  }
  const client = loadJSON(LS.clients, []).find(c=>c.id===inv.clientId);
  const settings = loadJSON(LS.settings, {});
  const logoSrc = INVOICE_LOGO_SRC;
  const suffix = 'pdf'+id;

  const holder = document.createElement('div');
  holder.className = 'pdf-render-holder';
  holder.innerHTML = `<div class="inv-sheet">${buildInvoiceSheetHTML(inv, client, settings, logoSrc, suffix)}</div>`;
  document.body.appendChild(holder);
  renderInvoiceExtras(holder, inv, suffix);

  // give the barcode/QR canvases a frame to paint before rasterizing
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      html2pdf().set(_pdfOptionsFor(inv.invoiceId)).from(holder.querySelector('.inv-sheet')).save()
        .then(()=>{ holder.remove(); if(typeof onDone==='function') onDone(); })
        .catch((e)=>{ console.error('PDF export failed', e); holder.remove(); alert('Could not generate the PDF. Please try again.'); });
    });
  });
}

/* ---------- email an invoice to the client ----------
   Browsers cannot attach a file to an email automatically for security
   reasons — there is no workaround for that without a backend or a paid
   email-sending API. What this does instead: downloads the PDF (so it's
   sitting in the person's Downloads folder), then opens their email app
   pre-addressed and pre-filled, with a clear reminder to attach it. */
function emailInvoice(id){
  const inv = loadJSON(LS.invoices, []).find(i=>i.id===id);
  if(!inv) return;
  const client = loadJSON(LS.clients, []).find(c=>c.id===inv.clientId);
  if(!client || !client.email){
    alert('This client has no email address on file. Add one under Clients, then try again.');
    return;
  }
  const settings = loadJSON(LS.settings, {});
  downloadInvoicePDF(id, ()=>{
    const subject = `Invoice ${inv.invoiceId} from ${settings.companyName||'AdorVix'}`;
    const bodyLines = [
      `Hi ${client.name},`,
      '',
      `Please find attached invoice ${inv.invoiceId}${inv.projectName ? ' for '+inv.projectName : ''}, totaling BDT ${fmt(inv.total)}.`,
      '',
      `(The PDF was just downloaded to your computer — please attach it to this email before sending; browsers can't attach files automatically.)`,
      '',
      'Thank you,',
      settings.companyName || 'AdorVix'
    ];
    const mailto = `mailto:${encodeURIComponent(client.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
  });
}

/* ---------- settings ---------- */
function loadSettingsForm(){
  const s = loadJSON(LS.settings, {});
  document.getElementById('setCompanyName').value = s.companyName||'';
  document.getElementById('setTagline').value = s.tagline||'';
  document.getElementById('setEmail').value = s.email||'';
  document.getElementById('setPhone').value = s.phone||'';
  document.getElementById('setFxRate').value = s.fxRate||0;
  document.getElementById('setGatewayFee').value = s.gatewayFee||0;
}
function saveCompanySettings(){
  const s = loadJSON(LS.settings, {});
  s.companyName = document.getElementById('setCompanyName').value.trim();
  s.tagline = document.getElementById('setTagline').value.trim();
  s.email = document.getElementById('setEmail').value.trim();
  s.phone = document.getElementById('setPhone').value.trim();
  saveJSON(LS.settings, s);
  alert('Company details saved.');
}
function saveInvoiceDefaults(){
  const s = loadJSON(LS.settings, {});
  s.fxRate = parseFloat(document.getElementById('setFxRate').value)||0;
  s.gatewayFee = parseFloat(document.getElementById('setGatewayFee').value)||0;
  saveJSON(LS.settings, s);
  alert('Invoice defaults saved.');
}
async function saveCredentials(){
  const u = document.getElementById('setNewUser').value.trim();
  const p = document.getElementById('setNewPass').value;
  if(!u || !p){ alert('Please fill in both username and password.'); return; }
  const hash = await sha256(p);
  saveJSON(LS.auth, {username:u, passHash:hash});
  document.getElementById('setNewUser').value='';
  document.getElementById('setNewPass').value='';
  document.getElementById('sbUserName').textContent = u;
  const msg = document.getElementById('credMsg');
  msg.style.display='block';
  setTimeout(()=>msg.style.display='none', 2500);
}

/* ---------- backup / restore ---------- */
function exportData(){
  const backup = {
    clients: loadJSON(LS.clients, []),
    invoices: loadJSON(LS.invoices, []),
    settings: loadJSON(LS.settings, {}),
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(backup,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `adorvix-backup-${todayISO()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
function importData(evt){
  const file = evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(){
    try{
      const data = JSON.parse(reader.result);
      if(data.clients) saveJSON(LS.clients, data.clients);
      if(data.invoices) saveJSON(LS.invoices, data.invoices);
      if(data.settings) saveJSON(LS.settings, data.settings);
      alert('Backup imported successfully.');
      renderDashboard();
    }catch(e){
      alert('Could not read that file. Please choose a valid AdorVix backup JSON.');
    }
  };
  reader.readAsText(file);
  evt.target.value = '';
}
function wipeAllData(){
  if(!confirm('This will permanently erase all clients and invoices in this browser. Continue?')) return;
  if(!confirm('Are you absolutely sure? This cannot be undone.')) return;
  localStorage.removeItem(LS.clients);
  localStorage.removeItem(LS.invoices);
  localStorage.setItem(LS.seq, '1000');
  ensureDefaults();
  renderDashboard();
  showView('dashboard');
}

/* ---------- analytics ---------- */
let _charts = {};
function destroyChart(key){ if(_charts[key]){ _charts[key].destroy(); delete _charts[key]; } }
const CHART_COLORS = ['#2F6FED','#6FA84B','#F5A623','#7fb1ff','#0B1F3A','#B33A2A','#8B93A1','#1F4FBE'];

function renderAnalytics(){
  const invoices = loadJSON(LS.invoices, []);
  const clients = loadJSON(LS.clients, []);

  const issued = invoices.filter(i=>i.status!=='draft'); // drafts aren't counted as issued
  const totalInvoiced = issued.reduce((s,i)=>s+i.total,0);
  const totalCollected = invoices.filter(i=>i.status==='paid').reduce((s,i)=>s+i.total,0);
  const avgInvoice = issued.length ? totalInvoiced/issued.length : 0;
  const collectionRate = totalInvoiced ? (totalCollected/totalInvoiced*100) : 0;

  document.getElementById('anTotalInvoiced').textContent = '৳'+fmt(totalInvoiced);
  document.getElementById('anTotalCollected').textContent = '৳'+fmt(totalCollected);
  document.getElementById('anAvgInvoice').textContent = '৳'+fmt(avgInvoice);
  document.getElementById('anCollectionRate').textContent = fmt(collectionRate)+'%';

  if(typeof Chart === 'undefined'){
    // Chart.js failed to load (e.g. offline) — show numbers only, skip charts gracefully.
    return;
  }

  /* Revenue by month */
  const monthMap = {};
  invoices.forEach(inv=>{
    if(!inv.date) return;
    const key = inv.date.slice(0,7); // YYYY-MM
    monthMap[key] = (monthMap[key]||0) + inv.total;
  });
  const months = Object.keys(monthMap).sort();
  destroyChart('revenue');
  _charts.revenue = new Chart(document.getElementById('chartRevenue'), {
    type: 'line',
    data: {
      labels: months.map(m=>{ const [y,mo]=m.split('-'); return new Date(y,mo-1).toLocaleString('default',{month:'short',year:'2-digit'}); }),
      datasets: [{ label:'Revenue (BDT)', data: months.map(m=>monthMap[m]), borderColor:'#2F6FED', backgroundColor:'rgba(47,111,237,.12)', fill:true, tension:.3 }]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ y:{ beginAtZero:true } } }
  });

  /* Paid vs unpaid vs draft */
  const paidCount = invoices.filter(i=>i.status==='paid').length;
  const unpaidCount = invoices.filter(i=>i.status==='unpaid').length;
  const draftCount = invoices.filter(i=>i.status==='draft').length;
  destroyChart('status');
  _charts.status = new Chart(document.getElementById('chartStatus'), {
    type: 'doughnut',
    data: { labels:['Paid','Unpaid','Draft'], datasets:[{ data:[paidCount,unpaidCount,draftCount], backgroundColor:['#6FA84B','#F5A623','#9AA2B1'] }] },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}} }
  });

  /* Top clients by revenue */
  const clientRevenue = {};
  invoices.forEach(inv=>{
    const c = clients.find(c=>c.id===inv.clientId);
    const name = c ? c.name : 'Unknown';
    clientRevenue[name] = (clientRevenue[name]||0) + inv.total;
  });
  const topClients = Object.entries(clientRevenue).sort((a,b)=>b[1]-a[1]).slice(0,6);
  destroyChart('clients');
  _charts.clients = new Chart(document.getElementById('chartClients'), {
    type: 'bar',
    data: { labels: topClients.map(c=>c[0]), datasets:[{ label:'Revenue (BDT)', data: topClients.map(c=>c[1]), backgroundColor:'#2F6FED', borderRadius:5 }] },
    options: { responsive:true, maintainAspectRatio:false, indexAxis:'y', plugins:{legend:{display:false}}, scales:{ x:{ beginAtZero:true } } }
  });

  /* Most billed services (by line-item description) */
  const svcCount = {};
  invoices.forEach(inv=>{
    (inv.services||[]).forEach(s=>{
      svcCount[s.desc] = (svcCount[s.desc]||0) + 1;
    });
  });
  const topServices = Object.entries(svcCount).sort((a,b)=>b[1]-a[1]).slice(0,6);
  destroyChart('services');
  _charts.services = new Chart(document.getElementById('chartServices'), {
    type: 'bar',
    data: { labels: topServices.map(s=>s[0]), datasets:[{ label:'Times billed', data: topServices.map(s=>s[1]), backgroundColor: CHART_COLORS, borderRadius:5 }] },
    options: { responsive:true, maintainAspectRatio:false, indexAxis:'y', plugins:{legend:{display:false}}, scales:{ x:{ beginAtZero:true, ticks:{stepSize:1} } } }
  });
}

/* ---------- boot ---------- */
function boot(){
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  const auth = loadJSON(LS.auth, {});
  document.getElementById('sbUserName').textContent = auth.username || 'admin';
  showView('dashboard');
}

ensureDefaults();
if(sessionStorage.getItem(LS.session) === '1'){
  boot();
}
