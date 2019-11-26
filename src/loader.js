import { CONFIGS } from '@environment';

(function(attrName, m, r, c) {
  var s = {};
  var n = {};
  var l = document.currentScript.getAttribute(attrName);

  function e() {
    s.f = r.createElement('iframe');
    s.f.style.cssText = 'width:0;height:0;border:none;z-index:2147483647;';
    s.f.src = 'about:blank';
    r.body.insertBefore(s.f, r.body.firstChild);

    n.m = s.f.contentWindow;
    n.r = s.f.contentWindow.document;

    m.setTimeout(function() {
      n.m = s.f.contentWindow;
      n.r = s.f.contentWindow.document || s.f.contentDocument;

      s.s = r.createElement('script');
      s.s.type = 'text/javascript';
      s.s.defer = true;
      s.s.src = c;
      s.s.onload = function() {
        n.m.initWidget(n.r, l);
      };

      n.r.head.appendChild(s.s);
    }, 500);
  }

  function w(x) {
    if (x.data.type == 'init' || x.data.type == 'showModal') {
      s.f.setAttribute('style', x.data.data.style);
    }
  }

  m.attachEvent
    ? m.attachEvent('onload', e)
    : m.addEventListener('load', e, !1);

  m.attachEvent
    ? m.attachEvent('onmessage', w)
    : m.addEventListener('message', w, !1);
})(
  'data-sm',
  window,
  document,
  `https://widgets.salonmanager.${CONFIGS.domainExtension}/widgets.js`
);
