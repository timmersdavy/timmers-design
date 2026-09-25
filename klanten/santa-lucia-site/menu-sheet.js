/* ============================================================
   Menukaart uit Google Sheets (mini-CMS, optie 3 uit de CMS-vergelijking)
   Marina bewerkt de kaart in een gewone Google Sheet; deze site haalt
   de gegevens automatisch op via de gviz/CSV-export van die sheet.
   Voorwaarde: de sheet staat op "Iedereen met de link kan bekijken".
   Lukt het ophalen niet (geen internet, sheet nog niet gedeeld, …),
   dan blijft gewoon de statische voorbeeldkaart in de HTML staan.
   ============================================================ */
(function () {
  'use strict';

  var grid = document.getElementById('menu-grid');
  if (!grid) return;
  var sheetId = grid.getAttribute('data-menu-sheet-id');
  if (!sheetId) return;
  var statusEl = document.querySelector('[data-menu-status]');

  var url = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?tqx=out:csv&gid=0';

  function parseCSV(text) {
    var rows = [];
    var row = [];
    var field = '';
    var inQuotes = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else { inQuotes = false; }
        } else { field += c; }
      } else if (c === '"') {
        inQuotes = true;
      } else if (c === ',') {
        row.push(field); field = '';
      } else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        if (row.length > 1 || row[0] !== '') rows.push(row);
        row = [];
      } else {
        field += c;
      }
    }
    if (field !== '' || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  function toRecords(rows) {
    if (!rows.length) return [];
    var headers = rows[0].map(function (h) { return h.trim(); });
    return rows.slice(1)
      .filter(function (r) { return r.some(function (v) { return v.trim() !== ''; }); })
      .map(function (r) {
        var rec = {};
        headers.forEach(function (h, i) { rec[h] = (r[i] || '').trim(); });
        return rec;
      });
  }

  function formatPrijs(raw) {
    var n = parseFloat((raw || '').replace(',', '.'));
    if (isNaN(n)) return '';
    return '€ ' + n.toFixed(2).replace('.', ',');
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s || '';
    return div.innerHTML;
  }

  function render(records) {
    var zichtbaar = records.filter(function (r) {
      var t = (r.Tonen || '').toLowerCase();
      return t === '' || t === 'ja' || t === 'yes' || t === 'true';
    });
    if (!zichtbaar.length) return false;

    var categorieen = [];
    var perCategorie = {};
    zichtbaar.forEach(function (r) {
      var cat = r.Categorie || 'Kaart';
      if (!perCategorie[cat]) { perCategorie[cat] = []; categorieen.push(cat); }
      perCategorie[cat].push(r);
    });

    var html = categorieen.map(function (cat) {
      var items = perCategorie[cat].map(function (r) {
        var prijs = formatPrijs(r.Prijs);
        var beschrijving = r.Beschrijving ? '<p class="menu-beschrijving">' + escapeHtml(r.Beschrijving) + '</p>' : '';
        return (
          '<li>' +
            '<div class="menu-item-rij"><span class="naam">' + escapeHtml(r.Naam) + '</span>' +
            '<span class="lijn" aria-hidden="true"></span>' +
            (prijs ? '<span class="prijs">' + prijs + '</span>' : '') + '</div>' +
            beschrijving +
          '</li>'
        );
      }).join('');
      return (
        '<div class="menu-cat reveal is-visible">' +
          '<h3>' + escapeHtml(cat) + '</h3>' +
          '<ul class="menu-list">' + items + '</ul>' +
        '</div>'
      );
    }).join('');

    grid.innerHTML = html;
    return true;
  }

  fetch(url)
    .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.text(); })
    .then(function (text) {
      var records = toRecords(parseCSV(text));
      var ok = render(records);
      if (!ok) throw new Error('Sheet leeg of geen enkele rij op "Tonen = ja"');
    })
    .catch(function (err) {
      // De statische voorbeeldkaart in de HTML blijft gewoon staan als fallback.
      // Kleine, discrete statusregel + console-warning, zodat Davy/Marina het meteen zien bij het testen.
      console.warn('Menukaart uit Google Sheets kon niet geladen worden, voorbeeldkaart getoond:', err.message);
      if (statusEl) {
        statusEl.textContent = 'Kon de live menukaart niet ophalen (' + err.message + ') — voorbeeldkaart getoond.';
      }
    });
})();
