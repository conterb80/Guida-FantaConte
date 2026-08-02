const teams=['Atalanta','Bologna','Cagliari','Como','Fiorentina','Frosinone','Genoa','Inter','Juventus','Lazio','Lecce','Milan','Monza','Napoli','Parma','Roma','Sassuolo','Torino','Udinese','Venezia'];
const blank=()=>({coach:'',module:'',formation:'',penalties:'',freeKicks:'',corners:'',arrivals:'',departures:'',talks:'',recommended:'',bets:'',young:'',reliable:'',avoid:'',watch:'',notes:'',updated:'Da compilare'});
const base=Object.fromEntries(teams.map(t=>[t,blank()]));
const editorialDefaults={
  Atalanta:{
    coach:'Maurizio Sarri',module:'4-3-3',
    formation:'Carnesecchi; Bellanova, Scalvini, Hien, Ahanor; Éderson, Gaetano, Pašalić; De Ketelaere, Scamacca, Raspadori.\nAlternative da seguire: Sportiello, Kossounou, Djimsiti, Zappacosta, Samardžić.',
    penalties:'Scamacca\nDe Ketelaere\nRaspadori',
    freeKicks:'Raspadori\nSamardžić\nDe Ketelaere',
    corners:'Raspadori\nSamardžić\nZappacosta',
    arrivals:'Gianluca Gaetano\nFrancesco Olivieri\nDiego Perillo\nLjubo Puljić',
    departures:'Marco Palestra\nBen Godfrey',
    talks:'Giorgio Scalvini — seguito in Premier League\nÉderson — situazione da monitorare fino a fine mercato',
    recommended:'Charles De Ketelaere\nGianluca Scamacca',
    bets:'Gianluca Gaetano\nLazar Samardžić',
    young:'Honest Ahanor\nLjubo Puljić',
    reliable:'Marten de Roon\nMario Pašalić',
    watch:'Giacomo Raspadori\nGiorgio Scalvini',
    avoid:'',
    notes:'Prima lettura RC3: il passaggio al 4-3-3 di Sarri può cambiare gerarchie e bonus. Verificare titolari, piazzati e mercato prima dell’asta.',
    updated:'Aggiornata 2 agosto 2026',source:'Scheda editoriale RC3'
  }
};
let data=JSON.parse(localStorage.getItem('gac-data')||'null')||base;
for(const t of teams){
  const current=data[t]||{};
  const defaults=editorialDefaults[t]||{};
  data[t]={...blank(),...defaults,...current};
}
persist();

const grid=document.querySelector('#teamGrid');
const modal=document.querySelector('#modal');
const view=document.querySelector('#teamView');
const esc=(v='')=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const lines=(v='')=>String(v).split('\n').map(x=>x.trim()).filter(Boolean);

function renderTeams(q=''){
  grid.innerHTML='';
  teams.filter(t=>t.toLowerCase().includes(q.toLowerCase())).forEach(t=>{
    const d=data[t];
    const filled=[d.formation,d.arrivals,d.recommended,d.bets,d.young,d.watch].filter(Boolean).length;
    const b=document.createElement('button');
    b.className='team';
    b.innerHTML=`<div class="teamTop"><strong>${t}</strong><span class="completion">${filled}/6</span></div><small>${esc(d.updated||'Da compilare')}</small><div class="teamBadges">${d.arrivals?'<i>Mercato</i>':''}${d.watch?'<i>Obiettivi</i>':''}${d.formation?'<i>Formazione</i>':''}</div>`;
    b.onclick=()=>openTeam(t);
    grid.appendChild(b);
  });
}

function openTeam(t){
  const d=data[t];
  view.innerHTML=`
    <div class="teamTitle"><small>SCHEDA SQUADRA • RC3</small><h2>${t}</h2><p>Compila o correggi ciò che ti serve: ogni modifica resta salvata sul dispositivo.</p>${d.source?`<div class="sourceNote">● ${esc(d.source)} · ${esc(d.updated)}</div>`:''}</div>
    <div class="fields">
      <section class="formSection"><h3>Assetto squadra</h3>
        <div class="row2"><label><span>Allenatore</span><input id="coach" value="${esc(d.coach)}"></label><label><span>Modulo</span><input id="module" value="${esc(d.module)}"></label></div>
        <label><span>Probabile formazione / gerarchie</span><textarea id="formation" rows="5">${esc(d.formation)}</textarea></label>
      </section>
      <section class="formSection"><h3>Piazzati</h3>
        <div class="row3"><label><span>Rigoristi</span><textarea id="penalties">${esc(d.penalties)}</textarea></label><label><span>Punizioni</span><textarea id="freeKicks">${esc(d.freeKicks)}</textarea></label><label><span>Calci d'angolo</span><textarea id="corners">${esc(d.corners)}</textarea></label></div>
      </section>
      <section class="formSection"><h3>Mercato</h3>
        <div class="row2"><label><span>Acquisti ufficiali</span><textarea id="arrivals" placeholder="Un nome per riga">${esc(d.arrivals)}</textarea></label><label><span>Cessioni ufficiali</span><textarea id="departures" placeholder="Un nome per riga">${esc(d.departures)}</textarea></label></div>
        <label><span>Trattative / possibili movimenti</span><textarea id="talks" placeholder="Un nome o una nota per riga">${esc(d.talks)}</textarea></label>
      </section>
      <section class="formSection"><h3>Valutazioni Conte</h3>
        <div class="row2"><label class="tagField recommended"><span>⭐ Consigliati</span><textarea id="recommended" placeholder="Un nome per riga">${esc(d.recommended)}</textarea></label><label class="tagField bet"><span>💎 Scommesse</span><textarea id="bets" placeholder="Un nome per riga">${esc(d.bets)}</textarea></label></div>
        <div class="row2"><label class="tagField young"><span>👶 Giovani</span><textarea id="young" placeholder="Un nome per riga">${esc(d.young)}</textarea></label><label class="tagField reliable"><span>🛡️ Affidabili</span><textarea id="reliable" placeholder="Un nome per riga">${esc(d.reliable)}</textarea></label></div>
        <div class="row2"><label class="tagField watch"><span>👀 Osservati / obiettivi</span><textarea id="watch" placeholder="Un nome per riga">${esc(d.watch)}</textarea></label><label class="tagField avoid"><span>🚫 Da evitare</span><textarea id="avoid" placeholder="Un nome per riga">${esc(d.avoid)}</textarea></label></div>
      </section>
      <section class="formSection"><h3>Note personali</h3><label><span>Note Conte</span><textarea id="notes" rows="4">${esc(d.notes)}</textarea></label></section>
      <button class="save">Salva scheda ${t}</button>
    </div>`;
  modal.classList.remove('hidden');
  document.body.classList.add('locked');
  view.querySelector('.save').onclick=()=>saveTeam(t);
}

function saveTeam(t){
  ['coach','module','formation','penalties','freeKicks','corners','arrivals','departures','talks','recommended','bets','young','reliable','avoid','watch','notes'].forEach(k=>data[t][k]=document.querySelector('#'+k).value.trim());
  data[t].updated='Aggiornata oggi';
  persist(); closeModal(); refreshAll();
}
function persist(){localStorage.setItem('gac-data',JSON.stringify(data))}
function closeModal(){modal.classList.add('hidden');document.body.classList.remove('locked')}

const categoryMeta={
  recommended:['⭐','Consigliato'],bet:['💎','Scommessa'],young:['👶','Giovane'],reliable:['🛡️','Affidabile'],watch:['👀','Osservato'],avoid:['🚫','Da evitare']
};
function strategyItems(){
  const items=[];
  const map={recommended:'recommended',bets:'bet',young:'young',reliable:'reliable',watch:'watch',avoid:'avoid'};
  teams.forEach(team=>Object.entries(map).forEach(([field,type])=>lines(data[team][field]).forEach(player=>items.push({player,team,type}))));
  return items;
}
function renderStrategy(){
  const box=document.querySelector('#strategyList');
  const filter=document.querySelector('#strategyFilter').value;
  const all=strategyItems();
  const objectiveCount=all.filter(x=>['recommended','bet','young','watch'].includes(x.type)).length;
  document.querySelector('#watchCount').textContent=objectiveCount;
  const items=filter==='all'?all:all.filter(x=>x.type===filter);
  box.innerHTML=items.length?items.map(x=>{const [icon,label]=categoryMeta[x.type];return `<button class="strategyItem" onclick="openTeam('${x.team.replaceAll("'","\\'")}')"><span class="strategyIcon">${icon}</span><span><b>${esc(x.player)}</b><small>${x.team}</small></span><em class="badge ${x.type}">${label}</em></button>`}).join(''):`<div class="empty"><strong>Nessun giocatore in questa categoria</strong><p>Apri una squadra e inserisci i nomi nelle valutazioni personali.</p></div>`;
}

function marketItems(){
  const items=[];
  teams.forEach(team=>{
    lines(data[team].arrivals).forEach(name=>items.push({team,name,type:'arrival',status:'official'}));
    lines(data[team].departures).forEach(name=>items.push({team,name,type:'departure',status:'official'}));
    lines(data[team].talks).forEach(name=>items.push({team,name,type:'talk',status:'talk'}));
  });
  return items;
}
function renderMarket(){
  const box=document.querySelector('#marketList');
  const filter=document.querySelector('#marketFilter').value;
  const all=marketItems();
  document.querySelector('#marketCount').textContent=all.length;
  const items=filter==='all'?all:all.filter(x=>x.status===filter);
  const meta={arrival:['↘','Acquisto'],departure:['↗','Cessione'],talk:['…','Trattativa']};
  box.innerHTML=items.length?items.map(x=>{const [icon,label]=meta[x.type];return `<button class="marketItem" onclick="openTeam('${x.team.replaceAll("'","\\'")}')"><span class="marketIcon ${x.type}">${icon}</span><span><b>${esc(x.name)}</b><small>${x.team} • ${label}</small></span><em class="status ${x.status}">${x.status==='official'?'Ufficiale':'Trattativa'}</em></button>`}).join(''):`<div class="empty"><strong>Nessun movimento inserito</strong><p>Apri una squadra e compila acquisti, cessioni o trattative.</p></div>`;
}

function refreshAll(){renderTeams(document.querySelector('#search').value);renderStrategy();renderMarket()}

document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.tab,.panel').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');document.querySelector('#'+b.dataset.tab).classList.add('active');
  if(b.dataset.tab==='strategy')renderStrategy();if(b.dataset.tab==='market')renderMarket();
});
document.querySelector('.close').onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.querySelector('#search').oninput=e=>renderTeams(e.target.value);
document.querySelector('#strategyFilter').onchange=renderStrategy;
document.querySelector('#marketFilter').onchange=renderMarket;

const fi=document.querySelector('#fileInput');
document.querySelector('#refreshBtn').onclick=()=>fi.click();

document.querySelector('#exportBtn').onclick=()=>{
  const payload={app:'Guida Asta Conte',version:'RC3',exportedAt:new Date().toISOString(),teams:data};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Guida-Asta-Conte-backup-RC3.json';a.click();URL.revokeObjectURL(a.href);
};
fi.onchange=async()=>{
  if(!fi.files[0])return;
  try{
    const incoming=JSON.parse(await fi.files[0].text());let changed=0;
    Object.entries(incoming.teams||incoming).forEach(([t,v])=>{
      if(data[t]&&v&&typeof v==='object'){
        const personal={recommended:data[t].recommended,bets:data[t].bets,young:data[t].young,reliable:data[t].reliable,avoid:data[t].avoid,watch:data[t].watch,notes:data[t].notes};
        data[t]={...blank(),...data[t],...v,...personal,updated:'Rosa importata oggi'};changed++;
      }
    });
    persist();refreshAll();alert(`Aggiornate ${changed} squadre. Le tue valutazioni personali sono state conservate.`);
  }catch(e){alert('File non valido. Usa il formato JSON previsto.')}fi.value='';
};

refreshAll();
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
