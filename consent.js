/* Nice Catch! cookie consent: Google Analytics loads only after the visitor accepts. */
(function () {
  var ID = 'G-JMMJ8J6T3F', KEY = 'nc-consent';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function loadGA() {
    if (window.__ncGA) return; window.__ncGA = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', ID, { anonymize_ip: true });
    var s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID; document.head.appendChild(s);
  }
  function banner() {
    var b = document.createElement('div'); b.className = 'cookie'; b.setAttribute('role', 'region'); b.setAttribute('aria-label', 'Cookie choice');
    b.innerHTML = '<p>We use Google Analytics cookies to see how visitors find and use this site, including visits from AI assistants. <a href="/privacy/">Privacy notice</a></p>' +
      '<div class="cookie-btns"><button type="button" class="btn" data-c="yes">Accept</button><button type="button" class="btn ghost" data-c="no">Decline</button></div>';
    b.addEventListener('click', function (e) {
      var c = e.target.getAttribute && e.target.getAttribute('data-c'); if (!c) return;
      set(c === 'yes' ? 'granted' : 'denied'); if (c === 'yes') loadGA(); b.remove();
    });
    document.body.appendChild(b);
  }
  function init() { var v = get(); if (v === 'granted') loadGA(); else if (v !== 'denied') banner(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.ncCookieReset = function () { set(''); location.reload(); };
})();
