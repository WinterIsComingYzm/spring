$(function(){
    var xihaListBox = $('.xiha-list .weui-cells'); 
    var weuiContNotdeal = $('.xiha-weui.xiha-notdeal').clone();
    var weuiContFollowed = $('.xiha-weui.xiha-followed').clone();
    var weuiContStored = $('.xiha-weui.xiha-stored').clone();
    var weuiContListened = $('.xiha-weui.xiha-listened').clone();
    var weuiContMoneypart = $('.xiha-weui.xiha-moneypart').clone();
    var weuiContDeal = $('.xiha-weui.xiha-deal').clone();
    var prefixeN = 'weui-item-';
    var prefixeF = 'weui-item-';
    var prefixeS = 'weui-item-';
    var prefixeL = 'weui-item-';
    var prefixeM = 'weui-item-';
    var prefixeD = 'weui-item-';
    xihaListBox.empty();
    
    $.getJSON('xihaKehu.json',function(data){

    	$.each(data.listNotDeal,function(index,value){
    		var NodeN = weuiContNotdeal.clone();
    	//未处理
    	$('.xiha-list-img',NodeN).attr({src:value.imgURL});
    	$('.xiha-list-name',NodeN).text(value.name);
    	$('.xiha-list-desc',NodeN).text(value.desc);
    	 NodeN.addClass(prefixeN + index);
    	 NodeN.prop('id',prefixeN + index);
    	 NodeN.appendTo(xihaListBox);
    	});

        $.each(data.listFollowed,function(index,value){
            var NodeF = weuiContFollowed.clone();
        //已跟踪
        $('.xiha-list-img',NodeF).attr({src:value.imgURL});
        $('.xiha-list-name',NodeF).text(value.name);
        $('.xiha-list-desc',NodeF).text(value.desc);
         NodeF.addClass(prefixeF + index);
         NodeF.prop('id',prefixeF + index);
         NodeF.appendTo(xihaListBox);
        });

        $.each(data.listStored,function(index,value){
            var NodeS = weuiContStored.clone();
        //已进店
        $('.xiha-list-img',NodeS).attr({src:value.imgURL});
        $('.xiha-list-name',NodeS).text(value.name);
        $('.xiha-list-desc',NodeS).text(value.desc);
         NodeS.addClass(prefixeS + index);
         NodeS.prop('id',prefixeS + index);
         NodeS.appendTo(xihaListBox);
        });

        $.each(data.listListened,function(index,value){
            var NodeL = weuiContListened.clone();
        //已听课
        $('.xiha-list-img',NodeL).attr({src:value.imgURL});
        $('.xiha-list-name',NodeL).text(value.name);
        $('.xiha-list-desc',NodeL).text(value.desc);
         NodeL.addClass(prefixeL + index);
         NodeL.prop('id',prefixeL + index);
         NodeL.appendTo(xihaListBox);
        });

        $.each(data.listMoneypart,function(index,value){
            var NodeM = weuiContMoneypart.clone();
        //已交定金
        $('.xiha-list-img',NodeM).attr({src:value.imgURL});
        $('.xiha-list-name',NodeM).text(value.name);
        $('.xiha-list-desc',NodeM).text(value.desc);
         NodeM.addClass(prefixeM + index);
         NodeM.prop('id',prefixeM + index);
         NodeM.appendTo(xihaListBox);
        });

        $.each(data.listDeal,function(index,value){
            var NodeD = weuiContDeal.clone();
        //已处理
        $('.xiha-list-img',NodeD).attr({src:value.imgURL});
        $('.xiha-list-name',NodeD).text(value.name);
        $('.xiha-list-desc',NodeD).text(value.desc);
         NodeD.addClass(prefixeD + index);
         NodeD.prop('id',prefixeD + index);
         NodeD.appendTo(xihaListBox);
        });

    });
});

