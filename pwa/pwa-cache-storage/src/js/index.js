var normalData = {
    initTime: {
        hour: '00',
        minute: '00',
        second: '00'
    },
    beginTime: 3 * 1000 * 60 * 60
};
var methods = {
    //跳转下载页
    linkDown: function linkDown() {
        window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.xingjiabi.shengsheng';
    },

    // 执行倒计时
    doTime: function doTime() {
        var beginTime = normalData.beginTime;
        var cutTime = methods.cutTime,
            renderCutTime = methods.renderCutTime;

        renderCutTime(cutTime(beginTime));
        if (beginTime > 0) {
            normalData.beginTime -= 1000;
            setTimeout(methods.doTime, 1000);
        }
    },

    //渲染倒计时
    renderCutTime: function renderCutTime(_ref) {
        var _ref$hour = _ref.hour,
            hour = _ref$hour === undefined ? '00' : _ref$hour,
            _ref$minute = _ref.minute,
            minute = _ref$minute === undefined ? '00' : _ref$minute,
            _ref$second = _ref.second,
            second = _ref$second === undefined ? '00' : _ref$second;

        var str = '<li class="time">' + hour + '</li>\n                    <li class="doc">:</li>\n                    <li class="time">' + minute + '</li>\n                    <li class="doc">:</li>\n                    <li class="time">' + second + '</li>';
        document.getElementById('js-time-list').innerHTML = str;
    },

    //倒计时
    cutTime: function cutTime(time) {
        var addZero = methods.addZero;

        if (time > 0) {
            time = time / 1000;
            var hour = void 0;
            var minute = void 0;
            var second = void 0;
            hour = addZero(parseInt(time / (60 * 60) % 24));
            minute = addZero(parseInt(time / 60 % 60));
            second = addZero(parseInt(time % 60));
            var reTime = { hour: hour, minute: minute, second: second };
            return reTime;
        } else {
            return normalData.initTime;
        }
    },
    addZero: function addZero(t) {
        if (t < 10) {
            return '0' + t;
        } else {
            return t + '';
        }
    }
};

//初始化页面
var initPage = function initPage() {
    methods.doTime();
};

window.onload = function () {
    initPage();
};