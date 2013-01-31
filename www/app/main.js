define(['zest', 'app/Dialog/dialog'], function($z, Dialog) {
  $z.render(Dialog, {
    width: 300,
    height: 50,
    content: "<p>Welcom to ZestJS.</p>",
    confirmText: 'Close'
  }, document.body);
});
