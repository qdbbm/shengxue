$(function () {
  var _count = 60; //总时间为1秒
  var _curCount = 0; //当前剩余秒数
  var _code = ''; //验证码
  var _codeLength = 6; //验证码长度
  var _timer = null; //timer变量，控制时间

  function getCode() {
    _curCount = _count;
    var _inputMobile = $('#userPhone').val();
    if (_inputMobile == '') {
      alert('请输入手机号');
      $('#userPhone').focus();
      return false;
    }

    //产生验证码
    for (var i = 0; i < _codeLength; i++) {
      _code += parseInt(Math.random() * 9).toString();
    };

    //设置按钮效果开始计时
    $('.btn-get-code').attr('disabled', true);
    $('.btn-get-code').html(_curCount + 's后重新获取');
    $('.btn-get-code').addClass('disabled');

    _timer = setInterval(setRemainTime, 1000);  //启动计时器，1秒执行一次

    //向后台发送处理数据
    $.ajax({
      //写在这里
    });
  }

  function setRemainTime() {
    if (_curCount == 0) {
      clearInterval(_timer); //停止计时器
      $('.btn-get-code').removeAttr('disabled'); //启用按钮
      $('.btn-get-code').html('重发验证码');
      $('.btn-get-code').removeClass('disabled');
      _code = '';  //清除验证码
    } else {
      _curCount --;
      $('.btn-get-code').html(_curCount + 's后重新获取');
    }
  }
  
  //点击获取验证码
  $('.btn-get-code').click(function () {
    getCode();
  });
});