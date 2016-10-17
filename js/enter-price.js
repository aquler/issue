// 显示文件名
$(function() {
$('#doc-form-file').on('change', function() {
  var fileNames = '';
  $.each(this.files, function() {
    fileNames += '<span class="am-badge">' + this.name + '</span> ';
  });
  $('#file-list').html(fileNames);
});
});

var enterPrice = (function(){
    //获取一些变量
    var $delBtn = $("#price-form .bottom button:first-child"); //修改按钮
    var $inputs = $("#price-data tbody input"); //tbody里的input
    var $formSubmit = $("#fileForm button[type=submit]"); //导入文件的submit
    // var $searchSubmit = $("#search input[type=submit]"); //查询的submit
    // var $downloadSubmit = $("#download input[type=submit]"); //下载模版的submit

    var $price = $("#price-data tbody>tr:nth-child(n+2)>td:nth-child(n+2) input"); //获取所有价格数据
    var $date = $("#price-data tbody>tr:first-child>td:nth-child(n+2)"); //获取日期
    var $model = $("#price-data tbody>tr:nth-child(n+2)>td:first-child"); //获取型号
    //获取原始价格数据
    var originPriceData = getPriceData();
    var originDateData = getDateData();
    var originModelData = getModelData();
    //定义一些函数
    //获取页面价格数据
    function getPriceData(){
        //获取标准价格
        var prices = [];
        $price.each(function(){
            prices.push($(this).val());
        });
        return prices;
    }
    //获取日期 默认length=7
    function getDateData(){
        var dates = [];
        $date.each(function(){
            dates.push($(this).text());
        });  
        return dates;     
    }
    //获取型号
    function getModelData(){
        var models = [];
        $model.each(function(){
            models.push($(this).text());
        });    
        return models;
    }

    //获得数据修改后的数据，并ajax传给后台
    function getData(){
        //获取标准价格，时间，型号
        var prices = getPriceData();
        var dates = getDateData();
        var models = getModelData();
        //组合成json格式放在datas里
        var datas = [];
        for(var i=0,len_d=dates.length;i<len_d;i++){

            for(var j=0,len_m=models.length;j<len_m;j++){
                datas[j*len_d+i] ={};
                datas[j*len_d+i].time = dates[i];
                datas[j*len_d+i].model = models[j];
                datas[j*len_d+i].price = prices[j*len_d+i];
            }
        };
        if(dates.toString() == originDateData.toString() && models.toString() == originModelData.toString()){
            //ajax传数据
            $.ajax({
                type : "POST",
                url : "/test/Merc/infoModify.html",
                data: {
                    "items": datas
                },
                success : function(data){
                    if(data.status == "right"){
                        saveDataTrue();
                    } else {
                        saveDataFalse();
                    }
                },
                error : function(){

                },
                dataType : "json"
            });  
        } else if(dates.toString() != originDateData.toString()){
            $(".save-return").html("亲，不可以改日期哦！");
        } else if(models.toString() != originModelData.toString()){
            $(".save-return").html("亲，不可以改型号哦！");
        } else {
            $(".save-return").html("填入数据有误，保存失败，请重新修改.");
        }
        

    };
    //保存数据成功返回函数
    function saveDataTrue(){
        $(".save-return").html("保存成功.");
        originPriceData = getPriceData();

    };
    //保存数据有误返回函数
    function saveDataFalse(){
        $(".save-return").html("填入数据有误，保存失败，请重新修改.");
        $price.each(function(index){
           $(this).val(originPriceData[index]);
        }); 
        $date.each(function(index){
            $(this).text(originDateData[index]);
        });
        $model.each(function(index){
            $(this).text(originModelData[index]);
        });
    };

    //定义事件
    //table的修改事件
    $delBtn.on("click",function(){
        if($(this).text() == "修改"){
            $inputs.each(function(){
                this.readOnly = false;
            });
            $(this).text("确定");  
        } else {
             $inputs.each(function(){
                this.readOnly = true;
            });
            $(this).text("修改");            
        }
    });
    //未导入文件时return
    $formSubmit.on("click",function(check){
        if($("#doc-form-file").val() == "") check.preventDefault();//此处阻止提交表单
    });  

    //保存事件
    $("#price-form .bottom button[type=submit]").on("click",getData);
})();

