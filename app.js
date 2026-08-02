const teams=['Atalanta','Bologna','Cagliari','Como','Fiorentina','Frosinone','Genoa','Inter','Juventus','Lazio','Lecce','Milan','Monza','Napoli','Parma','Roma','Sassuolo','Torino','Udinese','Venezia'];
const blank=()=>({coach:'',module:'',formation:'',lineup:[],roster:[],penalties:'',freeKicks:'',corners:'',arrivals:'',departures:'',talks:'',recommended:'',bets:'',young:'',reliable:'',avoid:'',watch:'',notes:'',updated:'Da compilare'});
const base=Object.fromEntries(teams.map(t=>[t,blank()]));
const DATA_VERSION=7;
const editorialDefaults={
  Atalanta:{
    coach:'Maurizio Sarri',module:'4-3-3',
    formation:'Carnesecchi; Bellanova, Scalvini, Hien, Ahanor; Éderson, Gaetano, Pašalić; De Ketelaere, Scamacca, Raspadori',
    lineup:[
      {name:'Marco Carnesecchi',short:'Carnesecchi',pos:'POR'},
      {name:'Raoul Bellanova',short:'Bellanova',pos:'TD'},
      {name:'Giorgio Scalvini',short:'Scalvini',pos:'DC'},
      {name:'Isak Hien',short:'Hien',pos:'DC'},
      {name:'Honest Ahanor',short:'Ahanor',pos:'TS'},
      {name:'Éderson',short:'Éderson',pos:'CC'},
      {name:'Gianluca Gaetano',short:'Gaetano',pos:'CC'},
      {name:'Mario Pašalić',short:'Pašalić',pos:'CC'},
      {name:'Charles De Ketelaere',short:'De Ketelaere',pos:'AD'},
      {name:'Gianluca Scamacca',short:'Scamacca',pos:'PC'},
      {name:'Giacomo Raspadori',short:'Raspadori',pos:'AS'}
    ],
    roster:[
      {name:'Marco Carnesecchi',role:'Portiere',status:'Titolare',tags:['Top reparto']},
      {name:'Marco Sportiello',role:'Portiere',status:'Riserva',tags:['Affidabile']},
      {name:'Paolo Vismara',role:'Portiere',status:'Gerarchia aperta',tags:['Giovane']},
      {name:'Mattia Sonzogni',role:'Portiere',status:'Aggregato',tags:['Giovane']},
      {name:'Raoul Bellanova',role:'Difensore',status:'Titolare',tags:['Bonus','Da comprare']},
      {name:'Giorgio Scalvini',role:'Difensore',status:'Titolare',tags:['Top','Osservato']},
      {name:'Isak Hien',role:'Difensore',status:'Titolare',tags:['Affidabile']},
      {name:'Honest Ahanor',role:'Difensore',status:'Titolare',tags:['Giovane','Scommessa']},
      {name:'Odilon Kossounou',role:'Difensore',status:'Ballottaggio',tags:['Affidabile']},
      {name:'Berat Djimsiti',role:'Difensore',status:'Ballottaggio',tags:['Affidabile']},
      {name:'Davide Zappacosta',role:'Difensore',status:'Ballottaggio',tags:['Bonus']},
      {name:'Sead Kolašinac',role:'Difensore',status:'Da valutare',tags:['Esperienza']},
      {name:'Mitchel Bakker',role:'Difensore',status:'In rosa',tags:['Da seguire']},
      {name:'Giovanni Bonfanti',role:'Difensore',status:'In rosa',tags:['Giovane']},
      {name:'Lorenzo Bernasconi',role:'Difensore',status:'Aggregato',tags:['Giovane']},
      {name:'Giorgio Cittadini',role:'Difensore',status:'Aggregato',tags:['Giovane']},
      {name:'Ljubo Puljić',role:'Difensore',status:'Aggregato',tags:['Giovane']},
      {name:'Éderson',role:'Centrocampista',status:'Titolare',tags:['Top','Da comprare']},
      {name:'Gianluca Gaetano',role:'Centrocampista',status:'Titolare',tags:['Nuovo acquisto','Scommessa']},
      {name:'Mario Pašalić',role:'Centrocampista',status:'Titolare',tags:['Bonus','Affidabile']},
      {name:'Marten de Roon',role:'Centrocampista',status:'Ballottaggio',tags:['Affidabile']},
      {name:'Lazar Samardžić',role:'Centrocampista',status:'Ballottaggio',tags:['Scommessa','Piazzati']},
      {name:'Ibrahim Sulemana',role:'Centrocampista',status:'In rosa',tags:['Da seguire']},
      {name:'Nicola Zalewski',role:'Centrocampista',status:'In rosa',tags:['Jolly']},
      {name:'Samuel Giovane',role:'Centrocampista',status:'Aggregato',tags:['Giovane']},
      {name:'Sergej Levak',role:'Centrocampista',status:'Aggregato',tags:['Giovane','Scommessa']},
      {name:'Charles De Ketelaere',role:'Attaccante',status:'Titolare',tags:['Top','Da comprare']},
      {name:'Gianluca Scamacca',role:'Attaccante',status:'Titolare',tags:['Top','Rigorista']},
      {name:'Giacomo Raspadori',role:'Attaccante',status:'Titolare',tags:['Piazzati','Osservato']},
      {name:'Nikola Krstović',role:'Attaccante',status:'Ballottaggio',tags:['Da seguire']},
      {name:'Daniel Maldini',role:'Attaccante',status:'In rosa',tags:['Da valutare']},
      {name:'El Bilal Touré',role:'Attaccante',status:'In rosa',tags:['Da valutare']},
      {name:'Dominic Vavassori',role:'Attaccante',status:'Aggregato',tags:['Giovane']},
      {name:'Vanja Vlahović',role:'Attaccante',status:'Aggregato',tags:['Giovane']}
    ],
    penalties:'Scamacca\nSamardžić\nDe Ketelaere',
    freeKicks:'Raspadori\nSamardžić\nDe Ketelaere',
    corners:'Raspadori\nSamardžić\nZappacosta',
    arrivals:'Gianluca Gaetano',
    departures:'Marco Palestra\nBen Godfrey',
    talks:'Mercato ancora aperto: verificare uscite e nuovi innesti prima dell’asta',
    recommended:'Charles De Ketelaere\nGianluca Scamacca\nÉderson',
    bets:'Gianluca Gaetano\nLazar Samardžić\nHonest Ahanor',
    young:'Honest Ahanor\nSergej Levak\nLjubo Puljić',
    reliable:'Marten de Roon\nMario Pašalić\nIsak Hien',
    watch:'Giacomo Raspadori\nGiorgio Scalvini\nRaoul Bellanova',
    avoid:'',
    notes:'Scheda test: rosa provvisoria di preparazione estiva. Aggiornare titolarità, mercato e disponibilità prima dell’asta.',
    updated:'Aggiornata 2 agosto 2026',source:'Scheda editoriale test • rosa provvisoria'
  }
};
let data=JSON.parse(localStorage.getItem('gac-data')||'null')||base;
const storedVersion=Number(localStorage.getItem('gac-data-version')||0);
for(const t of teams){
  const current=data[t]||{};
  const defaults=editorialDefaults[t]||{};
  const merged={...blank(),...current};
  if(t==='Atalanta'){
    const personalFields=['recommended','bets','young','reliable','avoid','watch','notes'];
    const personal=Object.fromEntries(personalFields.map(k=>[k,current[k]||defaults[k]||'']));
    const coreFields=['coach','module','formation','penalties','freeKicks','corners','arrivals','departures','talks'];
    const hasEditorialData=coreFields.some(k=>String(current[k]||'').trim());
    if(storedVersion<DATA_VERSION || !hasEditorialData){
      data[t]={...blank(),...defaults,...personal};
    }else{
      data[t]={...blank(),...defaults,...current};
    }
  }else{
    data[t]={...blank(),...defaults,...current};
  }
}
localStorage.setItem('gac-data-version',String(DATA_VERSION));
persist();
let auctionList=JSON.parse(localStorage.getItem('gac-auction-list')||'[]');
const saveAuctionList=()=>localStorage.setItem('gac-auction-list',JSON.stringify(auctionList));
let rosterFilter='all';

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


function lineupHtml(d){
  if(!d.lineup?.length)return '<div class="emptyMini">Formazione non ancora disponibile</div>';
  const rows=[d.lineup.slice(0,1),d.lineup.slice(1,5),d.lineup.slice(5,8),d.lineup.slice(8,11)];
  return `<div class="pitch">${rows.map((r,i)=>`<div class="pitchRow row${i}">${r.map(p=>`<div class="shirt"><span>${esc(p.short)}</span><small>${esc(p.pos)}</small></div>`).join('')}</div>`).join('')}</div>`;
}
function rosterHtml(d,t){
  if(!d.roster?.length)return '<div class="emptyMini">Rosa non ancora inserita</div>';
  const roles=['Portiere','Difensore','Centrocampista','Attaccante'];
  const icons={Portiere:'🧤',Difensore:'🛡️',Centrocampista:'⚙️',Attaccante:'⚽'};
  const counts=Object.fromEntries(roles.map(r=>[r,d.roster.filter(p=>p.role===r).length]));
  const filters=`<div class="rosterFilters"><button type="button" class="rosterFilter ${rosterFilter==='all'?'active':''}" data-role="all">Tutti <b>${d.roster.length}</b></button>${roles.map(r=>`<button type="button" class="rosterFilter ${rosterFilter===r?'active':''}" data-role="${r}">${icons[r]} <b>${counts[r]}</b></button>`).join('')}</div>`;
  const visible=rosterFilter==='all'?roles:roles.filter(r=>r===rosterFilter);
  return filters+visible.map(role=>{
    const players=d.roster.filter(p=>p.role===role);
    return `<div class="roleBlock"><h4>${icons[role]} ${role}${role==='Portiere'?'i':role==='Difensore'?'i':role==='Centrocampista'?'i':'i'} <span>${players.length}</span></h4>${players.map(p=>{
      const selected=auctionList.some(x=>x.team===t&&x.name===p.name);
      return `<div class="playerCard"><div class="playerMain"><b>${esc(p.name)}</b><div class="playerMeta"><span class="statusChip ${esc(p.status).toLowerCase().replaceAll(' ','-')}">${esc(p.status)}</span>${(p.tags||[]).map(tag=>`<span class="tagChip">${esc(tag)}</span>`).join('')}</div></div><button type="button" class="starBtn ${selected?'selected':''}" data-team="${esc(t)}" data-player="${esc(p.name)}" aria-label="${selected?'Rimuovi dalla':'Aggiungi alla'} lista asta">${selected?'★':'☆'}</button></div>`;
    }).join('')}</div>`;
  }).join('');
}
function toggleAuctionPlayer(team,name){
  const player=(data[team]?.roster||[]).find(p=>p.name===name)||{};
  const i=auctionList.findIndex(x=>x.team===team&&x.name===name);
  if(i>=0)auctionList.splice(i,1);else auctionList.push({team,name,role:player.role||'',status:player.status||'',tags:player.tags||[]});
  saveAuctionList();renderAuction();
  if(!modal.classList.contains('hidden'))openTeam(team);
  refreshAll();
}

function setTeamSection(name){
  view.querySelectorAll('.teamSectionTab').forEach(btn=>btn.classList.toggle('active',btn.dataset.section===name));
  view.querySelectorAll('.teamSection').forEach(section=>section.classList.toggle('active',section.dataset.section===name));
  const sheet=document.querySelector('.sheet');
  if(sheet)sheet.scrollTo({top:0,behavior:'smooth'});
}
function setRosterFilter(role){
  rosterFilter=role;
  view.querySelectorAll('.rosterFilter').forEach(btn=>btn.classList.toggle('active',btn.dataset.role===role));
  view.querySelectorAll('.roleBlock').forEach(block=>block.hidden=role!=='all'&&block.dataset.role!==role);
}
function openTeam(t,section='formation'){
  const d=data[t];
  const teamIndex=teams.indexOf(t);
  const prev=teams[(teamIndex-1+teams.length)%teams.length];
  const next=teams[(teamIndex+1)%teams.length];
  view.innerHTML=`
    <div class="teamTitle compactTeamTitle">
      <small>SCHEDA SQUADRA • GUIDA ASTA CONTE RC5</small>
      <div class="teamTitleRow"><button type="button" class="teamStep" data-team="${esc(prev)}" aria-label="Squadra precedente">‹</button><div><h2>${t}</h2><p>${esc(d.coach||'Allenatore da definire')} • ${esc(d.module||'Modulo da definire')}</p></div><button type="button" class="teamStep" data-team="${esc(next)}" aria-label="Squadra successiva">›</button></div>
      ${d.source?`<div class="sourceNote">● ${esc(d.source)} · ${esc(d.updated)}</div>`:''}
    </div>
    <div class="teamSectionTabs" role="tablist" aria-label="Sezioni scheda squadra">
      <button type="button" class="teamSectionTab" data-section="formation">⚽ Formazione</button>
      <button type="button" class="teamSectionTab" data-section="roster">👥 Rosa</button>
      <button type="button" class="teamSectionTab" data-section="advice">⭐ Consigli</button>
      <button type="button" class="teamSectionTab" data-section="market">💰 Mercato</button>
      <button type="button" class="teamSectionTab" data-section="notes">📝 Note</button>
    </div>
    <div class="fields rc5Fields">
      <div class="teamSection" data-section="formation">
        <section class="formSection lineupSection"><div class="sectionTitleLine"><h3>Probabile formazione titolare</h3><span class="moduleBadge">${esc(d.module||'')}</span></div>${lineupHtml(d)}<div class="lineupNote">Solo gli 11 probabili titolari. Le alternative restano nella rosa completa.</div></section>
        <section class="formSection"><h3>Assetto squadra</h3>
          <div class="row2"><label><span>Allenatore</span><input id="coach" value="${esc(d.coach)}"></label><label><span>Modulo</span><input id="module" value="${esc(d.module)}"></label></div>
          <label><span>Formazione in formato testo / note gerarchie</span><textarea id="formation" rows="4">${esc(d.formation)}</textarea></label>
        </section>
        <section class="formSection"><h3>Piazzati</h3>
          <div class="row3"><label><span>Rigoristi</span><textarea id="penalties">${esc(d.penalties)}</textarea></label><label><span>Punizioni</span><textarea id="freeKicks">${esc(d.freeKicks)}</textarea></label><label><span>Calci d'angolo</span><textarea id="corners">${esc(d.corners)}</textarea></label></div>
        </section>
      </div>
      <div class="teamSection" data-section="roster">
        <section class="formSection rosterSection"><div class="sectionTitleLine"><h3>Rosa completa</h3><span class="auctionCount">⭐ Lista asta: ${auctionList.length}</span></div>${rosterHtml(d,t)}</section>
      </div>
      <div class="teamSection" data-section="advice">
        <section class="formSection"><h3>Valutazioni Conte</h3>
          <div class="row2"><label class="tagField recommended"><span>⭐ Consigliati</span><textarea id="recommended" placeholder="Un nome per riga">${esc(d.recommended)}</textarea></label><label class="tagField bet"><span>💎 Scommesse</span><textarea id="bets" placeholder="Un nome per riga">${esc(d.bets)}</textarea></label></div>
          <div class="row2"><label class="tagField young"><span>👶 Giovani</span><textarea id="young" placeholder="Un nome per riga">${esc(d.young)}</textarea></label><label class="tagField reliable"><span>🛡️ Affidabili</span><textarea id="reliable" placeholder="Un nome per riga">${esc(d.reliable)}</textarea></label></div>
          <div class="row2"><label class="tagField watch"><span>👀 Osservati / obiettivi</span><textarea id="watch" placeholder="Un nome per riga">${esc(d.watch)}</textarea></label><label class="tagField avoid"><span>🚫 Da evitare</span><textarea id="avoid" placeholder="Un nome per riga">${esc(d.avoid)}</textarea></label></div>
        </section>
      </div>
      <div class="teamSection" data-section="market">
        <section class="formSection"><h3>Mercato</h3>
          <div class="row2"><label><span>Acquisti ufficiali</span><textarea id="arrivals" placeholder="Un nome per riga">${esc(d.arrivals)}</textarea></label><label><span>Cessioni ufficiali</span><textarea id="departures" placeholder="Un nome per riga">${esc(d.departures)}</textarea></label></div>
          <label><span>Trattative / possibili movimenti</span><textarea id="talks" placeholder="Un nome o una nota per riga">${esc(d.talks)}</textarea></label>
        </section>
      </div>
      <div class="teamSection" data-section="notes">
        <section class="formSection"><h3>Note personali</h3><label><span>Note Conte</span><textarea id="notes" rows="7">${esc(d.notes)}</textarea></label></section>
        ${t==='Atalanta'?'<button class="restore" type="button">Ripristina dati editoriali Atalanta</button>':''}
      </div>
      <button class="save compactSave" aria-label="Salva scheda ${t}" title="Salva scheda">✓<span>Salva</span></button>
    </div>`;
  modal.classList.remove('hidden');
  document.body.classList.add('locked');
  view.querySelector('.save').onclick=()=>saveTeam(t);
  view.querySelectorAll('.starBtn').forEach(btn=>btn.onclick=()=>toggleAuctionPlayer(btn.dataset.team,btn.dataset.player));
  view.querySelectorAll('.rosterFilter').forEach(btn=>btn.onclick=()=>setRosterFilter(btn.dataset.role));
  view.querySelectorAll('.teamSectionTab').forEach(btn=>btn.onclick=()=>setTeamSection(btn.dataset.section));
  view.querySelectorAll('.teamStep').forEach(btn=>btn.onclick=()=>openTeam(btn.dataset.team,section));
  const restore=view.querySelector('.restore');
  if(restore)restore.onclick=()=>restoreAtalanta();
  setRosterFilter(rosterFilter);
  setTeamSection(section);
  document.querySelector('.sheet').scrollTop=0;
}

function restoreAtalanta(){
  const personal={};
  ['recommended','bets','young','reliable','avoid','watch','notes'].forEach(k=>personal[k]=data.Atalanta[k]||'');
  data.Atalanta={...blank(),...editorialDefaults.Atalanta,...personal};
  persist();
  openTeam('Atalanta');
  refreshAll();
  alert('Scheda Atalanta ripristinata con i dati editoriali del pacchetto test.');
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

function renderAuction(){
  const box=document.querySelector('#auctionList');
  const filter=document.querySelector('#auctionRoleFilter')?.value||'all';
  document.querySelector('#auctionTabCount').textContent=auctionList.length;
  const enriched=auctionList.map(x=>{
    const p=(data[x.team]?.roster||[]).find(p=>p.name===x.name)||x;
    return {...x,role:p.role||'',status:p.status||'',tags:p.tags||[]};
  });
  const items=filter==='all'?enriched:enriched.filter(x=>x.role===filter);
  const roleIcon={Portiere:'🧤',Difensore:'🛡️',Centrocampista:'⚙️',Attaccante:'⚽'};
  box.innerHTML=items.length?items.map(x=>`<div class="auctionItem"><button class="auctionOpen" onclick="openTeam('${x.team.replaceAll("'","\'")}')"><span class="strategyIcon">${roleIcon[x.role]||'⭐'}</span><span><b>${esc(x.name)}</b><small>${esc(x.team)} • ${esc(x.role||'Ruolo da definire')} • ${esc(x.status||'')}</small></span></button><button class="removeAuction" data-team="${esc(x.team)}" data-player="${esc(x.name)}" aria-label="Rimuovi">×</button></div>`).join(''):`<div class="empty"><strong>La lista asta è vuota</strong><p>Apri la rosa di una squadra e tocca ☆ accanto ai giocatori che vuoi seguire.</p></div>`;
  box.querySelectorAll('.removeAuction').forEach(btn=>btn.onclick=()=>toggleAuctionPlayer(btn.dataset.team,btn.dataset.player));
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

function refreshAll(){renderTeams(document.querySelector('#search').value);renderStrategy();renderMarket();renderAuction()}

document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.tab,.panel').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');document.querySelector('#'+b.dataset.tab).classList.add('active');
  if(b.dataset.tab==='strategy')renderStrategy();if(b.dataset.tab==='market')renderMarket();if(b.dataset.tab==='auction')renderAuction();
});
document.querySelector('.close').onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.querySelector('#search').oninput=e=>renderTeams(e.target.value);
document.querySelector('#strategyFilter').onchange=renderStrategy;
document.querySelector('#marketFilter').onchange=renderMarket;
document.querySelector('#auctionRoleFilter').onchange=renderAuction;

const fi=document.querySelector('#fileInput');
document.querySelector('#refreshBtn').onclick=()=>fi.click();

document.querySelector('#exportBtn').onclick=()=>{
  const payload={app:'Guida Asta Conte',version:'RC5-Modalita-Asta-Compatta',exportedAt:new Date().toISOString(),teams:data};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Guida-Asta-Conte-backup-RC5.json';a.click();URL.revokeObjectURL(a.href);
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
