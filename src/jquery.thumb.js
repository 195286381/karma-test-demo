(function($) {
  $.fn.thumb = function() {
    // const defaults = {};
    // options = $.extend(defaults, options);
    // this指向调用的jQuery对象.
    let initValue = 0;
    const $mountObj = this;
    const $thumbEle = $(`
      <div class="thumb-surrond">
        <img class="thumb-image" src="images/thumb.jpg" alt="img">
        <div class="thumb-value">${initValue}</div>
      </div>
    `);
    $mountObj.append($thumbEle);

    $('.thumb-image').on('click', function() {
      $mountObj.find('.thumb-value').html(++initValue);
    });
  };
})(jQuery);
