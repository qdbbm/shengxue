$(function () {

    // tab切换
    $('.js-mod-tab').on('click', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings('.mod-tab-content').find('.mod-tab-pane').addClass('mbui-hide');
        $(this).parent().siblings('.mod-tab-content').find('.mod-tab-pane:eq(' + $(this).index() + ')').removeClass('mbui-hide');
    })

    // 搜索
    $('.js-search').on('click', function () {
        $(this).addClass('active');
        $(this).find('input').focus();
    })

    $('.js-search').on('blur', 'input', function () {
        $(this).parent().removeClass('active');
    })

    // 全文
    $('.js-txt-more').on('click', function () {        
        var _txtObj = $(this).siblings('.mumm-txt');
        if (!_txtObj.hasClass('mumm-txt--more')) {
            _txtObj.addClass('mumm-txt--more');
            $(this).html('收起');
        } else {
            _txtObj.removeClass('mumm-txt--more');
            $(this).html('全文');
        }
    })

})

function openShareTips() {
    $('.mod-share-wrap').addClass('active');
}

function closeShareTips() {
    $('.mod-share-wrap').removeClass('active');
}