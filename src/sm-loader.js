(function(attrName, m, r, c) {
  var s = {};
  var n = {};
  var l = document.currentScript.getAttribute(attrName);

  function e() {
    s.f = r.createElement('iframe');
    s.f.style.cssText = 'width:0;height:0; border: none';
    s.f.src = 'about:blank';
    r.body.insertBefore(s.f, r.body.firstChild);

    n.m = s.f.contentWindow;
    n.r = s.f.contentWindow.document;

    s.s = r.createElement('script');
    s.s.type = 'text/javascript';
    s.s.defer = !0;
    s.s.src = c;
    s.s.onload = function() {
      n.m.initWidget(n.r, l);
    };

    n.r.head.appendChild(s.s);
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
})('data-sm', window, document, 'widgets.js');