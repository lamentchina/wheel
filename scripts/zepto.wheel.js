;(function($){
  $.extend($.fn, {
    wheel: function(option){
      var defaults = {
        restaraunts: ['垃圾车','雇佣兵', "爱丽丝", "红桃皇后", "欢迎来到蜂巢", "异形犬", "T-病毒", "舔食者"],
        colors: ['#7e1f20',"#FFFFFF", "#7e1f20", "#FFFFFF", "#7e1f20", "#FFFFFF", "#7e1f20", "#FFFFFF"],
        strokeColor: '#000',
        fontColor: '#000',
        width: 560,
        outsideRadius: 280, //大转盘外圆的半径
        textRadius: 225, //大转盘奖品位置距离圆心的距离
        insideRadius: 54, //大转盘内圆的半径
        startAngle: 0, //开始角度
        bRotate: false //false:停止;ture:旋转
      };
      var opts = $.extend({}, defaults, option);
      var _this = this.get(0);
      var rest = opts.restaraunts;
      var _length = rest.length;
      var arc = Math.PI / (_length/2);
      var ctx = _this.getContext('2d');
      ctx.clearRect(0, 0, opts.width, opts.width);
      ctx.strokeStyle = opts.strokeColor;
      ctx.font = '22px Myriad Set Pro';
      for(var i = 0; i<_length;i++) {
        var x = opts.width/2;
        var angle = opts.startAngle + i*arc;
        ctx.fillStyle = opts.colors[i];
        ctx.beginPath();
        ctx.arc(x,x, opts.outsideRadius, angle, angle+arc, false);
        ctx.arc(x,x, opts.insideRadius, angle+arc, angle, true);
        ctx.stroke();
        ctx.fill();
        ctx.save();
        ctx.fillStyle = opts.fontColor;

        var text = rest[i];
        var line_height = 17;
        ctx.translate(280 + Math.cos(angle+arc/2)*opts.textRadius, 280 + Math.sin(angle+arc/2)*opts.textRadius);

        ctx.rotate(angle+arc/2 +Math.PI/2);
        ctx.fillText(text, -ctx.measureText(text).width/2, 0);
        ctx.restore();
      };



      return this;
    }
  });
})(Zepto);
