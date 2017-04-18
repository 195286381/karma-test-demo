describe('点赞图标单元测试', function() {
  it('点击拇指图标,数值加一', function() {
    $(function() {
      let $mountObj = $('<div/>');
      $mountObj.thumb();
      let originalValue = $mountObj.find('.thumb-value').html();
      $mountObj.find('.thumb-image').trigger('click');
      let newValue = $mountObj.find('.thumb-value').html();
      expect(originalValue + 1).toBe(newValue);
    })
  });
});
