/* Heat System contact form: sends to Web3Forms in the background and shows the result in Hebrew.
   Without JavaScript the form still posts to Web3Forms directly. */
(function () {
  document.querySelectorAll('form[data-hs-form]').forEach(function (form) {
    var ok = form.querySelector('[data-form-alert]');
    var err = form.querySelector('[data-form-alert-danger]');
    var btn = form.querySelector('[type="submit"]');
    var label = btn ? btn.textContent : '';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var trap = form.elements.botcheck;
      if (trap && trap.checked) return;
      if (ok) ok.hidden = true;
      if (err) err.hidden = true;
      if (btn) { btn.disabled = true; btn.textContent = 'שולח...'; }
      fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (!data || !data.success) throw new Error('not sent');
          form.reset();
          if (ok) ok.hidden = false;
        })
        .catch(function () { if (err) err.hidden = false; })
        .then(function () { if (btn) { btn.disabled = false; btn.textContent = label; } });
    });
  });
})();
