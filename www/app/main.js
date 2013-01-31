define(['zest', 'app/Dialog/dialog'], function($z, Dialog) {
  $z.render(Dialog, {
    width: 300,
    height: 50,
    content: "<p>It looks like this is working.</p>",
    confirmText: 'Close'
  }, document.body);
});
